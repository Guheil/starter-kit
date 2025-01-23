import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
  Modal,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import styles from '../assets/style/productStyle';
<<<<<<< HEAD
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
=======
import { faCaretDown, faCheckCircle, faCheckSquare, faCircle, faDotCircle, faSearch, faSliders, faSquare, faTimes } from '@fortawesome/free-solid-svg-icons';

>>>>>>> b8793dddf2b2e45485fa5896905873d68b245b00

const sampleProducts = [
  {
    id: 1,
    name: 'Sukang Iloco',
    description: 'This is a detailed description of product 1.',
<<<<<<< HEAD
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
=======
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
>>>>>>> b8793dddf2b2e45485fa5896905873d68b245b00
  },
  // Add more products with ratings
];

const priceRanges = [
  { label: 'Under ₱100', min: 0, max: 100 },
  { label: '₱100 - ₱150', min: 100, max: 150 },
  { label: 'Over ₱150', min: 150, max: Infinity },
];

const Products = ({ navigation }) => {
  const [text, onChangeText] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedPrices, setSelectedPrices] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState('');
  const [sortBy, setSortBy] = useState('');

  const locations = [...new Set(sampleProducts.map(p => p.shopLocation))];

  const applyFiltersAndSort = () => {
    let filtered = sampleProducts.filter(product =>
      product.name.toLowerCase().includes(text.toLowerCase())
    );

    // Price filter
    if (selectedPrices.length > 0) {
      filtered = filtered.filter(product =>
        selectedPrices.some(range =>
          product.price >= range.min && product.price <= range.max
        )
      );
    }
    if (selectedLocation) {
      filtered = filtered.filter(product =>
        product.shopLocation === selectedLocation
      );
    }
    switch (sortBy) {
      case 'priceAsc':
        return [...filtered].sort((a, b) => a.price - b.price);
      case 'priceDesc':
        return [...filtered].sort((a, b) => b.price - a.price);
      case 'nameAsc':
        return [...filtered].sort((a, b) => a.name.localeCompare(b.name));
      case 'nameDesc':
        return [...filtered].sort((a, b) => b.name.localeCompare(a.name));
      default:
        return filtered;
    }
  };
  const togglePriceFilter = (range) => {
    setSelectedPrices(prev =>
      prev.some(r => r.label === range.label)
        ? prev.filter(r => r.label !== range.label)
        : [...prev, range]
    );
  };
  const resetFilters = () => {
    setSelectedPrices([]);
    setSelectedLocation('');
    setSortBy('');
  };

  const filteredProducts = applyFiltersAndSort();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.filterHeader}>
          <View style={styles.searchBarContainer}>
            <FontAwesomeIcon
              icon={faSearch}
              size={16}
              color="#888"
              style={styles.searchIcon}
            />
            <TextInput
              style={styles.searchBar}
              onChangeText={onChangeText}
              value={text}
              placeholder="Search Products"
              placeholderTextColor="#888"
            />
          </View>
          <TouchableOpacity
            style={styles.filterButton}
            onPress={() => setShowFilters(true)}
          >
            <FontAwesomeIcon icon={faSliders} size={20} color="#333" />
          </TouchableOpacity>
        </View>

        <Modal visible={showFilters} animationType="slide" transparent>
          <View style={styles.filterModal}>
            <View style={styles.filterContent}>
              <View style={styles.filterHeader}>
                <Text style={styles.filterTitle}>Filters</Text>
                <TouchableOpacity onPress={() => setShowFilters(false)}>
                  <FontAwesomeIcon icon={faTimes} size={24} color="#333" />
                </TouchableOpacity>
              </View>

              <ScrollView>
                <View style={styles.filterSection}>
                  <Text style={styles.filterSubtitle}>Price Range</Text>
                  {priceRanges.map(range => (
                    <TouchableOpacity
                      key={range.label}
                      style={styles.filterOption}
                      onPress={() => togglePriceFilter(range)}
                    >
                      <FontAwesomeIcon
                        icon={selectedPrices.some(r => r.label === range.label) ? faCheckSquare : faSquare}
                        size={20}
                        color="#666"
                      />
                      <Text style={styles.filterOptionText}>{range.label}</Text>
                    </TouchableOpacity>
                  ))}
                </View>

                <View style={styles.filterSection}>
                  <Text style={styles.filterSubtitle}>Location</Text>
                  {locations.map(location => (
                    <TouchableOpacity
                      key={location}
                      style={styles.filterOption}
                      onPress={() => setSelectedLocation(prev => prev === location ? '' : location)}
                    >
                      <FontAwesomeIcon
                        icon={selectedLocation === location ? faCheckCircle : faCircle}
                        size={20}
                        color="#666"
                      />
                      <Text style={styles.filterOptionText}>{location}</Text>
                    </TouchableOpacity>
                  ))}
                </View>

                <View style={styles.filterSection}>
                  <Text style={styles.filterSubtitle}>Sort By</Text>
                  {[
                    { label: 'Price: Low to High', value: 'priceAsc' },
                    { label: 'Price: High to Low', value: 'priceDesc' },
                    { label: 'Name: A to Z', value: 'nameAsc' },
                    { label: 'Name: Z to A', value: 'nameDesc' },
                  ].map(option => (
                    <TouchableOpacity
                      key={option.value}
                      style={styles.filterOption}
                      onPress={() => setSortBy(prev => prev === option.value ? '' : option.value)}
                    >
                      <FontAwesomeIcon
                        icon={sortBy === option.value ? faDotCircle : faCircle}
                        size={20}
                        color="#666"
                      />
                      <Text style={styles.filterOptionText}>{option.label}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </ScrollView>

              <View style={styles.filterActions}>
                <TouchableOpacity style={styles.resetButton} onPress={resetFilters}>
                  <Text style={styles.resetButtonText}>Reset Filters</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.applyButton}
                  onPress={() => setShowFilters(false)}
                >
                  <Text style={styles.applyButtonText}>Apply Filters</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>

        <ScrollView style={styles.productContainer} showsVerticalScrollIndicator={false}>
          <View style={styles.productGrid}>
            {filteredProducts.map((product) => (
              <TouchableOpacity
                key={product.id}
                style={styles.card}
                onPress={() => navigation.navigate('ProductDetails', { product })}
              >
<<<<<<< HEAD
                <Image
                  source={product.image}
                  style={styles.productImage}
                />
                <View style={styles.cardContent}>
=======
                <Image source={product.image} style={styles.productImage} />
                <View style={styles.cardTextContainer}>
>>>>>>> b8793dddf2b2e45485fa5896905873d68b245b00
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