import { View, Text,StyleSheet, FlatList } from 'react-native'

import Navbar from './Components/Navbar';
import Clouddata from './screens/Clouddata';


export default function App() {
 




  return (

    <View style={{flex:1}}>
        <Navbar/>
        <Clouddata/>
    </View>
  )
}
