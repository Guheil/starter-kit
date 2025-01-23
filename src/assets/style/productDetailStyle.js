import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    productImage: {
        width: '100%',
        height: 300,
    },
    detailsContainer: {
        padding: 15,
    },
    productTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    productPrice: {
        fontSize: 20,
        color: '#007AFF',
        marginBottom: 15,
    },
    arButton: {
        flexDirection: 'row',
        marginVertical: 15,
        padding: 12,
        backgroundColor: '#007AFF',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    arButtonText: {
        color: '#FFF',
        fontSize: 16,
        marginLeft: 10,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 10,
    },
    productDescription: {
        fontSize: 16,
        color: '#444',
        lineHeight: 24,
    },
    locationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F0F0F0',
        padding: 12,
        borderRadius: 8,
    },
    locationText: {
        marginLeft: 10,
        fontSize: 16,
        color: '#007AFF',
    },
    detailsGrid: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
    },
    detailItem: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F0F0F0',
        padding: 10,
        borderRadius: 8,
        width: '48%',
        marginBottom: 10,
    },
    detailText: {
        marginLeft: 10,
        fontSize: 14,
    },
});

export default styles;