import { StyleSheet, Dimensions } from "react-native";
import {COLORS, FONTS, FONT_SIZE} from '../constants/constant'


const styles = StyleSheet.create({
  container: {
  flex: 1,
  backgroundColor: COLORS.white,
},
content: {
  flex: 1,  
},
topHeader:{
  backgroundColor: COLORS.primary,
  padding:16,
  
  borderBottomLeftRadius:20,
  borderBottomRightRadius:20,
},
filterHeader: {
  flexDirection: 'row',
  alignItems: 'center',
},
searchBarContainer: {
  flex: 1,
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: 'white',
  borderRadius: 10,
  paddingHorizontal: 16,
},
searchIcon: {
  marginRight: 8,
},
searchBar: {
  flex: 1,
  height: 40,
},
filterButton: {
  marginLeft: 12,
  padding: 10,
  color: COLORS.white,
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
  productContainer: {
    flex: 1,
    paddingHorizontal:16,
    paddingVertical:16
  },
  productGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingBottom: 20,
  },
  card: {
    width: '48%',
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
    overflow: 'hidden',
  },
  productImage: {
    width: '100%',
    height: 150, 
    resizeMode: 'cover',
  },
  cardTextContainer: {
    padding: 12,
  },
  cardText: {
    fontSize: FONT_SIZE.medium,
    fontWeight: '600',
    color: '#1C1C1E',
    marginBottom: 4,
    fontFamily: FONTS.regular,
  },
  cardTextLocation: {
    fontSize: FONT_SIZE.small,
    fontWeight: '600',
    color: COLORS.gray,
    marginBottom: 4,
    fontFamily: 'OpenSans-Light',
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
  noResultsContainer: {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  paddingVertical: 50,
  width: '100%',
},
noResultsText: {
  fontSize: 18,
  fontFamily: 'OpenSans-Bold',
  color: '#333',
  marginBottom: 10,
},
noResultsSubtext: {
  fontSize: 14,
  fontFamily: 'OpenSans-Regular',
  color: '#666',
},
});

export default styles;