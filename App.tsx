import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PaperProvider } from 'react-native-paper';
import { theme } from './src/components/Theme';
import TabNavigator from './src/navigation/Tab';
import ProductDetails from './src/pages/ProductDetails';
import LoginScreen from './src/pages/Login';
import SignupScreen from './src/pages/Signup';
import Welcome from './src/pages/Welcome';
import ForgotPassword from './src/pages/ForgotPassword';

const Stack = createNativeStackNavigator();

const App: React.FC = () => {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome">{/* Remove spaces */}
          <Stack.Screen
            name="Welcome"
            component={Welcome}
            options={{ headerShown: false }}
          />{/* Remove spaces */}
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />{/* Remove spaces */}
          <Stack.Screen
            name="Signup"
            component={SignupScreen}
            options={{ headerShown: false }}
          />{/* Remove spaces */}
          <Stack.Screen
            name="ForgotPassword"
            component={ForgotPassword}
            options={{ headerShown: false }}
          />{/* Remove spaces */}
          <Stack.Screen
            name="Tabs"
            component={TabNavigator}
            options={{ headerShown: false }}
          />{/* Remove spaces */}
          <Stack.Screen
            name="ProductDetails"
            component={ProductDetails}
          />{/* Remove spaces */}
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;