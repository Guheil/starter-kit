
import React, { useEffect, useRef } from 'react';
import { COLORS, FONTS, FONT_SIZE } from '../assets/constants/constant';
import {
    View,
    Text,
    Image,
    Animated,
    StyleSheet,
    Dimensions,
} from 'react-native';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const Welcome = () => {
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const translateY = useRef(new Animated.Value(50)).current;

    useEffect(() => {
        // Start animation sequence
        Animated.parallel([
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 1500,
                useNativeDriver: true,
            }),
            Animated.timing(translateY, {
                toValue: 0,
                duration: 1500,
                useNativeDriver: true,
            })
        ]).start(() => {
            // Add a small delay before navigating
            setTimeout(() => {
                navigation.replace('Login');
            }, 1000);
        });
    }, []);

    return (
        <View style={styles.container}>
            <Animated.View
                style={[
                    styles.content,
                    {
                        opacity: fadeAnim,
                        transform: [{ translateY: translateY }]
                    }
                ]}
            >
                <Image
                    source={require('../assets/img/logo.png')}
                    style={styles.logo}
                />
                <Text style={styles.appTitle}>Produkto Elyukal</Text>
                <Text style={styles.welcomeText}>Welcome</Text>
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
    content: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 120,
        height: 120,
        borderRadius: 60,
        marginBottom: 20,
    },
    appTitle: {
        fontFamily: 'OpenSans-Bold',
        fontSize: 28,
        color: '#333',
        marginBottom: 10,
    },
    welcomeText: {
        fontFamily: 'OpenSans-Regular',
        fontSize: 18,
        color: '#666',
        marginTop: 10,
    }
});

export default Welcome;