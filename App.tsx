import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PaperProvider } from 'react-native-paper';
import { theme } from './src/components/Theme';
import TabNavigator from './src/navigation/Tab'; // Import Tab Navigator
import ProductDetails from './src/pages/ProductDetails';

const Stack = createNativeStackNavigator();

const App: React.FC = () => {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Tabs">
          <Stack.Screen
            name="Tabs"
            component={TabNavigator}
            options={{ headerShown: false }} // Hides the header for the Tab Navigator
          />
          <Stack.Screen name="TabNavigator" component={TabNavigator} />
          <Stack.Screen name="ProductDetails" component={ProductDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;