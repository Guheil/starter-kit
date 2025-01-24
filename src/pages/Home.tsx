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
import { faCalendar, faMapMarkedAlt, faStar, faTicketAlt } from '@fortawesome/free-solid-svg-icons';


const Home: React.FC = () => {
  const [text, onChangeText] = React.useState('');

  const events = [
    {
      id: 1,
      name: 'Craft Fair Extravaganza',
      description: 'Annual showcase of local artisan crafts and handmade goods',
      location: 'Bacnotan Town Center',
      date: 'May 15, 2024',
      time: '10:00 AM - 6:00 PM',
      price: 'Free Entry',
      image: require('../assets/img/events/craft-fair.jpg'),
      category: 'Handcraft'
    },
    {
      id: 2,
      name: 'Culinary Arts Festival',
      description: 'Celebrating local cuisine with cooking demos and tastings',
      location: 'San Fernando Plaza',
      date: 'June 20, 2024',
      time: '12:00 PM - 9:00 PM',
      price: 'Php 250',
      image: require('../assets/img/events/culinary-arts.png'),
      category: 'Food'
    },
    {
      id: 3,
      name: 'Pottery Master Class',
      description: 'Hands-on workshop with renowned local ceramic artists',
      location: 'Aringay Community Hall',
      date: 'July 5, 2024',
      time: '2:00 PM - 5:00 PM',
      price: 'Php 500',
      image: require('../assets/img/events/pottery.jpg'),
      category: 'Pottery'
    }
  ];

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
                <Image style={styles.image} source={require('../assets/img/handcraft.png')} />
                <Text style={styles.text}>Handcraft</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.circleSubContainer}>
                <Image style={styles.image} source={require('../assets/img/furniture.jpg')} />
                <Text style={styles.text}>Furniture</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.circleSubContainer}>
                <Image style={styles.image} source={require('../assets/img/food.jpg')} />
                <Text style={styles.text}>Food</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.circleSubContainer}>
                <Image style={styles.image} source={require('../assets/img/pottery.jpg')} />
                <Text style={styles.text}>Pottery</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>

          {/* Featured Section */}
          <View style={styles.featuredContainer}>
            <View style={styles.square1}>
              <Image style={styles.featureImage} source={require('../assets/img/final.jpg')} />
            </View>
            <View style={styles.squaresContainer}>
              <View style={styles.squares}>
                <View style={styles.square2}>
                  <Image style={styles.featureImage} source={require('../assets/img/feature2.png')} />
                </View>
              </View>
              <View style={styles.squares}>
                <View style={styles.square3}>
                  <Image style={styles.featureImage} source={require('../assets/img/feature3.png')} />
                </View>
                <View style={styles.square3}>
                  <Image style={styles.featureImage} source={require('../assets/img/feature4.png')} />
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
              {/* Card 1 */}
              <View style={styles.card}>
                <Image
                  style={styles.productImage}
                  source={require('../assets/img/handcraft.png')}
                />
                <View style={styles.cardContent}>
                  <Text style={styles.cardText}>Handcrafted Item</Text>
                  <Text style={styles.locationText}>Bacnotan</Text>
                  <View style={styles.starContainer}>
                    <FontAwesomeIcon
                      icon={faStar} // FontAwesome icon
                      size={15}
                      style={styles.star}
                    />
                    <Text style={styles.starText}>4.8</Text>
                  </View>
                </View>
              </View>

              {/* Card 2 */}
              <View style={styles.card}>
                <Image
                  style={styles.productImage}
                  source={require('../assets/img/handcraft.png')}
                />
                <View style={styles.cardContent}>
                  <Text style={styles.cardText}>Handcrafted Item</Text>
                  <Text style={styles.locationText}>Bacnotan</Text>
                  <View style={styles.starContainer}>
                    <FontAwesomeIcon
                      icon={faStar} // FontAwesome icon
                      size={15}
                      style={styles.star}
                    />
                    <Text style={styles.starText}>4.5</Text>
                  </View>
                </View>
              </View>

              {/* Card 3 */}
              <View style={styles.card}>
                <Image
                  style={styles.productImage}
                  source={require('../assets/img/handcraft.png')}
                />
                <View style={styles.cardContent}>
                  <Text style={styles.cardText}>Handcrafted Item</Text>
                  <Text style={styles.locationText}>Bacnotan</Text>
                  <View style={styles.starContainer}>
                    <FontAwesomeIcon
                      icon={faStar} // FontAwesome icon
                      size={15}
                      style={styles.star}
                    />
                    <Text style={styles.starText}>4.7</Text>
                  </View>
                </View>
              </View>

              {/* Card 4 */}
              <View style={styles.card}>
                <Image
                  style={styles.productImage}
                  source={require('../assets/img/handcraft.png')}
                />
                <View style={styles.cardContent}>
                  <Text style={styles.cardText}>Handcrafted Item</Text>
                  <Text style={styles.locationText}>Bacnotan</Text>
                  <View style={styles.starContainer}>
                    <FontAwesomeIcon
                      icon={faStar} // FontAwesome icon
                      size={15}
                      style={styles.star}
                    />
                    <Text style={styles.starText}>4.9</Text>
                  </View>
                </View>
              </View>

              {/* Card 5 */}
              <View style={styles.card}>
                <Image
                  style={styles.productImage}
                  source={require('../assets/img/handcraft.png')}
                />
                <View style={styles.cardContent}>
                  <Text style={styles.cardText}>Handcrafted Item</Text>
                  <Text style={styles.locationText}>Bacnotan</Text>
                  <View style={styles.starContainer}>
                    <FontAwesomeIcon
                      icon={faStar} // FontAwesome icon
                      size={15}
                      style={styles.star}
                    />
                    <Text style={styles.starText}>4.6</Text>
                  </View>
                </View>
              </View>

              {/* Card 6 */}
              <View style={styles.card}>
                <Image
                  style={styles.productImage}
                  source={require('../assets/img/handcraft.png')}
                />
                <View style={styles.cardContent}>
                  <Text style={styles.cardText}>Handcrafted Item</Text>
                  <Text style={styles.locationText}>Bacnotan</Text>
                  <View style={styles.starContainer}>
                    <FontAwesomeIcon
                      icon={faStar} // FontAwesome icon
                      size={15}
                      style={styles.star}
                    />
                    <Text style={styles.starText}>4.4</Text>
                  </View>
                </View>
              </View>
              <View style={styles.eventsContainer}>
                <Text style={styles.sectionTitle}>Upcoming Events</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                  {events.map((event) => (
                    <TouchableOpacity key={event.id} style={styles.eventCardLarge}>
                      <Image source={event.image} style={styles.eventImageLarge} />
                      <View style={styles.eventOverlay}>
                        <Text style={styles.eventCategory}>{event.category}</Text>
                      </View>
                      <View style={styles.eventDetailsLarge}>
                        <Text style={styles.eventNameLarge}>{event.name}</Text>
                        <Text style={styles.eventDescriptionLarge}>{event.description}</Text>
                        
                        <View style={styles.eventInfoRowLarge}>
                          <View style={styles.eventInfoItemLarge}>
                            <FontAwesomeIcon icon={faCalendar} size={14} color="#ffd700" />
                            <Text style={styles.eventInfoTextLarge}>{event.date}</Text>
                          </View>
                          <View style={styles.eventInfoItemLarge}>
                            <FontAwesomeIcon icon={faMapMarkedAlt} size={14} color="#ffd700" />
                            <Text style={styles.eventInfoTextLarge}>{event.location}</Text>
                          </View>
                        </View>

                        <View style={styles.eventBottomRowLarge}>
                          <TouchableOpacity style={styles.eventButtonLarge}>
                            <Text style={styles.eventButtonTextLarge}>View Details</Text>
                          </TouchableOpacity>
                        </View>
                      </View>
                    </TouchableOpacity>
                  ))}
                </ScrollView>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
