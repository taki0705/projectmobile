import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const BookingConfirmation = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text  style={{fontSize:22,textAlign:'center'}}>Booking</Text>
      <Text style={{fontSize:18,marginTop:60,}}>Booking Details</Text>
      <Image  style={{marginTop:80}} source={require('../assets/congra.png')}/>
      <View style={{marginTop:20}}>
      <Text style={{fontSize:30,textAlign:'center'}}>Congratulations!</Text>
      <Text style={{fontSize:15,textAlign:'center'}}>Your booking has been confirmed</Text>
      </View>
      <View style={{alignItems:'center',marginTop:120}}>
        <TouchableOpacity  style={styles.button}  onPress={()=> navigation.replace('Home')}>
        <Text style={styles.buttonText}>Go Back To Home</Text>
      </TouchableOpacity>
      </View>
    </View>
  )
}
const styles=StyleSheet.create({
    container:{
       padding:20,
        flex:1,
       },  
       button:{
        marginTop:50,
        backgroundColor: '#EF4339', // Màu nền của nút
        padding: 10,
        width:320,
        height:50,
        borderRadius: 5,
      },
      buttonText: {
        color: 'white',
        fontSize: 18,
        textAlign: 'center', 
        textAlignVertical:'center',
      }
    })

export default BookingConfirmation;