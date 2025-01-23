import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get('window');

const styles = {
  container: {
<<<<<<< HEAD
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
=======
  flex: 1,
  backgroundColor: '#fff',
},
content: {
  flex: 1,
  padding: 16,
},
filterHeader: {
  flexDirection: 'row',
  alignItems: 'center',
  marginBottom: 16,
},
searchBarContainer: {
  flex: 1,
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: '#f5f5f5',
  borderRadius: 10,
  paddingHorizontal: 16,
},
searchIcon: {
  marginRight: 8,
},
searchBar: {
  flex: 1,
  height: 40,
  color: '#333',
},
filterButton: {
  marginLeft: 12,
  padding: 10,
},
filterModal: {
  flex: 1,
  backgroundColor: 'rgba(0,0,0,0.5)',
  justifyContent: 'flex-end',
},
filterContent: {
  backgroundColor: '#fff',
  borderTopLeftRadius: 20,
  borderTopRightRadius: 20,
  padding: 20,
  maxHeight: '80%',
},
filterHeader: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: 20,
},
filterTitle: {
  fontSize: 20,
  fontWeight: 'bold',
  color: '#333',
},
filterSection: {
  marginBottom: 24,
},
filterSubtitle: {
  fontSize: 16,
  fontWeight: '600',
  color: '#444',
  marginBottom: 12,
},
filterOption: {
  flexDirection: 'row',
  alignItems: 'center',
  marginBottom: 8,
},
filterOptionText: {
  marginLeft: 12,
  fontSize: 16,
  color: '#666',
},
filterActions: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginTop: 20,
},
resetButton: {
  padding: 12,
  backgroundColor: '#e0e0e0',
  borderRadius: 8,
  flex: 1,
  marginRight: 8,
},
applyButton: {
  padding: 12,
  backgroundColor: '#007bff',
  borderRadius: 8,
  flex: 1,
  marginLeft: 8,
},
resetButtonText: {
  color: '#333',
  textAlign: 'center',
  fontWeight: '500',
},
applyButtonText: {
  color: '#fff',
  textAlign: 'center',
  fontWeight: '500',
},
>>>>>>> b8793dddf2b2e45485fa5896905873d68b245b00
  productContainer: {
    flex: 1,
  },
  productGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
<<<<<<< HEAD
    width: '48%',
    height: 250,
    backgroundColor: '#fff',
    borderRadius: 8,
=======
    width: (width - 43) / 2, // Responsive width calculation
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
>>>>>>> b8793dddf2b2e45485fa5896905873d68b245b00
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