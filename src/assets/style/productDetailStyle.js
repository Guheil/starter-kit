import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    // Base container styles
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        position: 'relative', // Added for absolute positioning
    },

    // Image styles with responsive sizing
    productImage: {
        width: '100%',
        height: width * 0.75, // Responsive height based on screen width
        resizeMode: 'cover', // Ensure image covers the area
    },

    // Details container with improved layout
    detailsContainer: {
        padding: 15,
        paddingBottom: 80, // Extra bottom padding for buttons
    },

    // Typography improvements
    productTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#333', // Slightly softer black for readability
    },

    productPrice: {
        fontSize: 20,
        color: '#007AFF',
        marginBottom: 15,
        fontWeight: '600', // Semi-bold for emphasis
    },

    // Enhanced AR Button with more interactive styling
    arButton: {
        flexDirection: 'row',
        marginVertical: 15,
        padding: 12,
        backgroundColor: '#007AFF',
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
    },

    // Section title with more visual hierarchy
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
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
        borderLeftColor: '#007AFF', // Accent border
    },

    locationText: {
        marginLeft: 10,
        fontSize: 16,
        color: '#007AFF',
        flex: 1, // Allow text to take available space
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
        fontWeight: '500', // Medium weight
    },

    // New responsive text styles
    responsiveText: {
        fontSize: width > 375 ? 16 : 14, // Adjust font size for smaller screens
    },
});

export default styles;