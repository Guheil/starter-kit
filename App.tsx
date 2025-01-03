import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Modal,
  Image,
  ActivityIndicator
} from 'react-native';
import {
  ViroARScene,
  ViroARSceneNavigator,
  ViroTrackingStateConstants,
  Viro3DObject,
  ViroAmbientLight,
  ViroSpotLight,
  ViroNode,
  ViroQuad
} from '@reactvision/react-viro';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  model3d: string;
}

const SAMPLE_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Water Tank',
    description: 'High-capacity water storage solution',
    price: 15000,
    image: 'https://picsum.photos/200',
    model3d: require('./assets/objects3D/sample.glb'),
  },
  {
    id: '2',
    name: 'Storage Tank',
    description: 'Industrial storage solution',
    price: 18000,
    image: 'https://picsum.photos/200',
    model3d: require('./assets/objects3D/sample.glb'),
  },
];

interface ProductARSceneProps {
  product: Product;
}

const ProductARScene: React.FC<ProductARSceneProps> = ({ product }) => {
  const [isTracking, setIsTracking] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [position] = useState<[number, number, number]>([0, -0.5, -1]);
  const [scale] = useState<[number, number, number]>([0.2, 0.2, 0.2]);
  const [rotation, setRotation] = useState<[number, number, number]>([0, 0, 0]);

  const onInitialized = (state: string) => {
    if (state === ViroTrackingStateConstants.TRACKING_NORMAL) {
      setIsTracking(true);
    } else if (state === ViroTrackingStateConstants.TRACKING_NONE) {
      setIsTracking(false);
    }
  };

  const onLoadStart = () => {
    setIsLoading(true);
  };

  const onLoadEnd = () => {
    setIsLoading(false);
  };

  const onError = (event: any) => {
    console.error("3D Object Loading Error:", event);
    setIsLoading(false);
  };

  return (
    <ViroARScene onTrackingUpdated={onInitialized}>
      <ViroAmbientLight color="#ffffff" intensity={200} />
      <ViroSpotLight
        innerAngle={5}
        outerAngle={25}
        direction={[0, -1, 0]}
        position={[0, 5, 1]}
        color="#ffffff"
        castsShadow={true}
        shadowMapSize={2048}
        shadowNearZ={2}
        shadowFarZ={7}
        shadowOpacity={0.7}
      />

      <ViroNode position={position} dragType="FixedToWorld">
        <Viro3DObject
          source={product.model3d}
          type="GLB"
          position={[0, 0, 0]}
          scale={scale}
          rotation={rotation}
          lightReceivingBitMask={2}
          shadowCastingBitMask={1}
          transformBehaviors={['billboard']}
          onError={onError}
          onLoadStart={onLoadStart}
          onLoadEnd={onLoadEnd}
        />

        <ViroQuad
          rotation={[-90, 0, 0]}
          position={[0, -0.001, 0]}
          width={2.5}
          height={2.5}
          arShadowReceiver={true}
        />
      </ViroNode>
    </ViroARScene>
  );
};

const ProduktoElyukalApp: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isARModalVisible, setIsARModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const renderProduct = ({ item }: { item: Product }) => (
    <TouchableOpacity
      style={styles.productCard}
      onPress={() => setSelectedProduct(item)}
    >
      <Image
        source={{ uri: item.image }}
        style={styles.productImage}
      />
      <View style={styles.productDetails}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productPrice}>₱{item.price.toFixed(2)}</Text>
      </View>
    </TouchableOpacity>
  );

  const ProductDetailModal = () => {
    if (!selectedProduct) return null;

    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={!!selectedProduct}
        onRequestClose={() => setSelectedProduct(null)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Image
              source={{ uri: selectedProduct.image }}
              style={styles.modalImage}
            />
            <Text style={styles.modalProductName}>{selectedProduct.name}</Text>
            <Text style={styles.modalDescription}>{selectedProduct.description}</Text>
            <Text style={styles.modalPrice}>₱{selectedProduct.price.toFixed(2)}</Text>

            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.arButton}
                onPress={() => {
                  setIsARModalVisible(true);
                }}
              >
                <Text style={styles.arButtonText}>View in AR</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => setSelectedProduct(null)}
              >
                <Text style={styles.closeButtonText}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    );
  };

  const ARModal = () => {
    if (!selectedProduct) return null;

    return (
      <Modal
        animationType="slide"
        transparent={false}
        visible={isARModalVisible}
        onRequestClose={() => setIsARModalVisible(false)}
      >
        <View style={styles.arModalContainer}>
          <ViroARSceneNavigator
            autofocus={true}
            initialScene={{
              scene: () => <ProductARScene product={selectedProduct} />,
            }}
            style={styles.arNavigator}
          />
          {isLoading && (
            <View style={styles.loadingContainer}>
              <ActivityIndicator size="large" color="#2c3e8c" />
              <Text style={styles.loadingText}>Loading 3D Model...</Text>
            </View>
          )}
          <View style={styles.arControls}>
            <TouchableOpacity
              style={styles.closeARButton}
              onPress={() => setIsARModalVisible(false)}
            >
              <Text style={styles.closeARButtonText}>Close AR View</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>PRODUKTO ELYUKAL</Text>
      <FlatList
        data={SAMPLE_PRODUCTS}
        renderItem={renderProduct}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.productGrid}
      />

      <ProductDetailModal />
      <ARModal />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8',
    paddingTop: 50,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2c3e8c',
    textAlign: 'center',
    marginBottom: 20,
  },
  productGrid: {
    paddingHorizontal: 10,
  },
  productCard: {
    flex: 1,
    margin: 5,
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  productImage: {
    width: '100%',
    height: 150,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  productDetails: {
    padding: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2c3e8c',
  },
  productPrice: {
    fontSize: 14,
    color: '#2c3e8c',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    width: '85%',
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 20,
    alignItems: 'center',
  },
  modalImage: {
    width: 250,
    height: 250,
    borderRadius: 10,
  },
  modalProductName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2c3e8c',
    marginVertical: 10,
  },
  modalDescription: {
    fontSize: 16,
    color: '#34495e',
    textAlign: 'center',
    marginBottom: 10,
  },
  modalPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e8c',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 15,
  },
  arButton: {
    backgroundColor: '#2c3e8c',
    padding: 10,
    borderRadius: 8,
    marginRight: 10,
  },
  arButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  closeButton: {
    backgroundColor: '#e74c3c',
    padding: 10,
    borderRadius: 8,
  },
  closeButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  arModalContainer: {
    flex: 1,
  },
  arNavigator: {
    flex: 1,
  },
  arControls: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  closeARButton: {
    backgroundColor: '#2c3e8c',
    padding: 15,
    borderRadius: 10,
  },
  closeARButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  loadingContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.7)',
  },
  loadingText: {
    marginTop: 10,
    color: '#2c3e8c',
    fontSize: 16,
    fontWeight: 'bold',
  }
});

export default ProduktoElyukalApp;