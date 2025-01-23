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
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const sampleProducts = [
  {
    id: 1,
    name: 'Sukang Iloco',
    description: 'This is a detailed description of product 1.',
    image: require('../assets/img/food.jpg'),
    model3d: require('../assets/3d-assets/sukangiloco.glb'),
    location: 'Bacnotan',
    rating: '4.8', // Add rating
  },
  {
    id: 2,
    name: 'Furniture',
    description: 'This is a detailed description of product 2.',
    image: require('../assets/img/furniture.jpg'),
    model3d: require('../assets/3d-assets/sukangiloco.glb'),
    location: 'San Juan',
    rating: '4.5', // Add rating
  },
  // Add more products with ratings
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
                <View style={styles.cardContent}>
                  <Text style={styles.cardText}>{product.name}</Text>
                  <Text style={styles.locationText}>{product.location}</Text>
                  <View style={styles.starContainer}>
                    <FontAwesomeIcon
                      icon={faStar} // FontAwesome icon
                      size={15}
                      style={styles.star}
                    />
                    <Text style={styles.starText}>{product.rating}</Text>
                  </View>
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