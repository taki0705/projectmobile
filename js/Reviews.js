import { StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";
import { Image, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native";
const Reviews=()=>{
     const navigation=useNavigation();
    return(
     <View style={styles.container}>
      <ScrollView>
        <View style={{flexDirection:'row',alignItems:'center'}}>
           <TouchableOpacity  onPress={()=> navigation.replace('HotelDescription')}>
                <Image source={require('../assets/Shapecp.png')} />
                </TouchableOpacity>
          <Text  style={{fontSize:20,marginLeft:100}}>Ratings</Text>
          </View>
          <TouchableOpacity  onPress={()=> navigation.replace('WriteaReview')} >
          <View style={{flexDirection:'row',alignItems:'center',gap:3,marginTop:30,marginLeft:250}}>
            <Text>Write a Reviews</Text>
            <Image source={require('../assets/Shape.png')}/>
          </View>
          </TouchableOpacity> 
      <View style={{flexDirection:'row',alignItems:'center'}}>
        <View>
            <Text style={{fontSize:60,color:'#EF4339'}}>4.5</Text>
            <Text style={{color:'#808080'}}>(OUT OF 5)</Text>
        </View>
        <View style={{marginLeft:30}}>
        <View style={{flexDirection:'row',alignItems:'center'}}>
          <Image style={{width:12,height:12}} source={require('../assets/Star2.png')}/>
          <Image style={{width:12,height:12}} source={require('../assets/Star2.png')}/>
          <Image style={{width:12,height:12}} source={require('../assets/Star2.png')}/>
          <Image style={{width:12,height:12}} source={require('../assets/Star2.png')}/>
          <Image style={{width:12,height:12}} source={require('../assets/Star2.png')}/>
          <View style={{width:141,height:4,backgroundColor:'#EF4339',marginLeft:20}}></View>
        </View>
        <View style={{flexDirection:'row',alignItems:'center'}}>
          <Image style={{width:12,height:12}} source={require('../assets/Star2.png')}/>
          <Image style={{width:12,height:12}} source={require('../assets/Star2.png')}/>
          <Image style={{width:12,height:12}} source={require('../assets/Star2.png')}/>
          <Image style={{width:12,height:12}} source={require('../assets/Star2.png')}/>
          <View style={{width:50,height:4,backgroundColor:'#EF4339',marginLeft:31}}></View>
        </View>
        <View style={{flexDirection:'row',alignItems:'center'}}>
          <Image style={{width:12,height:12}} source={require('../assets/Star2.png')}/>
          <Image style={{width:12,height:12}} source={require('../assets/Star2.png')}/>
          <Image style={{width:12,height:12}} source={require('../assets/Star2.png')}/>
          <View style={{width:20,height:4,backgroundColor:'#EF4339',marginLeft:43}}></View>
        </View>
        <View style={{flexDirection:'row',alignItems:'center'}}>
          <Image style={{width:12,height:12}} source={require('../assets/Star2.png')}/>
          <Image style={{width:12,height:12}} source={require('../assets/Star2.png')}/>
        </View>
        <View style={{flexDirection:'row',alignItems:'center'}}>
          <Image style={{width:12,height:12}} source={require('../assets/Star2.png')}/>
        </View>
        </View>
      </View>
        <Text style={{color:'#808080',marginLeft:300}}> 25 Ratings</Text>
        <View style={{flexDirection:'row',alignItems:'center',paddingTop:20}}>
          <Image style={{width:30,height:30}} source={require('../assets/ava1.png')}/>
          <View>
          <Text style={{fontSize:16}}> Kara James</Text>
          <Text style={{color:'#808080',fontSize:12}}>Feb 2020</Text>
          </View>
          <View style={{marginLeft:122,flexDirection:'row',alignItems:'center',gap:5}}>
          <Image style={{width:16,height:16}} source={require('../assets/Star3.png')}/>
          <Image style={{width:16,height:16}} source={require('../assets/Star3.png')}/>
          <Image style={{width:16,height:16}} source={require('../assets/Star3.png')}/>
          <Image style={{width:16,height:16}} source={require('../assets/Star3.png')}/>
          <Image style={{width:16,height:16}} source={require('../assets/Star3.png')}/>
          </View>
        </View>
        <Text style={{width:350,fontSize:16,marginTop:14}}>
          FAMILY FRIENDLY !!! Stayed for four nights, 
          extremely friendly and cooperative staffs and lovely ambience,
          the best thing about this place is the quality of the food.</Text>
          
          <View style={{flexDirection:'row',alignItems:'center',paddingTop:20}}>
          <Image style={{width:30,height:30}} source={require('../assets/ava2.png')}/>
          <View>
          <Text style={{fontSize:16}}> Selene Gomez</Text>
          <Text style={{color:'#808080',fontSize:12}}>Jab 2020</Text>
          </View>
          <View style={{marginLeft:104,flexDirection:'row',alignItems:'center',gap:5}}>
          <Image style={{width:16,height:16}} source={require('../assets/Star3.png')}/>
          <Image style={{width:16,height:16}} source={require('../assets/Star3.png')}/>
          <Image style={{width:16,height:16}} source={require('../assets/Star3.png')}/>
          <Image style={{width:16,height:16}} source={require('../assets/Star3.png')}/>
          <Image style={{width:16,height:16}} source={require('../assets/Star3.png')}/>
          </View>
        </View>
        <Text style={{width:350,fontSize:16,marginTop:14}}>
        Neat and Clean. Courteous staff. Excellent food, south Indian as well as North 
        Indian. Good location as per my requirements. Away from crowd.</Text>

          <View style={{flexDirection:'row',alignItems:'center',paddingTop:20}}>
          <Image style={{width:30,height:30}} source={require('../assets/ava3.png')}/>
          <View>
          <Text style={{fontSize:16}}> John Wich</Text>
          <Text style={{color:'#808080',fontSize:12}}>Jun 2020</Text>
          </View>
          <View style={{marginLeft:130,flexDirection:'row',alignItems:'center',gap:5}}>
          <Image style={{width:16,height:16}} source={require('../assets/Star3.png')}/>
          <Image style={{width:16,height:16}} source={require('../assets/Star3.png')}/>
          <Image style={{width:16,height:16}} source={require('../assets/Star3.png')}/>
          <Image style={{width:16,height:16}} source={require('../assets/Star3.png')}/>
          <Image style={{width:16,height:16}} source={require('../assets/Star4.png')}/>
          </View>
        </View>
        <Text style={{width:350,fontSize:16,marginTop:14}}>
        Overall experience was good. only one thing would like to tell is there is no 
        intercom in the room so bit difficult to call them..</Text>

          <View style={{flexDirection:'row',alignItems:'center',paddingTop:20}}>
          <Image style={{width:30,height:30}} source={require('../assets/ava4.png')}/>
          <View>
          <Text style={{fontSize:16}}> David Ben</Text>
          <Text style={{color:'#808080',fontSize:12}}>Dec 2019</Text>
          </View>
          <View style={{marginLeft:135,flexDirection:'row',alignItems:'center',gap:5}}>
          <Image style={{width:16,height:16}} source={require('../assets/Star3.png')}/>
          <Image style={{width:16,height:16}} source={require('../assets/Star3.png')}/>
          <Image style={{width:16,height:16}} source={require('../assets/Star3.png')}/>
          <Image style={{width:16,height:16}} source={require('../assets/Star4.png')}/>
          <Image style={{width:16,height:16}} source={require('../assets/Star4.png')}/>
          </View>
        </View>
        <Text style={{width:350,fontSize:16,marginTop:14}}>
        They have amazing facilities for senior citizens. They took extra care of us</Text>

        <View style={{flexDirection:'row',alignItems:'center',paddingTop:20}}>
          <Image style={{width:30,height:30}} source={require('../assets/21810310337.png')}/>
          <View>
          <Text style={{fontSize:16}}> Taki</Text>
          <Text style={{color:'#808080',fontSize:12}}>Dec 2019</Text>
          </View>
          <View style={{marginLeft:160,flexDirection:'row',alignItems:'center',gap:5}}>
          <Image style={{width:16,height:16}} source={require('../assets/Star3.png')}/>
          <Image style={{width:16,height:16}} source={require('../assets/Star3.png')}/>
          <Image style={{width:16,height:16}} source={require('../assets/Star3.png')}/>
          <Image style={{width:16,height:16}} source={require('../assets/Star4.png')}/>
          <Image style={{width:16,height:16}} source={require('../assets/Star4.png')}/>

          </View>
        </View>
        <Text style={{width:360,fontSize:16,marginTop:14}}>
         The taste is not bad but staff's service is very bad</Text>
        </ScrollView>
     </View>
    );
};
const styles=StyleSheet.create({
    container:{
        paddingTop:20,
        marginLeft:10,
        flex:1,
       },
       
})
export default Reviews;