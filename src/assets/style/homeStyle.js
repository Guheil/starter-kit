import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
  searchBarContainer: {
    flexDirection: "row",
  },
  searchBar: {
    flex: 1,
    color: "black",
    borderColor: "gray",
    borderWidth: 1,
    borderTopLeftRadius: 7,
    borderBottomLeftRadius: 7,
  },
  searchButton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "gray",
    padding: 10,
    borderTopRightRadius: 7,
    borderBottomRightRadius: 7,
  },
  content: {
    flex: 1,
    padding: 20,
    color: "black",
  },
  circleContainer:{
    height: 60,
    marginVertical:10,
    marginTop:10,
  },
  circleWrapper: {
    flexDirection: 'row',
    paddingVertical: 10,
},
  circle: {
    borderRadius: 100,
    backgroundColor: "gray",
    width:50,
    height:50,
    marginRight:10,
  },
  featuredContainer:{
  },
  square1:{
    backgroundColor:'gray',
    borderRadius:10,
    width:'100%',
    height:120,
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
    
  },  
  square3:{
    marginTop:10,
    borderRadius:10,
    backgroundColor:'gray',
    width:'98%',
    height:100,
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
  },
// Products
productContainer: {
},

productGrid: {
  flexDirection: 'row',
  flexWrap: 'wrap', 
  justifyContent: 'space-between', 
},

card: {
  width: '48%',
  height:200,
  backgroundColor: '#fff',
  borderRadius: 8,
  padding: 16,
  marginBottom: 12,

},

cardText: {
  fontSize: 16,
  textAlign: 'center',
  color: '#333',
},

});

export default styles;
