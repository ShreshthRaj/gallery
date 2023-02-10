import { View, Text, FlatList,Image ,StyleSheet} from "react-native";
import  { useEffect,useState } from "react";

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
      
      setRen(data.photos.photo);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    main();
  }, []);

  return (
    <View>
      <Text>Clouddata</Text>
      <FlatList
        data={ren}
        renderItem={({item}) => {
          return (
            <View>
              <Image resizeMode="cover" style={{height:'300px',width:'300px'}}  source={{uri:item.url_s}}/>
              <Text>{item.id}</Text>
              </View>

          )
        }}
      />
    </View>
  );
}
// const styles=StyleSheet.create({
//   imgstyle:{
//     width:"200px",
//     height:'200px',
//     marginLeft:10

  
//   },
 
// })