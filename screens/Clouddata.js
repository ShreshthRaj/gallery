import { View, Text, FlatList,Image ,StyleSheet} from "react-native";
import React, { useEffect } from "react";
import Livedata from "../services/Livedata";
import { useState } from "react";
var apikey = "c270c05084b88c6bc738112a864a3121";
var url = "https://api.flickr.com/services/rest";
const apiUrl =
  url +
  `/?method=flickr.photos.getRecent&per_page=20&page=1&api_key=${apikey}&format=json&nojsoncallback=1&extras=url_s`;

export default function Clouddata() {
  const [page, setpage] = useState(1);
  const [ren, setRen] = useState([]);
  const main = async () => {
    try {
      let response = await fetch(apiUrl);
      let data = await response.json();
      console.log(data.photos.photo);
      setRen(data.photos.photo);
    } catch (error) {
      console.log(error.message.data);
    }
  };

  useEffect(() => {
    main();
  }, [page]);

  return (
    <View>
      <Text>Clouddata</Text>
      <FlatList
        data={ren}
        renderItem={({item}) => {
          return (
            <View >
              
               <Image style={styles.imgstyle} source={{uri:item.url_s}}/>
              <Text>{item.id}</Text>
            </View>
          );
        }}
      />
    </View>
  );
}
const styles=StyleSheet.create({
  imgstyle:{
    width:'40%',
    height:undefined,
    aspectRatio:1


  
  },
 
})