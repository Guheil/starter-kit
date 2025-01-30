import React, { useState, useRef } from 'react';
import {
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
    Text,
    View,
    Image,
    Linking,
    Platform,
    Alert,
} from 'react-native';
import { ViroARSceneNavigator, ViroARScene } from '@viro-community/react-viro';
import { Viro3DObject, ViroAmbientLight, ViroNode, ViroTrackingStateConstants } from '@viro-community/react-viro';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
    faCameraRetro,
    faLocation,
    faCaretDown,
    faWeightScale,
    faRuler,
    faCamera
} from '@fortawesome/free-solid-svg-icons';
import styles from '../assets/style/productDetailStyle';
import { CameraRoll } from '@react-native-camera-roll/camera-roll';
import { PERMISSIONS, request } from 'react-native-permissions';

interface ProductARSceneProps {
    product: any;
    onClose: () => void;
    sceneNavigator?: any;
    onTakePhoto: () => Promise<void>;
}

interface ProductDetailsProps {
    route: {
        params: {
            product: any;
        };
    };
    navigation: any;
}

const ProductARScene: React.FC<ProductARSceneProps> = ({ product, onClose, sceneNavigator, onTakePhoto }) => {
    const [isTracking, setIsTracking] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [position] = useState<[number, number, number]>([0, 0, 0]);
    const [scale] = useState<[number, number, number]>([0.21, 0.21, 0.21]);
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
    const [isTakingPhoto, setIsTakingPhoto] = useState(false);
    const { product } = route.params;
    const arNavigatorRef = useRef(null);

    const requestCameraPermission = async () => {
        try {
            const permission = Platform.select({
                ios: PERMISSIONS.IOS.PHOTO_LIBRARY,
                android: PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,
            });

            if (permission) {
                const result = await request(permission);
                return result === 'granted';
            }
            return false;
        } catch (err) {
            console.error('Error requesting permission:', err);
            return false;
        }
    };

    const takePhoto = async () => {
        if (isTakingPhoto) return;

        const hasPermission = await requestCameraPermission();
        if (!hasPermission) {
            Alert.alert('Permission Required', 'Please grant permission to save photos to your gallery.');
            return;
        }

        try {
            setIsTakingPhoto(true);
            const photo = await arNavigatorRef.current?.arSceneNavigator?.takeScreenshot(`${product.name}_AR`, true);

            if (photo?.url) {
                await CameraRoll.save(photo.url, {
                    type: 'photo',
                    album: 'AR Products'
                });
                Alert.alert('Success', 'Photo saved to gallery!');
            }
        } catch (error) {
            console.error('Error taking photo:', error);
            Alert.alert('Error', 'Failed to save photo');
        } finally {
            setIsTakingPhoto(false);
        }
    };

    const openMaps = () => {
        const address = encodeURIComponent(product.shopLocation);
        const url = `https://www.google.com/maps/search/?api=1&query=${address}`;
        Linking.openURL(url);
    };

    if (showAR) {
        return (
            <View style={{ flex: 1 }}>
                <ViroARSceneNavigator
                    ref={arNavigatorRef}
                    initialScene={{
                        scene: (props: any) => (
                            <ProductARScene
                                {...props}
                                product={product}
                                onClose={() => setShowAR(false)}
                                onTakePhoto={takePhoto}
                            />
                        ),
                    }}
                    style={{ flex: 1 }}
                />
                <View style={styles.arButtonsContainer}>
                    <TouchableOpacity
                        style={[styles.arButton, styles.cameraButton]}
                        onPress={takePhoto}
                        activeOpacity={0.7}
                    >
                        <View style={styles.cameraButtonInner}>
                            <View style={styles.cameraButtonInnerCircle} />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.closeButton}
                        onPress={() => setShowAR(false)}
                    >
                        <FontAwesomeIcon icon={faCameraRetro} color="white" size={24} />
                        <Text style={styles.closeButtonText}>Close</Text>
                    </TouchableOpacity>
                </View>
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
                        <FontAwesomeIcon icon={faLocation} color='#FDD700' size={24} />
                        <Text style={styles.locationText}>{product.shopLocation}</Text>
                    </TouchableOpacity>

                    <Text style={styles.sectionTitle}>Product Details</Text>
                    <View style={styles.detailsGrid}>
                        <View style={styles.detailItem}>
                            <FontAwesomeIcon icon={faCaretDown} color='#FDD700' size={24} />
                            <Text style={styles.detailText}>Type: {product.sku}</Text>
                        </View>
                        <View style={styles.detailItem}>
                            <FontAwesomeIcon icon={faWeightScale} color='#FDD700' size={20} />
                            <Text style={styles.detailText}>Weight: {product.color}</Text>
                        </View>
                        <View style={styles.detailItem}>
                            <FontAwesomeIcon icon={faRuler} color='#FDD700' size={24} />
                            <Text style={styles.detailText}>Dimensions: {product.dimensions}</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default ProductDetails;