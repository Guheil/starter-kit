import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Switch,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
    faBell,
    faLanguage,
    faUser,
    faShield,
    faInfoCircle,
    faLock,
    faEnvelope,
    faImage,
    faCreditCard,
    faQuestionCircle
} from '@fortawesome/free-solid-svg-icons';

const SettingsScreen: React.FC = () => {
    const [notificationsEnabled, setNotificationsEnabled] = useState(true);

    const SettingItem = ({
        icon,
        title,
        subtitle,
        rightComponent
    }: {
        icon: any,
        title: string,
        subtitle?: string,
        rightComponent?: React.ReactNode
    }) => (
        <View style={styles.settingItem}>
            <View style={styles.settingItemLeft}>
                <FontAwesomeIcon icon={icon} size={20} color="#ffa726" />
                <View style={styles.settingTextContainer}>
                    <Text style={styles.settingTitle}>{title}</Text>
                    {subtitle && <Text style={styles.settingSubtitle}>{subtitle}</Text>}
                </View>
            </View>
            {rightComponent}
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>Settings</Text>

            <ScrollView contentContainerStyle={styles.scrollContent}>
                <View style={styles.settingsSection}>
                    <SettingItem
                        icon={faUser}
                        title="Account Details"
                        subtitle="Manage personal information"
                        rightComponent={
                            <TouchableOpacity style={styles.actionButton}>
                                <Text style={styles.actionButtonText}>Edit</Text>
                            </TouchableOpacity>
                        }
                    />
                    <SettingItem
                        icon={faEnvelope}
                        title="Email Preferences"
                        subtitle="Manage email notifications"
                        rightComponent={
                            <TouchableOpacity style={styles.actionButton}>
                                <Text style={styles.actionButtonText}>Manage</Text>
                            </TouchableOpacity>
                        }
                    />
                    <SettingItem
                        icon={faBell}
                        title="App Notifications"
                        subtitle="Manage app alert settings"
                        rightComponent={
                            <Switch
                                value={notificationsEnabled}
                                onValueChange={setNotificationsEnabled}
                                trackColor={{ false: '#767577', true: '#ffa726' }}
                            />
                        }
                    />
                    <SettingItem
                        icon={faLanguage}
                        title="Language"
                        subtitle="English (United States)"
                        rightComponent={
                            <TouchableOpacity style={styles.actionButton}>
                                <Text style={styles.actionButtonText}>Change</Text>
                            </TouchableOpacity>
                        }
                    />
                </View>

                <View style={styles.settingsSection}>
                    <SettingItem
                        icon={faShield}
                        title="Privacy & Security"
                        subtitle="Manage data and account security"
                        rightComponent={
                            <TouchableOpacity style={styles.actionButton}>
                                <Text style={styles.actionButtonText}>Manage</Text>
                            </TouchableOpacity>
                        }
                    />
                    <SettingItem
                        icon={faLock}
                        title="Change Password"
                        subtitle="Update your account password"
                        rightComponent={
                            <TouchableOpacity style={styles.actionButton}>
                                <Text style={styles.actionButtonText}>Change</Text>
                            </TouchableOpacity>
                        }
                    />
                    <SettingItem
                        icon={faImage}
                        title="Display Options"
                        subtitle="Customize app appearance"
                        rightComponent={
                            <TouchableOpacity style={styles.actionButton}>
                                <Text style={styles.actionButtonText}>Customize</Text>
                            </TouchableOpacity>
                        }
                    />
                </View>

                <View style={styles.settingsSection}>

                    <SettingItem
                        icon={faQuestionCircle}
                        title="Help & Support"
                        subtitle="Get assistance and contact support"
                        rightComponent={
                            <TouchableOpacity style={styles.actionButton}>
                                <Text style={styles.actionButtonText}>Contact</Text>
                            </TouchableOpacity>
                        }
                    />
                    <SettingItem
                        icon={faInfoCircle}
                        title="About App"
                        subtitle="App version 1.0.0"
                    />
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f4f4f4',
    },
    headerText: {
        fontFamily: 'OpenSans-Bold',
        fontSize: 24,
        paddingHorizontal: 20,
        paddingTop: 20,
        marginBottom: 20,
        color: 'black',
    },
    scrollContent: {
        paddingBottom: 20,
    },
    settingsSection: {
        backgroundColor: 'white',
        marginBottom: 20,
        marginHorizontal: 20,
        borderRadius: 10,
    },
    settingItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderBottomWidth: 0.5,
        borderBottomColor: '#e0e0e0',
    },
    settingItemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    settingTextContainer: {
        marginLeft: 15,
    },
    settingTitle: {
        fontFamily: 'OpenSans-SemiBold',
        fontSize: 16,
        color: 'black',
    },
    settingSubtitle: {
        fontFamily: 'OpenSans-Regular',
        fontSize: 12,
        color: 'gray',
    },
    actionButton: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        backgroundColor: '#ffa726',
        borderRadius: 5,
    },
    actionButtonText: {
        fontFamily: 'OpenSans-SemiBold',
        color: 'white',
        fontSize: 12,
    },
});

export default SettingsScreen;