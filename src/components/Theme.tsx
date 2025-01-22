import { DefaultTheme, configureFonts } from 'react-native-paper';

// Define your custom font configuration
const fontConfig = {
  default: {
    regular: {
      fontFamily: 'OpenSans-Regular',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'OpenSans-Semibold',
      fontWeight: '500',
    },
    bold: {
      fontFamily: 'OpenSans-Bold',
      fontWeight: 'bold',
    },
  },
} as const;

// Create a custom theme
export const theme = {
  ...DefaultTheme,
  fonts: configureFonts({ config: fontConfig, isV3: true }), // Set `isV3: true` for React Native Paper v5+
  colors: {
    ...DefaultTheme.colors,
    primary: '#6200ee', // Customize your theme colors
    accent: '#03dac4',
  },
};