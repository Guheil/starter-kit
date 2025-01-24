import React, { useState } from 'react';
import styles from '../assets/style/settingStyle';
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



export default SettingsScreen;