import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    // Base container styles
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        position: 'relative', 
    },

    productImage: {
        width: '100%',
        height: width * 0.75, 
        resizeMode: 'cover', 
    },

    detailsContainer: {
        padding: 15,
        paddingBottom: 80, 
    },

    productTitle: {
        fontSize: 24,
        fontFamily: 'OpenSans-Bold',
        marginBottom: 10,
        color: '#333', 
    },
    
    productPrice: {
        fontSize: 20,
        color: '#FDD700',
        fontFamily: 'OpenSans-Regular',
        marginBottom: 15,
        fontWeight: '600', // Semi-bold for emphasis
    },

    // Enhanced AR Button with more interactive styling
    arButton: {
        flexDirection: 'row',
        marginVertical: 15,
        padding: 12,
        backgroundColor: '#FDD700',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000', // Added shadow for depth
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3, // For Android shadow
    },

    arButtonText: {
        color: '#FFF',
        fontSize: 16,
        marginLeft: 10,
        fontWeight: '500', // Medium weight
        fontFamily: 'OpenSans-Regular',
    },

    // Section title with more visual hierarchy
    sectionTitle: {
        fontSize: 18,
        fontFamily: 'OpenSans-Bold',
        marginTop: 20,
        marginBottom: 10,
        color: '#333',
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0',
        paddingBottom: 5,
    },

    // Improved description readability
    productDescription: {
        fontSize: 16,
        color: '#444',
        lineHeight: 24,
        textAlign: 'justify', // More even text distribution
        fontFamily: 'OpenSans-Regular',
    },

    // Location container with enhanced visual design
    locationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F0F0F0',
        padding: 12,
        borderRadius: 8,
        marginVertical: 10,
        borderLeftWidth: 4,
        borderLeftColor: '#FDD700', // Accent border
    },

    locationText: {
        marginLeft: 10,
        fontSize: 16,
        color: '#FDD700',
        flex: 1, // Allow text to take available space
        fontFamily: 'OpenSans-Regular',
    },

    // Details grid with improved layout and spacing
    detailsGrid: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        marginTop: 10,
    },

    detailItem: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F0F0F0',
        padding: 10,
        borderRadius: 8,
        width: '48%', // Slightly less than half to allow for spacing
        marginBottom: 10,
        shadowColor: '#000', // Subtle shadow for depth
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 2,
        elevation: 1, // For Android
    },

    detailText: {
        marginLeft: 10,
        fontSize: 14,
        flex: 1, // Allow text to expand
        color: '#666',
        fontFamily: 'OpenSans-Regular',
    },

    // Improved close button with more modern design
    closeButton: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        padding: 10,
        borderRadius: 25,
        flexDirection: 'row',
        alignItems: 'center',
        shadowColor: '#000', // Added shadow for prominence
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5, // For Android
    },

    closeButtonText: {
        color: 'white',
        marginLeft: 5,
        fontSize: 16,
        fontFamily: 'OpenSans-Regular',
    },

    // New responsive text styles
    responsiveText: {
        fontSize: width > 375 ? 16 : 14, // Adjust font size for smaller screens
    },
    arButtonsContainer: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
},
 cameraButton: {
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: 'rgba(255,255,255,0.2)',
        borderWidth: 3,
        borderColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    cameraButtonInner: {
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cameraButtonInnerCircle: {
        width: 56,
        height: 56,
        borderRadius: 28,
        backgroundColor: 'white',
        position: 'absolute',
        alignSelf: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
});

export default styles;