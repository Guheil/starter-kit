import React from 'react';
import { View, StyleSheet } from 'react-native';
import Mapbox from '@rnmapbox/maps';

// Initialize Mapbox with your public token
Mapbox.setAccessToken('pk.eyJ1Ijoia2x5bmVhamlkbyIsImEiOiJjbTYzb2NsZjgxM3lvMmtzNWtvZzZjYzk3In0.Gutoqp9zNgU9yxaxnZ7V_A');
Mapbox.setWellKnownTileServer("Mapbox");
const Map = () => {
  return (
    <View style={styles.container}>
 <Mapbox.MapView
  style={styles.map}
  styleURL="mapbox://styles/mapbox/streets-v11"
  onDidFinishLoadingMap={() => console.log('Map loaded successfully')}
    
>
        <Mapbox.UserLocation visible={true} />
      </Mapbox.MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});

export default Map;