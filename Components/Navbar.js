import { View, Text,StyleSheet,FlatList,TouchableOpacity } from 'react-native'
import React from 'react'

export default function Navbar() {
    const datas=[{
        name:'Home',
        rt:'/'
    },
    {
        name:'About',
        rt:'/About'
    },
    {
        name:'Signin',
        rt:'/signin'
    }
]
  return (
   <View style={styles.navbar}>
     
       <FlatList horizontal  style={styles.listStyle} data={datas} renderItem={(ele)=><TouchableOpacity><Text style={styles.textStyle}  key={ele.item.name}>{ele.item.name}</Text></TouchableOpacity>}/>

        
       
       

   </View>
  )
}
const styles=StyleSheet.create({
    navbar:{
        width:'100%',
        border:'1px solid black',
     
        backgroundColor:'teal',
        marginTop:25
    },
    
    textStyle:{
        fontSize:30,
        padding:15,
        // backgroundColor:'blue',
        textAlign:'center',

        
        color:'white'

    },
    listStyle:{
        textAlign:'center',
        padding:20,
    
        
       
    }


})