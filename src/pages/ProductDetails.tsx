import React, { useState } from 'react';
import {
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
    Text,
    StyleSheet,
    View,
    Image,
    Linking,
} from 'react-native';
import { ViroARSceneNavigator, ViroARScene } from '@viro-community/react-viro';
import { Viro3DObject, ViroAmbientLight, ViroNode, ViroTrackingStateConstants } from '@viro-community/react-viro';
import Icon from 'react-native-vector-icons/Ionicons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAmbulance, faCaretDown, faLocation, faTachometerAverage, faWeightScale } from '@fortawesome/free-solid-svg-icons';
import { faCameraRetro } from '@fortawesome/free-solid-svg-icons/faCameraRetro';
import { faWeight } from '@fortawesome/free-solid-svg-icons/faWeight';
import { faWeightHanging } from '@fortawesome/free-solid-svg-icons/faWeightHanging';
import { faRuler } from '@fortawesome/free-solid-svg-icons/faRuler';

interface ProductARSceneProps {
    product: any;
}

const ProductARScene: React.FC<ProductARSceneProps> = ({ product }) => {
    const [isTracking, setIsTracking] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [position] = useState<[number, number, number]>([0, 0, 0]);
    const [scale] = useState<[number, number, number]>([0.15, 0.15, 0.15]);
    const [rotation, setRotation] = useState<[number, number, number]>([0, 0, 0]);

    const onInitialized = (state: string) => {
        if (state === ViroTrackingStateConstants.TRACKING_NORMAL) {
            setIsTracking(true);
        } else if (state === ViroTrackingStateConstants.TRACKING_NONE) {
            setIsTracking(false);
        }
    };

    const onLoadStart = () => {
        console.log("Started loading 3D model");
        setIsLoading(true);
    };

    const onLoadEnd = () => {
        console.log("Finished loading 3D model");
        setIsLoading(false);
    };

    const onError = (event: any) => {
        console.error("3D Object Loading Error:", event);
        setIsLoading(false);
    };

    return (
        <ViroARScene onTrackingUpdated={onInitialized}>
            <ViroAmbientLight color="#FFFFFF" intensity={1000} />
            <ViroNode position={position}>
                <Viro3DObject
                    source={product.model3d}
                    type="GLB"
                    position={[0, -0.19, 0]}
                    scale={scale}
                    rotation={rotation}
                    onError={onError}
                    onLoadStart={onLoadStart}
                    onLoadEnd={onLoadEnd}
                />
            </ViroNode>
        </ViroARScene>
    );
};

const ProductDetails = ({ route, navigation }) => {
    const [showAR, setShowAR] = useState(false);
    const { product } = route.params;

    const openMaps = () => {
        const address = encodeURIComponent(product.shopLocation);
        const url = `https://www.google.com/maps/search/?api=1&query=${address}`;
        Linking.openURL(url);
    };

    if (showAR) {
        return (
            <ViroARSceneNavigator
                initialScene={{ scene: ProductARScene, passProps: { product } }}
                style={{ flex: 1 }}
            />
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                {/* Product Image */}
                <Image
                    source={product.image}
                    style={styles.productImage}
                    resizeMode="cover"
                />

                {/* Product Details */}
                <View style={styles.detailsContainer}>
                    <Text style={styles.productTitle}>{product.name}</Text>
                    <Text style={styles.productPrice}>₱{product.price.toFixed(2)}</Text>

                    {/* AR View Button */}
                    <TouchableOpacity style={styles.arButton} onPress={() => setShowAR(true)}>
                                      <FontAwesomeIcon
                                        icon={faCameraRetro} 
                                        color='white'
                                        size={24}
                                      />
                        <Text style={styles.arButtonText}>View in AR</Text>
                    </TouchableOpacity>

                    {/* Description */}
                    <Text style={styles.sectionTitle}>Description</Text>
                    <Text style={styles.productDescription}>{product.description}</Text>

                    {/* Shop Location */}
                    <Text style={styles.sectionTitle}>Shop Location</Text>
                    <TouchableOpacity style={styles.locationContainer} onPress={openMaps}>
                        <FontAwesomeIcon
                            icon={faLocation}
                            color='#007AFF'
                            size={24}
                        />
                        <Text style={styles.locationText}>{product.shopLocation}</Text>
                    </TouchableOpacity>

                    {/* Additional Product Details */}
                    <Text style={styles.sectionTitle}>Product Details</Text>
                    <View style={styles.detailsGrid}>
                        <View style={styles.detailItem}>
                            <FontAwesomeIcon
                                icon={faCaretDown}
                                color='#007AFF'
                                size={24}
                            />
                            <Text style={styles.detailText}>Type: {product.sku}</Text>
                        </View>
                        <View style={styles.detailItem}>
                            <FontAwesomeIcon
                                icon={faWeightScale}
                                color='#007AFF'
                                size={20}
                            />
                            <Text style={styles.detailText}>Weight: {product.color}</Text>
                        </View>
                        <View style={styles.detailItem}>
                            <FontAwesomeIcon
                                icon={faRuler}
                                color='#007AFF'
                                size={24}
                            />
                            <Text style={styles.detailText}>Dimensions: {product.dimensions}</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    productImage: {
        width: '100%',
        height: 300,
    },
    detailsContainer: {
        padding: 15,
    },
    productTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    productPrice: {
        fontSize: 20,
        color: '#007AFF',
        marginBottom: 15,
    },
    arButton: {
        flexDirection: 'row',
        marginVertical: 15,
        padding: 12,
        backgroundColor: '#007AFF',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    arButtonText: {
        color: '#FFF',
        fontSize: 16,
        marginLeft: 10,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 10,
    },
    productDescription: {
        fontSize: 16,
        color: '#444',
        lineHeight: 24,
    },
    locationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F0F0F0',
        padding: 12,
        borderRadius: 8,
    },
    locationText: {
        marginLeft: 10,
        fontSize: 16,
        color: '#007AFF',
    },
    detailsGrid: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
    },
    detailItem: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F0F0F0',
        padding: 10,
        borderRadius: 8,
        width: '48%',
        marginBottom: 10,
    },
    detailText: {
        marginLeft: 10,
        fontSize: 14,
    },
});

export default ProductDetails;