import { StyleSheet, Dimensions } from "react-native";

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

export default styles;