import React from 'react';
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import styles from '../assets/style/homeStyle.js';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'; // Correct FontAwesome import
import { faHome, faCog, faMap, faBox } from '@fortawesome/free-solid-svg-icons';


const Home: React.FC = () => {
  const [text, onChangeText] = React.useState('');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.content}>
          {/* Search Bar */}
          <View style={styles.searchBarContainer}>
            <TextInput
              style={styles.searchBar}
              onChangeText={onChangeText}
              value={text}
              placeholder="Enter Text..."
              placeholderTextColor="gray" 
            />
          </View>

          {/* Horizontal Circles */}
          <ScrollView horizontal style={styles.circleContainer}>
            <View style={styles.circleWrapper}>
                  <TouchableOpacity style={styles.circleSubContainer}>
                    <Image style={styles.image} source={require('../assets/img/handcraft.png')}/>
                   <Text style={styles.text}>Handcraft</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.circleSubContainer}>
                    <Image style={styles.image} source={require('../assets/img/furniture.jpg')}/>
                   <Text style={styles.text}>Furniture</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.circleSubContainer}>
                    <Image style={styles.image} source={require('../assets/img/food.jpg')}/>
                   <Text style={styles.text}>Food</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.circleSubContainer}>
                    <Image style={styles.image} source={require('../assets/img/pottery.jpg')}/>
                   <Text style={styles.text}>Pottery</Text>
                  </TouchableOpacity>
            </View>
          </ScrollView>

          {/* Featured Section */}
          <View style={styles.featuredContainer}>
            <View style={styles.square1}>
              <Image style={styles.featureImage} source={require('../assets/img/final.jpg')}/>
            </View>
            <View style={styles.squaresContainer}>
              <View style={styles.squares}>
                <View style={styles.square2}>
                <Image style={styles.featureImage} source={require('../assets/img/feature2.png')}/>
                </View>
              </View>
              <View style={styles.squares}>
                <View style={styles.square3}>
                <Image style={styles.featureImage} source={require('../assets/img/feature3.png')}/>
                </View>
                <View style={styles.square3}>
                <Image style={styles.featureImage} source={require('../assets/img/feature4.png')}/>
                </View>
              </View>
            </View>
          </View>

          {/* Discover Section */}
          <ScrollView horizontal style={styles.discoverContainer}>
            <View style={styles.discoverWrapper}>
              <Text style={styles.discoverText}>Discover</Text>
              <Text style={styles.discoverText}>Agoo</Text>
              <Text style={styles.discoverText}>Aringay</Text>
              <Text style={styles.discoverText}>Caba</Text>
              <Text style={styles.discoverText}>Bauang</Text>
              <Text style={styles.discoverText}>San Fernando</Text>
              <Text style={styles.discoverText}>San Juan</Text>
              <Text style={styles.discoverText}>Bacnotan</Text>
            </View>
          </ScrollView>

          {/* Products Section */}
          <View style={styles.productContainer}>
            <View style={styles.productGrid}>
              <View style={styles.card}>
              <Image style={styles.productImage} source={require('../assets/img/handcraft.png')}/>
              </View>
              <View style={styles.card}>
              <Image style={styles.productImage} source={require('../assets/img/furniture.jpg')}/>
              </View>
              <View style={styles.card}>
                <Text style={styles.cardText}>Suka</Text>
              </View>
              <View style={styles.card}>
                <Text style={styles.cardText}>Halo-Halo</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
