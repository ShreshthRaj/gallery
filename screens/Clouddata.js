import { View, Text,FlatList } from 'react-native'
import React, { useSate,useEffect, useMemo } from 'react'
import Livedata from '../services/Livedata'
// import { FlatList } from 'react-native-web'
import { useState } from 'react'
var apikey='c270c05084b88c6bc738112a864a3121'
var url='https://api.flickr.com/services/rest'
// import '../App.css'
const apiUrl=url+`/?method=flickr.photos.getRecent&per_page=20&page=1&api_key=${apikey}&format=json&nojsoncallback=1&extras=url_s`;

export default function Clouddata() {
   
  const [page,setpage] = useState(1)
  const [ren,setRen] = useState([])
  const main= async()=>{
    try {
      
      let response = await fetch(apiUrl);
      let data = await response.json()
      console.log(data.photos.photo)
          setRen(data.photos.photo)
    } catch (error) {
      console.log(error.message.data)
    }
  }

  useEffect(()=>{
     main()
  },[page])
 
  return (
    <View>
      <Text>Clouddata</Text>
      {
        ren.map((el)=>{
          return(
            <div className='Optimus'>
               <div>
                  <img src={el.url_s} width={"200px"} height={"200px"}></img>
               </div>
            </div>
            // <h1>{el.url_s}</h1>
          

          )
        })
      }
      {/* <FlatList data={cloud} renderItem={(ele)=>console.log(ele)}/> */}
      
    </View>
  )
}