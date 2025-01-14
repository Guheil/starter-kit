import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Modal,
  Image,
  ActivityIndicator,
} from 'react-native';
import {
  ViroARSceneNavigator,
} from '@reactvision/react-viro';
import ProductARScene from '../components/ProductARScene.tsx'
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
    model3d: require('../assets/sample.glb'),
  },
  {
    id: '2',
    name: 'Storage Tank',
    description: 'Industrial storage solution',
    price: 18000,
    image: 'https://picsum.photos/200',
    model3d: require('../assets/sample.glb'),
  },
];

const Home: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isARModalVisible, setIsARModalVisible] = useState(false);

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
                onPress={() => setIsARModalVisible(true)}
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
});

export default Home;
