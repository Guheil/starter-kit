// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TabNavigator from './src/navigation/Tab'; // Import Tab Navigator
import { StyleSheet } from 'react-native';
import { View } from 'lucide-react-native';

const Stack = createNativeStackNavigator();
const styles = StyleSheet.create({
  container:{
    fontFamily:'Montserrat'
  }
});

const App: React.FC = () => {
  return (
    <View style={styles.container}>
          <NavigationContainer>
      <Stack.Navigator initialRouteName="Tabs">
        <Stack.Screen
          name="Tabs"
          component={TabNavigator}
          options={{ headerShown: false }} 
          // Hides the header for the Tab Navigator
        />
      </Stack.Navigator>
    </NavigationContainer>
    </View>
  );
};

export default App;
