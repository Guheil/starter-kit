import React, { useEffect, useRef } from 'react';
import {
    View,
    Text,
    Image,
    Animated,
    StyleSheet,
    Dimensions,
    ActivityIndicator
} from 'react-native';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { COLORS } from '../assets/constants/constant';

const { width } = Dimensions.get('window');

const Welcome = () => {
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

    // Animations
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const translateY = useRef(new Animated.Value(50)).current;
    const logoScale = useRef(new Animated.Value(0.8)).current;
    const floatingAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        // Start animation sequence
        Animated.parallel([
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 700,
                useNativeDriver: true,
            }),
            Animated.timing(translateY, {
                toValue: 0,
                duration: 700,
                useNativeDriver: true,
            }),
            Animated.spring(logoScale, {
                toValue: 1,
                friction: 3,
                tension: 80,
                useNativeDriver: true,
            }),
            Animated.loop(
                Animated.sequence([
                    Animated.timing(floatingAnim, {
                        toValue: 5,
                        duration: 1000,
                        useNativeDriver: true,
                    }),
                    Animated.timing(floatingAnim, {
                        toValue: 0,
                        duration: 1000,
                        useNativeDriver: true,
                    }),
                ])
            ),
        ]).start();

        // Navigate to Login screen after delay
        const navigationTimeout = setTimeout(() => {
            navigation.replace('Login');
        }, 2000);

        // Cleanup timeout on unmount
        return () => clearTimeout(navigationTimeout);
    }, [fadeAnim, translateY, logoScale, floatingAnim, navigation]);

    return (
        <View style={styles.container}>
            <Animated.View
                style={[
                    styles.contentContainer,
                    {
                        opacity: fadeAnim,
                        transform: [{ translateY }],
                    },
                ]}
            >
                <Animated.Image
                    source={require('../assets/img/logo.png')}
                    style={[
                        styles.logo,
                        {
                            transform: [
                                { scale: logoScale },
                                { translateY: floatingAnim },
                            ],
                        },
                    ]}
                />

                <Animated.Text
                    style={[
                        styles.appTitle,
                        { opacity: fadeAnim }
                    ]}
                >
                    Produkto Elyukal
                </Animated.Text>

                <Animated.Text
                    style={[
                        styles.welcomeText,
                        { opacity: fadeAnim }
                    ]}
                >
                    Welcome
                </Animated.Text>

                <View style={styles.loaderContainer}>
                    <ActivityIndicator
                        size="large"
                        color="#ffd700"
                    />
                </View>
            </Animated.View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        justifyContent: 'center',
        alignItems: 'center',
    },
    contentContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 120,
        height: 120,
        borderRadius: 60,
        marginBottom: 20,
        backgroundColor: '#fff', 
    },
    appTitle: {
        fontFamily: 'OpenSans-Bold',
        fontSize: 28,
        color: '#333',
        marginBottom: 10,
        textAlign: 'center',
    },
    welcomeText: {
        fontFamily: 'OpenSans-Regular',
        fontSize: 18,
        color: '#666',
        marginTop: 10,
        textAlign: 'center',
    },
    loaderContainer: {
        marginTop: 20,
        alignItems: 'center',
    },
});

export default Welcome;