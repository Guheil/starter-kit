import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Home as HomeIcon, MapPin as MapIcon, UserCircle as ProfileIcon } from 'lucide-react-native';
import styles from '../assets/style/homeStyle.js'
interface Props {
  navigation?: any;
}

const Home: React.FC<Props> = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState('home');

  const renderTabIcon = (tabName: string) => {
    const iconProps = {
      width: 24,
      height: 24,
      color: activeTab === tabName ? '#007AFF' : '#666',
    };

    switch (tabName) {
      case 'home':
        return <HomeIcon {...iconProps} />;
      case 'map':
        return <MapIcon {...iconProps} />;
      case 'profile':
        return <ProfileIcon {...iconProps} />;
      default:
        return <HomeIcon {...iconProps} />;
    }
  };

  const [text, onChangeText] = React.useState('Useless Text');
  return (
    <SafeAreaView style={styles.container}>
      {/* Main Content */}
      <ScrollView>
        <View style={styles.content}>
          {/* <TouchableOpacity
          style={styles.button}
          onPress={() => navigation?.navigate('Details')}>
          <Text style={styles.buttonText}>Go to Details</Text>
        </TouchableOpacity> */}
          <View style={styles.searchBarContainer}>
            <TextInput
              style={styles.searchBar}
              onChangeText={onChangeText}
              value={text}
              placeholder='Enter Text'
            />
            <TouchableOpacity
              style={styles.searchButton}
              onPress={() => {/* your search function */ }}
            >
              <Text>🔍</Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal={true} style={styles.circleContainer}>
            <View style={styles.circleWrapper}>
              <View style={styles.circle}></View>
              <View style={styles.circle}></View>
              <View style={styles.circle}></View>
              <View style={styles.circle}></View>
              <View style={styles.circle}></View>
              <View style={styles.circle}></View>
            </View>
          </ScrollView>
          {/* Featurings */}
          <View style={styles.featuredContainer}>
            <View style={styles.square1}>
            </View>

            <View style={styles.squaresContainer}>
              <View style={styles.squares}>
                <View style={styles.square2}>
                </View>
              </View>

              <View style={styles.squares}>
                <View style={styles.square3}>
                </View>
                <View style={styles.square3}>
                </View>
              </View>
            </View>
          </View>
          {/* Discover */}
          <ScrollView style={styles.discoverContainer} horizontal={true}>
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
          {/* Products */}
          {/* Products */}
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