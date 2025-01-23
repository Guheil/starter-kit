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
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAmbulance, faCaretDown, faLocation, faTachometerAverage, faWeightScale } from '@fortawesome/free-solid-svg-icons';
import { faCameraRetro } from '@fortawesome/free-solid-svg-icons/faCameraRetro';
import { faWeight } from '@fortawesome/free-solid-svg-icons/faWeight';
import { faWeightHanging } from '@fortawesome/free-solid-svg-icons/faWeightHanging';
import { faRuler } from '@fortawesome/free-solid-svg-icons/faRuler';
import styles from '../assets/style/productDetailStyle';

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


export default ProductDetails;