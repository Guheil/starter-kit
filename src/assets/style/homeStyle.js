import { StyleSheet } from "react-native";
import {COLORS, FONT_SIZES, FONTS} from '../constants/constant'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:COLORS.white,
  },
  divider:{
    height:2,
    borderColor: COLORS.gray,
    borderWidth:1,
    marginHorizontal:20,
    marginTop:20,
  },
  topContainer:{
    backgroundColor:COLORS.primary,
    paddingVertical:20,
    paddingHorizontal:15,
    marginBottom:20,
    borderBottomRightRadius:40,
    borderBottomLeftRadius:40,
  },
  text:{
    fontFamily: FONTS.regular,
    color:'black',
    fontSize:12,
    color: COLORS.white,
  },
  searchBarContainer: {
    flexDirection: "row",
    justifyContent:'center',
    alignItems:'center',
  },
  searchBar: {
    flex: 1,
    color: "black",
    borderColor: COLORS.white,
    borderWidth: 1,
    borderRadius: 10,
    height:40,
    color:COLORS.black,
    backgroundColor:COLORS.white,
    paddingHorizontal: 15
  },
  filterButton:{
    marginLeft:10,
  },
  content: {
    flex: 1,
    color: COLORS.black,
    
  },
  circleContainer:{
    height: 80,
    marginVertical:10,
    marginTop:10,
  },
  circleWrapper: {
    flexDirection: 'row',
    paddingVertical: 10,
},
circleSubContainer:{
  justifyContent:'center',
  alignItems:'center',
  flex:1,
  marginRight:10,
  width:80,
},
image: {
  borderRadius: 25,
  width: 50,
  height: 50,
  overflow: 'hidden', 
},

  featuredContainer:{
    paddingHorizontal:20,
  },
  square1:{
    backgroundColor:COLORS.gray,
    borderRadius:10,
    width:'100%',
    height:100,
    overflow:'hidden',
  },
  featureImage:{
    height:'100%',
    width:'100%',
    resizeMode:'cover'
  },
  squaresContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    width:'100%',
    flexWrap:'wrap',
  },
  squares:{
    flexDirection: 'column',
  justifyContent: 'space-between',
  flexBasis: '50%',
  },
  square2:{
    marginTop:10,
    borderRadius:10,
    backgroundColor:COLORS.gray,
    width:'98%',
    height:210,
    overflow:'hidden'
    
  },  
  square3:{
    marginTop:10,
    borderRadius:10,
    backgroundColor:COLORS.gray,
    width:'98%',
    height:100,
     overflow:'hidden'
  },
  discoverContainer:{
    marginVertical:10,
    marginTop:10,
    color:'black',
    marginHorizontal:20
  },
  discoverWrapper:{
    flexDirection: 'row',
    paddingVertical:10,
    color:'black',
  },
  discoverText:{
    color:'black',
    marginRight:10,
    fontSize:15,
    fontFamily: FONTS.semibold,
  },
// Products
productContainer: {
  marginBottom:100,
  marginHorizontal:15
},

productGrid: {
  flexDirection: 'row',
  flexWrap: 'wrap', 
  justifyContent: 'space-between', 
},
card: {
  width: '48%',
  height: 250,
  backgroundColor: COLORS.white,
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
star:{
  color:COLORS.secondary,
},
starContainer:{
  flexDirection:'row',
  marginTop:5,
},
starText:{
  color:COLORS.gray,
  fontSize:12
},
cardText: {
  fontSize: 14,
  fontWeight: '600',
  color: '#333',
  fontFamily: FONTS.regular,
  marginBottom: 4,
},
locationText: {
  fontSize: 12,
  color: '#666',
  fontFamily: FONTS.regular,
},
 eventsContainer: {
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
    fontFamily: FONTS.semibold,
    color: 'black',
    marginTop:20,
  },
  eventCardLarge: {
    width: 300,
    height: 400,
    marginRight: 15,
    borderRadius: 15,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
    overflow: 'hidden',
    paddingBottom: 20,
    marginBottom: 14,
  },
  eventImageLarge: {
    width: '100%',
    height: '60%',
    resizeMode: 'cover',
  },
  eventOverlay: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: 'rgba(0,0,0,0.6)',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 60,
  },
  eventCategory: {
    color: '#fff',
    fontSize: 12,
    fontFamily: FONTS.semibold,
  },
  eventDetailsLarge: {
    padding: 15,
    flex: 1,
    justifyContent: 'space-between',
  },
  eventNameLarge: {
    fontSize: 18,
    fontWeight: '700',
    color: '#333',
    fontFamily: FONTS.bold,
    marginBottom: 8,
  },
  eventDescriptionLarge: {
    fontSize: 14,
    color: '#666',
    fontFamily: FONTS.regular,
    marginBottom: 12,
  },
  eventInfoRowLarge: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  eventInfoItemLarge: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  eventInfoTextLarge: {
    marginLeft: 8,
    color: '#333',
    fontSize: 13,
    fontFamily: FONTS.regular,
  },
  eventBottomRowLarge: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  eventPriceLarge: {
    marginLeft: 8,
    color: '#ffd700',
    fontSize: 14,
    fontFamily: FONTS.semibold,
  },
  eventButtonLarge: {
    backgroundColor: COLORS.secondary,
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 25,
  },
  eventButtonTextLarge: {
    color: '#fff',
    fontFamily: FONTS.semibold,
    fontSize: 14,
  },
});

export default styles;
