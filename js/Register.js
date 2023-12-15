import React,{ useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";
import { Image, View } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from "@react-navigation/native";
const Register=({navigation})=>{
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation1 = useNavigation();
  const handleRegister = async () => {
    try {
       
      const userData = {
        email,
        password,
      };

      // Lưu thông tin đăng ký vào AsyncStorage
      await AsyncStorage.setItem('userData', JSON.stringify(userData));

      // Điều hướng người dùng đến màn hình đăng nhập sau khi đăng ký thành công
      navigation.replace('Login');
    } catch (error) {
      console.error('Lỗi khi đăng ký: ', error);
    }
  };
    const [isChecked, setIsChecked] = useState(false);
    const toggleCheckbox = () => {
      setIsChecked((prev) => !prev);
    }
    return(
        <View style={styles.container}> 
        <Text style={{fontSize:20,marginTop:32}}>Register</Text>
        <Image style={{marginTop:40}} source={require('../assets/Illustration4.png')}/>
        <View style={styles.menu}>
        <View style={styles.input}>
        <Image  source={require('../assets/icon.png')}/>
       <TextInput placeholder="Username"></TextInput>
        </View>
        <View style={styles.input}>
        <Image source={require('../assets/Icon1.png')}/>
       <TextInput placeholder="Gmail"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={(text) => setEmail(text)}
       ></TextInput>
        </View>
        <View style={styles.input}>
        <Image source={require('../assets/Icon2.png')}/>
       <TextInput placeholder="PassWord"
        autoCapitalize="none"
        value={password}
        onChangeText={(text) => setPassword(text)}
       ></TextInput>
        </View>
        </View>
        <View style={styles.agree}>
        <TouchableOpacity style={styles.checkboxContainer} onPress={toggleCheckbox}>
      <View
        style={[
          styles.checkbox,
          isChecked ? styles.checked : styles.unchecked,
        ]}
      />
    </TouchableOpacity>
    <Text>I hereby agree to the </Text>
    <Text style={{textDecorationLine: 'underline' }}>T&C and Privacy Policy.</Text>
    </View>
    <View style={{flexDirection:'row',marginTop:30}}>
    <Text>Already a member? </Text>
        <TouchableOpacity onPress={()=> navigation1.navigate('Login')}>
          <Text style={{ textDecorationLine: 'underline', color: 'blue' }}>Login</Text>
        </TouchableOpacity>
        <Text> here.</Text>
        </View>
            <View style={{ justifyContent: 'center', alignItems:'center'}}>
        <TouchableOpacity  style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Register</Text>
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
    padding:10,
    marginTop:20,
    gap:10,
    alignItems:'center',
    flexDirection:'row',
   },
   menu:{
   marginTop:40,
   },
   checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 12, // Half of the width/height for a circular shape
    borderWidth: 1,
    borderColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight:15,
  },
  checked: {
    backgroundColor: 'red', 
  },
  unchecked: {
    backgroundColor: 'white', 
    borderColor:'red',
    borderWidth:2,
  },
  agree:{
   alignItems:'center',
   flexDirection:'row',
   marginTop:20,
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
export default Register;
