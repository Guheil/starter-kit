import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F7', // Light gray background
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
  },
  searchBarContainer: {
    marginVertical: 20,
    elevation: 3,
  },
  searchBar: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    color: '#000',
  },
  productContainer: {
    flex: 1,
  },
  productGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingBottom: 20,
  },
  card: {
    width: (width - 52) / 2, // Responsive width calculation
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
    overflow: 'hidden',
  },
  productImage: {
    width: '100%',
    height: 200, // Larger image height
    resizeMode: 'cover',
  },
  cardTextContainer: {
    padding: 12,
  },
  cardText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1C1C1E',
    marginBottom: 4,
  },
  priceText: {
    fontSize: 14,
    color: '#007AFF', // Vibrant blue for price
    fontWeight: '500',
  },
  text: {
    fontFamily: 'OpenSans-Regular',
    color: 'black',
  },
});

export default styles;