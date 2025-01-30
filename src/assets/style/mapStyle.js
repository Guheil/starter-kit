import { StyleSheet } from "react-native";
import { COLORS } from "../constants/constant";

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    container: {
        flex: 1,
    },
    header: {
        backgroundColor: '#FFFFFF',
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0',
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
    },
    headerText: {
        fontSize: 24,
        fontWeight: '600',
        color: '#333333',
        textAlign: 'left',
    },
    mapContainer: {
        flex: 1,
        height: '100%',
        width: '100%'
    },
    map: {
        flex: 1,
        height: '100%',
        width: '100%'
    },
    toggleButton: {
        position: 'absolute',
        top: 16,
        right: 16,
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        padding: 12,
        borderRadius: 50,
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        width: 48,
        height: 48,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.1)',
    },
    activeToggle: {
        backgroundColor: '#007AFF',
    },
    icon: {
        color: '#000000',
    },
    activeIcon: {
        color: '#FFFFFF',
    },
    annotationContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        height:50,
        width:50,
        overflow:'hidden',
        borderRadius:10,
    },
    annotationPin: {
        borderRadius:10,
        borderColor:COLORS.primary,
        borderWidth:2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        resizeMode:'center',
    },
    pinImage:{
        height:30,
        width:30,
        borderRadius:10,
    },
    calloutContent: {
        backgroundColor: 'white',
        borderRadius: 6,
        padding: 8,
        width: 200,
        flexDirection: 'row',
    },

    storeImage: {
        width: 50,
        height: 50,
        borderRadius: 4,
        marginRight: 8,
    },
    calloutText: {
        flex: 1,
    },
    storeName: {
        fontWeight: 'bold',
        fontSize: 14,
        color: '#333',
    },
    storeType: {
        fontSize: 12,
        color: '#666',
        marginTop: 2,
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 4,
    },
    ratingText: {
        fontSize: 12,
        color: '#666',
        marginLeft: 4,
    }
});
export default styles;