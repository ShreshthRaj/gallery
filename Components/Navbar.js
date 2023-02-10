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
     {/* <View  style={styles.navbar}>
          <Text style={{display:'flex'}}>
            Home
          </Text>
          <Text style={{display:'flex'}}>
            About
          </Text>
    
   
     </View> */}
       <FlatList  horizontal  showsHorizontalScrollIndicator={false} style={styles.listStyle} data={datas} renderItem={(ele)=><Text style={styles.textStyle} key={ele.i
        }>{ele.item.name}</Text>}>

         </FlatList>

   </View>
  )
}
const styles=StyleSheet.create({
    navbar:{
        width:'100%',
        border:'1px solid black',
        height:'fit-content',
        backgroundColor:'teal'
    },
    textStyle:{
        fontSize:20,
        padding:20,
        // backgroundColor:'blue',
        textAlign:'center',

        
        color:'white'

    },
    listStyle:{
        textAlign:'center',
       
    }


})