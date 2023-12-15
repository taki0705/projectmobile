import { View, Text ,StyleSheet, Image} from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
const PaymentCheckout = ({navigation}) => {
  const navigation1=useNavigation();
  return (
    <View style={styles.container}>
         <View style={{flexDirection:'row',alignItems:'center',marginTop:10}}>
          <TouchableOpacity onPress={()=> navigation.replace('BookingDetails')}>
         <Image  source={require('../assets/Shapecp.png')}/>
         </TouchableOpacity>
          <Text  style={{fontSize:22,marginLeft:60}}>Payment Option</Text>
          </View>
          <Text style={{textAlign:'center',fontSize:18,marginTop:20}}>Amount to be paid</Text>
          <Text style={{textAlign:'center',fontSize:42,marginTop:20}}>$100.00</Text>
          <Text style={{marginLeft:10,fontSize:18}}>Choose a payment method</Text>
          <View>
            <TouchableOpacity onPress={()=> navigation1.navigate('BookingConfirmation')}>
          <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20,paddingTop:20,alignItems:'center'}}>
            <View style={{flexDirection:'row',alignItems:'center'}}>
              <Image  source={require('../assets/googlepay.png')}/>
             <Text style={{color:'#333333',fontSize:18,marginLeft:20}}>Google Pay</Text>
             </View>
             <Image source={require('../assets/Shape.png')}/>
          </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> navigation1.navigate('BookingConfirmation')}>
          <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20,paddingTop:20,alignItems:'center'}}>
            <View style={{flexDirection:'row',alignItems:'center'}}>
              <Image style={{marginLeft:10}} source={require('../assets/visa.png')}/>
             <Text style={{color:'#333333',fontSize:18,marginLeft:40}}>Visa</Text>
             </View>
             <Image source={require('../assets/Shape.png')}/>
          </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> navigation1.navigate('BookingConfirmation')}>
          <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20,paddingTop:20,alignItems:'center'}}>
            <View style={{flexDirection:'row',alignItems:'center'}}>
              <Image style={{marginLeft:8}}  source={require('../assets/master.png')}/>
             <Text style={{color:'#333333',fontSize:18,marginLeft:10}}>Master Card</Text>
             </View>
             <Image source={require('../assets/Shape.png')}/>
          </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> navigation1.navigate('BookingConfirmation')}>
          <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20,paddingTop:20,alignItems:'center'}}>
            <View style={{flexDirection:'row',alignItems:'center'}}>
              <Image style={{marginLeft:15}}  source={require('../assets/debit.png')}/>
             <Text style={{color:'#333333',fontSize:18,marginLeft:20}}>Debit Card</Text>
             </View>
             <Image source={require('../assets/Shape.png')}/>
          </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> navigation1.navigate('BookingConfirmation')}>
          <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20,paddingTop:20,alignItems:'center'}}>
            <View style={{flexDirection:'row',alignItems:'center'}}>
              <Image style={{marginLeft:12}}  source={require('../assets/paytm.png')}/>
             <Text style={{color:'#333333',fontSize:18,marginLeft:20}}>Paytm</Text>
             </View>
             <Image source={require('../assets/Shape.png')}/>
          </View>
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
    })

export default PaymentCheckout;