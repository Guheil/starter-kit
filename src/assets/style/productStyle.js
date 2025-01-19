import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
text:{
    color:'black'
},
container:{
flex:1
},
content:{
    flex:1
},
searchBarContainer:{
    borderColor:'black',
    borderWidth:2,
    marginHorizontal:10,
    marginVertical:20,
    borderRadius:10,
},
searchBar:{
    color:'black',
    
},

//Products
productContainer:{
    flex:1,
    marginHorizontal:10,
},
productGrid:{
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent:'space-between',
},
card:{
    width:'48%',
    height:250,
    backgroundColor:'#fff',
    borderRadius:8,
    padding:16,
    marginBottom:12,
},
cardText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#000',
  },
  
});
export default styles;