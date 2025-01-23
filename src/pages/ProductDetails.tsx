import React, { useState } from 'react';
import {
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
    Text,
    View,
    Image,
    Linking,
} from 'react-native';
import { ViroARSceneNavigator, ViroARScene } from '@viro-community/react-viro';
import { Viro3DObject, ViroAmbientLight, ViroNode, ViroTrackingStateConstants } from '@viro-community/react-viro';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
    faCameraRetro,
    faLocation,
    faCaretDown,
    faWeightScale,
    faRuler
} from '@fortawesome/free-solid-svg-icons';
import styles from '../assets/style/productDetailStyle';

// Add proper type definitions
interface ProductARSceneProps {
    product: any;
    onClose: () => void;
    sceneNavigator?: any; 
}

interface ProductDetailsProps {
    route: {
        params: {
            product: any;
        };
    };
    navigation: any;
}

const ProductARScene: React.FC<ProductARSceneProps> = ({ product, onClose }) => {
    const [isTracking, setIsTracking] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [position] = useState<[number, number, number]>([0, 0, 0]);
    const [scale] = useState<[number, number, number]>([0.15, 0.15, 0.15]);
    const [rotation] = useState<[number, number, number]>([0, 0, 0]);

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
                    position={[0, -0.19, -0.2]}
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

const ProductDetails: React.FC<ProductDetailsProps> = ({ route, navigation }) => {
    const [showAR, setShowAR] = useState(false);
    const { product } = route.params;

    const openMaps = () => {
        const address = encodeURIComponent(product.shopLocation);
        const url = `https://www.google.com/maps/search/?api=1&query=${address}`;
        Linking.openURL(url);
    };

    if (showAR) {
        return (
            <View style={{ flex: 1 }}>
                <ViroARSceneNavigator
                    initialScene={{
                        scene: (viroProps: any) => (
                            <ProductARScene
                                {...viroProps}
                                product={product}
                                onClose={() => setShowAR(false)}
                            />
                        ),
                    }}
                    style={{ flex: 1 }}
                />
                <TouchableOpacity
                    style={styles.closeButton}
                    onPress={() => setShowAR(false)}
                >
                    <FontAwesomeIcon icon={faCameraRetro} color="white" size={24} />
                    <Text style={styles.closeButtonText}>Close</Text>
                </TouchableOpacity>
            </View>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Image
                    source={product.image}
                    style={styles.productImage}
                    resizeMode="cover"
                />

                <View style={styles.detailsContainer}>
                    <Text style={styles.productTitle}>{product.name}</Text>
                    <Text style={styles.productPrice}>₱{product.price?.toFixed(2)}</Text>

                    <TouchableOpacity style={styles.arButton} onPress={() => setShowAR(true)}>
                        <FontAwesomeIcon icon={faCameraRetro} color='white' size={24} />
                        <Text style={styles.arButtonText}>View in AR</Text>
                    </TouchableOpacity>

                    <Text style={styles.sectionTitle}>Description</Text>
                    <Text style={styles.productDescription}>{product.description}</Text>

                    <Text style={styles.sectionTitle}>Shop Location</Text>
                    <TouchableOpacity style={styles.locationContainer} onPress={openMaps}>
                        <FontAwesomeIcon icon={faLocation} color='#007AFF' size={24} />
                        <Text style={styles.locationText}>{product.shopLocation}</Text>
                    </TouchableOpacity>

                    <Text style={styles.sectionTitle}>Product Details</Text>
                    <View style={styles.detailsGrid}>
                        <View style={styles.detailItem}>
                            <FontAwesomeIcon icon={faCaretDown} color='#007AFF' size={24} />
                            <Text style={styles.detailText}>Type: {product.sku}</Text>
                        </View>
                        <View style={styles.detailItem}>
                            <FontAwesomeIcon icon={faWeightScale} color='#007AFF' size={20} />
                            <Text style={styles.detailText}>Weight: {product.color}</Text>
                        </View>
                        <View style={styles.detailItem}>
                            <FontAwesomeIcon icon={faRuler} color='#007AFF' size={24} />
                            <Text style={styles.detailText}>Dimensions: {product.dimensions}</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default ProductDetails;