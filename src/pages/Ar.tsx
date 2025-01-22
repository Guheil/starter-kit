import React, { useState } from 'react';
import styles from '../assets/style/arPageStyle';
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
  ViroQuad,
  ViroAnimations
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
    name: 'Sukang Iloko',
    description: 'This is for testing purposes only',
    price: 15000,
    image: 'https://picsum.photos/200',
    model3d: require('../assets/3d-assets/sukangiloco.glb'),
  },

  {
    id: '2',
    name: 'Another Product',
    description: 'This is for testing purposes only',
    price: 18000,
    image: 'https://picsum.photos/200',
      model3d: require('../assets/3d-assets/sukangiloco.glb'),
  },
];

interface ProductARSceneProps {
  product: Product;
}

const ProductARScene: React.FC<ProductARSceneProps> = ({ product }) => {
  const [isTracking, setIsTracking] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [position] = useState<[number, number, number]>([0, 0, -1]); // Modified position
  const [scale] = useState<[number, number, number]>([1, 1, 1]); // Modified scale
  const [rotation, setRotation] = useState<[number, number, number]>([0, 0, 0]);

  const onInitialized = (state: string) => {
    if (state === ViroTrackingStateConstants.TRACKING_NORMAL) {
      setIsTracking(true);
    } else if (state === ViroTrackingStateConstants.TRACKING_NONE) {
      setIsTracking(false);
    }
  };

  const onLoadStart = () => {
    console.log("Started loading 3D model");
    setIsLoading(true);
  };

  const onLoadEnd = () => {
    console.log("Finished loading 3D model");
    setIsLoading(false);
  };

  const onError = (event: any) => {
    console.error("3D Object Loading Error:", event);
    setIsLoading(false);
  };

  return (
    <ViroARScene onTrackingUpdated={onInitialized}>
      {/* Add ambient light to ensure model is visible */}
      <ViroAmbientLight color="#FFFFFF" intensity={1000} />

      <ViroNode position={position}>
        <Viro3DObject
          source={product.model3d}
          type="GLB"
          position={[0, -1, 0]}
          scale={scale}
          rotation={rotation}
          onError={onError}
          onLoadStart={onLoadStart}
          onLoadEnd={onLoadEnd}
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


export default ProduktoElyukalApp;