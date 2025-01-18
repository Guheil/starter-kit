// Tab.tsx
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'; // Correct FontAwesome import
import { faHome, faCog, faMap } from '@fortawesome/free-solid-svg-icons'; // Import specific icons
import Home from '../pages/Home';

function SettingsScreen() {
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>Settings Screen</Text>
    </View>
  );
}
function Map(){
    return(
        <View style={styles.screen}>
        <Text style={styles.text}>Map Screen</Text>
      </View>
    )
}

// Create Tab Navigator
const Tab = createBottomTabNavigator();

const TabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: 'white',
          position: 'absolute',
          bottom: 30,
          marginHorizontal: 20,
          height: 60,
          borderRadius: 30, // Make it more rounded
          shadowColor: '#000',
          shadowOpacity: 0.1,
          shadowOffset: {
            width: 0,
            height: 10,
          },
          shadowRadius: 10,
          elevation: 5, // For Android shadow
        },
      }}
    >
      {/* Home Screen Tab */}
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconContainer}>
              <FontAwesomeIcon
                icon={faHome} // FontAwesome icon
                size={24}
                color={focused ? '#ffa726' : '#bdbdbd'} // Focused state color
              />
            </View>
          ),
        }}
        name="Home"
        component={Home}
      />
      {/* Home Screen Tab */}
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconContainer}>
              <FontAwesomeIcon
                icon={faMap} // FontAwesome icon
                size={24}
                color={focused ? '#ffa726' : '#bdbdbd'} // Focused state color
              />
            </View>
          ),
        }}
        name="Map"
        component={Map}
      />
      {/* Settings Screen Tab */}
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconContainer}>
              <FontAwesomeIcon
                icon={faCog} // FontAwesome icon
                size={24}
                color={focused ? '#ffa726' : '#bdbdbd'} // Focused state color
              />
            </View>
          ),
        }}
        name="Settings"
        component={SettingsScreen}
      />
    </Tab.Navigator>
  );
};

// Styles
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text:{
    color:'black',
    fontSize:40,
    fontWeight:'bold',
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconText: {
    fontSize: 12,
    marginTop: 4,
  },
});

export default TabNavigator;
