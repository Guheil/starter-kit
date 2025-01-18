// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TabNavigator from './src/navigation/Tab'; // Import Tab Navigator

const Stack = createNativeStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Tabs">
        <Stack.Screen
          name="Tabs"
          component={TabNavigator}
          options={{ headerShown: false }} // Hides the header for the Tab Navigator
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
