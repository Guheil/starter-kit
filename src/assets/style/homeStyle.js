import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  text:{
    fontFamily: 'OpenSans-Regular',
    color:'black',
  },
  searchBarContainer: {
    flexDirection: "row",
  },
  searchBar: {
    flex: 1,
    color: "black",
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 50,
    height:40,
    color:'black',
    paddingHorizontal: 15

  },
  content: {
    flex: 1,
    padding: 20,
    color: "black",
    
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
  },
  square1:{
    backgroundColor:'gray',
    borderRadius:10,
    width:'100%',
    height:100,
    overflow:'hidden'
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
    backgroundColor:'gray',
    width:'98%',
    height:210,
    overflow:'hidden'
    
  },  
  square3:{
    marginTop:10,
    borderRadius:10,
    backgroundColor:'gray',
    width:'98%',
    height:100,
     overflow:'hidden'
  },
  discoverContainer:{
    marginVertical:10,
    marginTop:10,
    color:'black',
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
    fontFamily: 'OpenSans-Semibold',
  },
// Products
productContainer: {
  marginBottom:100,
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

});

export default styles;
