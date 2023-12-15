import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";
import { Image, View } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from "@react-navigation/native";
const Login=({navigation})=>{
  const navigation2=useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = async () => {
    try {
      
      const userDataString = await AsyncStorage.getItem('userData');
      if (userDataString) {
        const userData = JSON.parse(userDataString);
        if (userData.email === email && userData.password === password) {
          // Đăng nhập thành công
          navigation.replace('Home');
          return;
        }
      }

      // Đăng nhập không thành công
      console.error('Đăng nhập không thành công');
    } catch (error) {
      console.error('Lỗi khi đăng nhập: ', error);
    }
  }
    return(
        <View style={styles.container}> 
        <Text style={{fontSize:20,marginTop:32}}>Login</Text>
        <Image style={{marginTop:40}} source={require('../assets/Illustration4.png')}/>
        <Text style={{fontSize:20,color:'#333333',marginTop:40,marginRight:200,}}>Welcome Back ,</Text>
        <View style={styles.menu}>
        <View style={styles.input}>
        <Image source={require('../assets/Icon1.png')}/>
       <TextInput placeholder="Gmail"
       keyboardType="email-address"
       autoCapitalize="none"
       value={email}
       onChangeText={(text) => setEmail(text)}></TextInput>
        </View>
        <View style={styles.input}>
        <Image source={require('../assets/Icon2.png')}/>
       <TextInput placeholder="PassWord"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
       ></TextInput>
        </View>
        </View>
       
    <Text style={{color:'#333333',marginLeft:220}}> Forget PassWord ?</Text>
    <View style={{flexDirection:'row',marginTop:50}}>
    <Text style={{fontSize:16}}>Don’t have account?</Text>
        <TouchableOpacity onPress={()=>    navigation2.navigate('Register')}>
          <Text style={{fontSize:16, textDecorationLine: 'underline', color: 'blue' }}>Register </Text>
        </TouchableOpacity>
        <Text> here.</Text>
        </View>
            <View style={{fontSize:16, justifyContent: 'center', alignItems:'center'}}>
        <TouchableOpacity  style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      </View>
        </View>
    );
};
const styles=StyleSheet.create({
   container:{
    flex:1,
    alignItems: 'center',
   },

   input:{
    borderWidth:2,
    borderColor:'#D3D3D3',
    width:340,
    height:60,
    paddingLeft:15,
    marginTop:20,
    gap:10,
    alignItems:'center',
    flexDirection:'row',
   },
   menu:{
   marginTop:5,
   },
  button: {
    marginTop:70,
    backgroundColor: '#EF4339', // Màu nền của nút
    padding: 10,
    width:280,
    height:50,
    borderRadius: 5,
   
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center', 
    textAlignVertical:'center',
  },
})
export default Login;
