import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import styles from '../assets/style/productStyle'


const Products: React.FC = () => {
  const [text, onChangeText] = React.useState('');
  return (
    <SafeAreaView style={styles.container}>
    
        <View style={styles.content}>
          <View style={styles.searchBarContainer}>
            <TextInput style={styles.searchBar} onChangeText={onChangeText} value={text} placeholder='Enter Product Name' placeholderTextColor="#000" ></TextInput>
          </View>
          <ScrollView style={styles.productContainer}>
            <View style={styles.productGrid}>
              <View style={styles.card}>
                <Text style={styles.cardText}>Product 1</Text>
              </View>
              <View style={styles.card}>
                <Text style={styles.cardText}>Product 2</Text>
              </View>
              <View style={styles.card}>
                <Text style={styles.cardText}>Product 3</Text>
              </View>
              <View style={styles.card}>
                <Text style={styles.cardText}>Product 4</Text>
              </View>
            </View>
          </ScrollView>
        </View>
    </SafeAreaView>
  );
};
export default Products;