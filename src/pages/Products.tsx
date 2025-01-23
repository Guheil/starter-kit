import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import styles from '../assets/style/productStyle';

const sampleProducts = [
  {
    id: 1,
    name: 'Sukang Iloco',
    price: 99.99,
    description: 'This is a detailed description of product 1.',
    image: require('../assets/img/product-images/sukang-iloco.png'),
    model3d: require('../assets/3d-assets/sukangiloco.glb'), 
    shopLocation: 'Bacnotan, La Union',
  },
  {
    id: 2,
    name: 'Meme Test',
    price: 149.99,
    description: 'This is a detailed description of product 2.',
    image: require('../assets/img/furniture.jpg'),
    model3d: require('../assets/3d-assets/meme.glb'),
    shopLocation: 'Bacnotan, La Union', 
  },
  {
    id: 3,
    name: 'Vigan Basi',
    price: 149.99,
    description: 'This is a detailed description of product 2.',
    image: require('../assets/img/product-images/basi-wine.jpg'),
    model3d: require('../assets/3d-assets/basi-wine.glb'),
    shopLocation: 'Bacnotan, La Union', 
  },
  {
    id: 4,
    name: 'Furniture',
    price: 149.99,
    description: 'This is a detailed description of product 2.',
    image: require('../assets/img/furniture.jpg'),
    model3d: require('../assets/3d-assets/sukangiloco.glb'),
    shopLocation: 'Bacnotan, La Union', 
  },
  {
    id: 5,
    name: 'Furniture',
    price: 149.99,
    description: 'This is a detailed description of product 2.',
    image: require('../assets/img/furniture.jpg'),
    model3d: require('../assets/3d-assets/sukangiloco.glb'),
    shopLocation: 'Bacnotan, La Union',
  },
  {
    id: 6,
    name: 'Furniture',
    price: 149.99,
    description: 'This is a detailed description of product 2.',
    image: require('../assets/img/furniture.jpg'),
    model3d: require('../assets/3d-assets/sukangiloco.glb'),
    shopLocation: 'Bacnotan, La Union', 
  },
];

const Products = ({ navigation }) => {
  const [text, onChangeText] = useState('');

  const filteredProducts = sampleProducts.filter((product) =>
    product.name.toLowerCase().includes(text.toLowerCase())
  );

  const handleProductPress = (product) => {
    navigation.navigate('ProductDetails', { product });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.searchBarContainer}>
          <TextInput
            style={styles.searchBar}
            onChangeText={onChangeText}
            value={text}
            placeholder="Search Products"
            placeholderTextColor="#888"
          />
        </View>
        <ScrollView
          style={styles.productContainer}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.productGrid}>
            {filteredProducts.map((product) => (
              <TouchableOpacity
                key={product.id}
                style={styles.card}
                onPress={() => handleProductPress(product)}
              >
                <Image
                  source={product.image}
                  style={styles.productImage}
                />
                <View style={styles.cardTextContainer}>
                  <Text style={styles.cardText}>{product.name}</Text>
                  <Text style={styles.priceText}>₱{product.price.toFixed(2)}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Products;
