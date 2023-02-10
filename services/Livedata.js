import { View, Text } from 'react-native'
import React from 'react'
var apikey='c270c05084b88c6bc738112a864a3121'
var url='https://api.flickr.com/services/rest'

const apiUrl=url+`/?method=flickr.photos.getRecent&per_page=20&page=1&api_key=${apikey}&format=json&nojsoncallback=1&extras=url_s`;

var arr=[]
var getdata=async()=>{
    try{
     let res=await fetch(apiUrl)
     let data=await res.json()
     console.log(data)
   
    }
    catch(err){
        console.log(err)
    }


}
export default function Livedata(){
  
    // const [state,setState]=useState([])
   return getdata()
    // console.log(arr)
    
    
    // console.log(state)
    
}