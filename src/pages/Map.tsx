import { View, StyleSheet, TouchableOpacity, Text, SafeAreaView, Image } from 'react-native';
import React, { useState } from 'react';
import MapboxGL from '@rnmapbox/maps';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
    faMap,
    faStreetView,
    faLocationDot,
    faSatelliteDish,
    faStore
} from '@fortawesome/free-solid-svg-icons';
import styles from '../assets/style/mapStyle';

// Initialize Mapbox
MapboxGL.setAccessToken('pk.eyJ1Ijoia2x5bmVhamlkbyIsImEiOiJjbTYzb2J0cmsxNWR5MmxyMHFzdHJkazl1In0.zxp6GI9_XeY0s1gxpwB4lg');
MapboxGL.setTelemetryEnabled(false);

// Sample store data
const storeLocations = [
    {
        id: '1',
        coordinate: [120.3209, 16.6159],
        name: "Sukang Iloco Store",
        type: "Traditional",
        rating: 4.5,
        image: require('../assets/img/product-images/sukang-iloco.png')
    },
    {
        id: '2',
        coordinate: [120.3259, 16.6179],
        name: "Vigan Basi Shop",
        type: "Wine Store",
        rating: 4.8,
        image: require('../assets/img/product-images/basi-wine.jpg')
    },
    {
        id: '3',
        coordinate: [120.3159, 16.6139],
        name: "Handcraft Center",
        type: "Artisan Store",
        rating: 4.2,
        image: require('../assets/img/handcraft.png')
    }
];

const Map:React.FC = () => {
    const [mapStyle, setMapStyle] = useState('streets-v12');
    const [selectedStore, setSelectedStore] = useState(null);

    const toggleMapStyle = () => {
        setMapStyle(prevStyle =>
            prevStyle === 'streets-v12' ? 'satellite-v9' : 'streets-v12'
        );
    };

    const renderAnnotation = (store: any) => {
        return (
            <MapboxGL.PointAnnotation
                key={store.id}
                id={store.id}
                coordinate={store.coordinate}
                onSelected={() => setSelectedStore(store)}
            >
                <View style={styles.annotationContainer}>
                    <View style={styles.annotationPin}>
                    <TouchableOpacity>
                    <Image
                      source={store.image}
                      style={styles.pinImage}/>
                    </TouchableOpacity>
                    </View>
                </View>
                
                {selectedStore?.id === store.id ? (
                    // @ts-ignore
                    <MapboxGL.Callout title={store.name}>
                        <View style={styles.calloutContent}>
                            <Image 
                                source={store.image} 
                                style={styles.storeImage}
                                
                            />
                            <View style={styles.calloutText}>
                                <Text style={styles.storeName}>{store.name}</Text>
                                <Text style={styles.storeType}>{store.type}</Text>
                                <View style={styles.ratingContainer}>
                                    <FontAwesomeIcon 
                                        icon={faLocationDot} 
                                        size={12} 
                                        color="#FFD700"
                                    />
                                    <Text style={styles.ratingText}>{store.rating}</Text>
                                </View>
                            </View>
                        </View>
                    </MapboxGL.Callout>
                ) : <></>}
            </MapboxGL.PointAnnotation>
        );
    };


    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <View style={styles.header}>
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
                        {storeLocations.map((store) => (
                            <View key={store.id}>{renderAnnotation(store)}</View>
                        ))}
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