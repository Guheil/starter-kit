import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    SafeAreaView,
    KeyboardAvoidingView,
    Platform,
    Alert,
    Image
} from 'react-native';
import styles from '../assets/style/loginStyle'; // Assuming your styles are located here

const ForgotPassword: React.FC = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleResetPassword = () => {
        const trimmedEmail = email.trim().toLowerCase();

        if (!trimmedEmail) {
            setError('Please enter a valid email address.');
            return;
        }

        if (!validateEmail(trimmedEmail)) {
            setError('Please enter a valid email address.');
            return;
        }

        setLoading(true);
        setError('');

        // Simulate an API call to reset the password (you would replace this with your actual API call)
        setTimeout(() => {
            setLoading(false);
            Alert.alert('Success', 'Password reset link has been sent to your email!');
            setEmail('');
        }, 2000);
    };

    const validateEmail = (email: string) => {
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return regex.test(email);
    };

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.container}
            >
                <View style={styles.logoContainer}>
                    <Image source={require('../assets/img/logo.png')} style={styles.logo} />
                </View>
                <View style={styles.logoContainer}>
                    <Text style={styles.appTitle}>Forgot Password</Text>
                </View>

                {error ? (
                    <View style={styles.errorContainer}>
                        <Text style={styles.errorText}>{error}</Text>
                    </View>
                ) : null}

                <View style={styles.formContainer}>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter your email"
                            placeholderTextColor="#666"
                            value={email}
                            onChangeText={setEmail}
                            keyboardType="email-address"
                            autoCapitalize="none"
                        />
                    </View>

                    <TouchableOpacity
                        style={styles.loginButton}
                        onPress={handleResetPassword}
                        disabled={loading} // Disable button while loading
                    >
                        <Text style={styles.loginButtonText}>
                            {loading ? 'Sending...' : 'Send Reset Link'}
                        </Text>
                    </TouchableOpacity>
                    
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

export default ForgotPassword;
