import React from 'react';
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import styles from '../assets/style/homeStyle.js';

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
              placeholder="Enter Text"
            />
            <TouchableOpacity
              style={styles.searchButton}
              onPress={() => {
              //  search logic
              }}
            >
              <Text>🔍</Text>
            </TouchableOpacity>
          </View>

          {/* Horizontal Circles */}
          <ScrollView horizontal style={styles.circleContainer}>
            <View style={styles.circleWrapper}>
              <View style={styles.circle}></View>
              <View style={styles.circle}></View>
              <View style={styles.circle}></View>
              <View style={styles.circle}></View>
              <View style={styles.circle}></View>
              <View style={styles.circle}></View>
            </View>
          </ScrollView>

          {/* Featured Section */}
          <View style={styles.featuredContainer}>
            <View style={styles.square1}></View>
            <View style={styles.squaresContainer}>
              <View style={styles.squares}>
                <View style={styles.square2}></View>
              </View>
              <View style={styles.squares}>
                <View style={styles.square3}></View>
                <View style={styles.square3}></View>
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
                <Text style={styles.cardText}>Basket</Text>
              </View>
              <View style={styles.card}>
                <Text style={styles.cardText}>Tupig</Text>
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
