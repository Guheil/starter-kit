import { View, StyleSheet, TouchableOpacity, Text, SafeAreaView } from 'react-native';
import React, { useState } from 'react';
import MapboxGL from '@rnmapbox/maps';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
    faMap,
    faStreetView,
    faLocationDot,
    faSatelliteDish
} from '@fortawesome/free-solid-svg-icons';

// Initialize Mapbox
MapboxGL.setAccessToken('pk.eyJ1Ijoia2x5bmVhamlkbyIsImEiOiJjbTYzb2J0cmsxNWR5MmxyMHFzdHJkazl1In0.zxp6GI9_XeY0s1gxpwB4lg');
MapboxGL.setTelemetryEnabled(false);

const Map = () => {
    const [mapStyle, setMapStyle] = useState('streets-v12');

    const toggleMapStyle = () => {
        setMapStyle(prevStyle =>
            prevStyle === 'streets-v12' ? 'satellite-v9' : 'streets-v12'
        );
    };

    const styles = StyleSheet.create({
        safeArea: {
            flex: 1,
            backgroundColor: '#FFFFFF'
        },
        container: {
            flex: 1,
        },
        header: {
            backgroundColor: '#FFFFFF',
            padding: 16,
            borderBottomWidth: 1,
            borderBottomColor: '#E0E0E0',
            elevation: 2,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 2,
        },
        headerText: {
            fontSize: 24,
            fontWeight: '600',
            color: '#333333',
            textAlign: 'left',
        },
        mapContainer: {
            flex: 1,
            height: '100%',
            width: '100%'
        },
        map: {
            flex: 1,
            height: '100%',
            width: '100%'
        },
        toggleButton: {
            position: 'absolute',
            top: 16,
            right: 16,
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            padding: 12,
            borderRadius: 50,
            elevation: 4,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            width: 48,
            height: 48,
            alignItems: 'center',
            justifyContent: 'center',
            borderWidth: 1,
            borderColor: 'rgba(0, 0, 0, 0.1)',
        },
        activeToggle: {
            backgroundColor: '#007AFF',
        },
        icon: {
            color: '#000000',
        },
        activeIcon: {
            color: '#FFFFFF',
        }
    });

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Listings Near You</Text>
                </View>

                <View style={styles.mapContainer}>
                    <MapboxGL.MapView
                        zoomEnabled={true}
                        styleURL={`mapbox://styles/mapbox/${mapStyle}`}
                        rotateEnabled={true}
                        style={styles.map}
                    >
                        <MapboxGL.Camera
                            zoomLevel={15}
                            centerCoordinate={[120.3209, 16.6159]}
                            pitch={60}
                            animationMode='flyTo'
                            animationDuration={6000}
                        />
                        <MapboxGL.PointAnnotation
                            id='marker'
                            coordinate={[120.3209, 16.6159]}
                        >
                            <View>
                                <FontAwesomeIcon
                                    icon={faLocationDot}
                                    size={24}
                                    color="#FF0000"
                                />
                            </View>
                        </MapboxGL.PointAnnotation>
                    </MapboxGL.MapView>

                    <TouchableOpacity
                        style={[
                            styles.toggleButton,
                            mapStyle === 'satellite-v9' && styles.activeToggle
                        ]}
                        onPress={toggleMapStyle}
                        activeOpacity={0.8}
                    >
                        <FontAwesomeIcon
                            icon={mapStyle === 'streets-v12' ? faSatelliteDish : faMap}
                            size={24}
                            style={[
                                styles.icon,
                                mapStyle === 'satellite-v9' && styles.activeIcon
                            ]}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default Map;