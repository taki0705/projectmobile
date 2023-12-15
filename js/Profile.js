import { StyleSheet, Text} from "react-native";
import { Image, View } from "react-native";
const Profile=()=>{
   
    return(
     <View style={styles.container}>
          <Text  style={{fontSize:20,marginTop:32,textAlign:'center'}}>Profile</Text>
          <View style={{marginTop:50,flexDirection:'row',alignItems:'center'}}>
            <Image style={{width:100,height:100,borderRadius:999}} source={require('../assets/21810310337.png')}/>
            <Text style={{fontSize:24,fontWeight:'500'}}>taki</Text>
          </View>
          <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20,paddingTop:20,}}>
             <Text style={{color:'#333333',fontSize:18}}>My Account</Text>
             <Image source={require('../assets/Shape.png')}/>
          </View>
          <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20,paddingTop:10}}>
             <Text style={{color:'#333333',fontSize:18}}>Payments & Refunds</Text>
             <Image source={require('../assets/Shape.png')}/>
          </View>
          <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20,paddingTop:10}}>
             <Text style={{color:'#333333',fontSize:18}}>Past Bookings</Text>
             <Image source={require('../assets/Shape.png')}/>
          </View>
          <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20,paddingTop:10}}>
             <Text style={{color:'#333333',fontSize:18}}>Help & Support</Text>
             <Image source={require('../assets/Shape.png')}/>
          </View>
          <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20,paddingTop:10}}>
             <Text style={{color:'#333333',fontSize:18}}>Privacy Policy</Text>
             <Image source={require('../assets/Shape.png')}/>
          </View>
          <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20,paddingTop:10}}>
             <Text style={{color:'#333333',fontSize:18}}>Log out</Text>
          </View>
     </View>
    );
};
const styles=StyleSheet.create({
    container:{
        padding:20,
        flex:1,

       },
})
export default Profile;