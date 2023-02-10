import { View, Text,StyleSheet, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Livedata from './services/Livedata';
import Navbar from './Components/Navbar';
import Clouddata from './screens/Clouddata';


export default function App() {
 

// useEffect(()=>{
//  getdata()
// Livedata()
// },[])


  return (

    <View style={{flex:1}}>
        <Navbar/>
        <Clouddata/>
    </View>
  )
}
const styles=StyleSheet.create({
  textstyle:{
    fontSize:hp('20%')
  
  }
})