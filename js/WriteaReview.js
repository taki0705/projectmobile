
import { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";
import { Image, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
const WriteaReview=()=>{
     const navigation=useNavigation();
    return(
     <View style={styles.container}>
        <View style={{flexDirection:'row',alignItems:'center'}}>
           <TouchableOpacity  onPress={()=> navigation.replace('Reviews')}>
                <Image source={require('../assets/Shapecp.png')} />
                </TouchableOpacity>
          <Text  style={{fontSize:20,marginLeft:80}}>Write a Review</Text>
          </View>
          <View style={{flexDirection:'row' ,marginTop:40,marginLeft:120}}>
          <Image style={styles.star} source={require('../assets/Star1.png')}/>
          <Image style={styles.star} source={require('../assets/Star1.png')}/>
          <Image style={styles.star} source={require('../assets/Star1.png')}/>
          <Image style={styles.star}  source={require('../assets/Star1.png')}/>
          <Image style={styles.star}  source={require('../assets/Star1.png')} />
          </View>
          <Text style={{marginLeft:120,fontSize:14}}> Tap a start to rate</Text>
          <View style={styles.input}>
       <TextInput placeholder="Review"
        multiline={true}
        numberOfLines={8}
       ></TextInput>
        </View>
     </View>
    );
};
const styles=StyleSheet.create({
    container:{
        paddingTop:20,
        marginLeft:10,
        flex:1,

       },
    star:{
        height:28,
        width :28,
    },
    input:{
        borderWidth:2,
        borderColor:'#D3D3D3',
        width:360,
        height:'40%',
        padding:15,
        marginTop:20,
        gap:10,
        alignItems:'center',
        flexDirection:'row',
       },
})
export default WriteaReview;