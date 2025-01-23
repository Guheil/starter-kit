import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get('window');

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  content: {
    flex: 1,
    padding: 16,
  },
  searchBarContainer: {
    marginBottom: 16,
  },
  searchBar: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    backgroundColor: '#fff',
    color: '#333',
  },
  productContainer: {
    flex: 1,
  },
  productGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: '48%',
    height: 250,
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, // For Android shadow
  },
  productImage: {
    width: '100%',
    height: '70%', // Adjust image height to leave space for text
    resizeMode: 'cover',
  },
  cardContent: {
    padding: 8,
  },
  cardText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    fontFamily: 'OpenSans-Regular',
    marginBottom: 4,
  },
  locationText: {
    fontSize: 12,
    color: '#666',
    fontFamily: 'OpenSans-Regular',
  },
  star:{
    color:'#FFD700',
  },
  starContainer:{
    flexDirection:'row',
    marginTop:5,
  },
  starText:{
    color:'gray',
    fontSize:12
  },
};

export default styles;