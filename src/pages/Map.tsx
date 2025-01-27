import { View } from 'react-native';
import React from 'react';
import MapboxGL from '@rnmapbox/maps';

// Initialize Mapbox
MapboxGL.setAccessToken('pk.eyJ1Ijoia2x5bmVhamlkbyIsImEiOiJjbTYzb2J0cmsxNWR5MmxyMHFzdHJkazl1In0.zxp6GI9_XeY0s1gxpwB4lg');
MapboxGL.setTelemetryEnabled(false);

const Map = () => {
    // Make sure the map takes up the full space available
    const mapStyles = {
        flex: 1,
        height: '100%',
        width: '100%'
    };

    return (
        <View style={mapStyles}>
            <MapboxGL.MapView
                zoomEnabled={true}
                styleURL='mapbox://styles/mapbox/streets-v12'
                rotateEnabled={true}
                style={mapStyles}
            >
                <MapboxGL.Camera
                    zoomLevel={15}
                    centerCoordinate={[120.3209, 16.6159]} // Note: Coordinates were swapped to [longitude, latitude]
                    pitch={60}
                    animationMode='flyTo'
                    animationDuration={6000}
                />
                <MapboxGL.PointAnnotation
                    id='marker'
                    coordinate={[120.3209, 16.6159]} // Note: Coordinates were swapped to [longitude, latitude]
                >
                    <View />
                </MapboxGL.PointAnnotation>
            </MapboxGL.MapView>
        </View>
    );
};

export default Map;