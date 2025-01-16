import React from 'react';

import { View, StyleSheet } from 'react-native';
import Home from './src/pages/Home';

const App: React.FC = () => {
  return (
    <View style={styles.container}>
      <Home />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8',
  },
});

export default App;
