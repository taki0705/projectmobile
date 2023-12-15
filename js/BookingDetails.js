import { useState } from "react";
import { Modal } from "react-native";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";
import {  View } from "react-native";
import DatePicker from 'react-native-modern-datepicker';
import { useNavigation } from "@react-navigation/native";
const BookingDetails=({navigation})=>{
  const navigation1=useNavigation();
   const[open, setOpen]= useState(false);
   const[Cancel, setCancel]= useState(false);
   const[people,setPeople]= useState(false);
   const [date, setDate] = useState('');
   const [room,setRoom]=useState(false);
   const [quantity, setQuantity] = useState(0);
   const [quantity1, setQuantity1] = useState(0);
   const [quantity2, setQuantity2] = useState(0);
   const [quantity3, setQuantity3] = useState(0);
   const [quantity4, setQuantity4] = useState(0);
   const [quantity5, setQuantity5] = useState(0);
   const [quantity6, setQuantity6] = useState(0);
   const [quantity7, setQuantity7] = useState(0);
 //0
  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };
  //1
  const incrementQuantity1 = () => {
    setQuantity1(quantity1 + 1);
  };

  const decrementQuantity1 = () => {
    if (quantity1 > 0) {
      setQuantity1(quantity1 - 1);
    }
  };
 //2
 const incrementQuantity2 = () => {
  setQuantity2(quantity2 + 1);
};

const decrementQuantity2 = () => {
  if (quantity2 > 0) {
    setQuantity2(quantity2 - 1);
  }
};
//3
const incrementQuantity3 = () => {
  setQuantity3(quantity3 + 1);
};

const decrementQuantity3 = () => {
  if (quantity3 > 0) {
    setQuantity3(quantity3 - 1);
  }
};
//4
const incrementQuantity4 = () => {
  setQuantity4(quantity4 + 1);
};

const decrementQuantity4 = () => {
  if (quantity4 > 0) {
    setQuantity4(quantity4 - 1);
  }
};
//5
const incrementQuantity5 = () => {
  setQuantity5(quantity5 + 1);
};

const decrementQuantity5 = () => {
  if (quantity5 > 0) {
    setQuantity5(quantity5 - 1);
  }
};
//6
const incrementQuantity6 = () => {
  setQuantity6(quantity6 + 1);
};

const decrementQuantity6 = () => {
  if (quantity6 > 0) {
    setQuantity6(quantity6 - 1);
  }
};
//4
const incrementQuantity7 = () => {
  setQuantity7(quantity7 + 1);
};

const decrementQuantity7 = () => {
  if (quantity7 > 0) {
    setQuantity7(quantity7 - 1);
  }
};
   const handleDateChange = (date) => {
    setDate(date);
  };
  function handonCancel(){
    setOpen(false);
    setPeople(false);
    setRoom(false);
  }
   function handeonPress (){
    setOpen(true);
   }
   function handeonPeople (){
    setPeople(true);
   }
   function handeonRoom (){
    setRoom(true);
   }
   const handleCheckInDone= (date)=> {
    setDate(date);
    setOpen(false);

  }
  const getDate = () => {
    let tempDate = date.toString().split(' ');
    return date !== ''
      ? `${tempDate[0]} ${tempDate[1]} ${tempDate[2]} ${tempDate[3]}`
      : '';
  };
    return(
     <View style={styles.container}>
         <View style={{flexDirection:'row',alignItems:'center',marginTop:15}}>
          <TouchableOpacity onPress={()=> navigation.replace('HotelDescription')}>
         <Image  source={require('../assets/Shapecp.png')}/>
         </TouchableOpacity>
          <Text  style={{fontSize:22,marginLeft:110}}>Booking</Text>
          </View>
           <Text style={{marginTop:50,fontSize:20}}>Booking Details</Text>
           <View style={styles.input}>
        <Image  source={require('../assets/name.png')}/>
       <TextInput placeholder="Name"></TextInput>
        </View>
        <View style={styles.input}>
        <Image  source={require('../assets/ContactNumber.png')}/>
       <TextInput placeholder="Contact Number"></TextInput>
        </View>
        <TouchableOpacity onPress={handeonPress}>
        <View style={styles.input}>
        <Image  source={require('../assets/check.png')}/>
       
      <TextInput 
        placeholder="Check In"
        value={getDate()}
        editable={false} 
       ></TextInput>
        </View>  
        </TouchableOpacity>
        <TouchableOpacity onPress={handeonPress}>
        <View style={styles.input}>
        <Image  source={require('../assets/check.png')}/>
       <TextInput placeholder="Check Out"
        value={getDate()}
        editable={false} />
       </View>
       </TouchableOpacity>
       <TouchableOpacity onPress={handeonPeople}>
       <View style={styles.input}>
        <Image  source={require('../assets/People.png')}/>
       <TextInput placeholder="People"
        editable={false} 
        ></TextInput>
        </View> 
        </TouchableOpacity>
        <TouchableOpacity onPress={handeonRoom}>
        <View style={styles.input}>
        <Image  source={require('../assets/Rooms.png')}/>
       <TextInput placeholder="Roomns"
        editable={false} ></TextInput>
        </View>
        </TouchableOpacity>
        <View style={{alignItems:'center',marginTop:30}}>
        <TouchableOpacity  style={styles.button}  onPress={()=> navigation1.navigate('PaymentCheckout')}>
        <Text style={styles.buttonText}>Book Now</Text>
      </TouchableOpacity>
      </View>
      <Modal
      animationType='slide'
      transparent={true}
      visible={open}
      >
      <View  style={styles.centeredView}>
        <View  style={styles.modalView}>
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
          <TouchableOpacity onPress={handonCancel}>
          <Text style={{fontSize:18,margin:10,}}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleCheckInDone}>
          <Text style={{fontSize:18,margin:10,color:'#EF4339'}}>Done</Text>
          </TouchableOpacity>
          </View>
        <DatePicker
          onValueChange={handleDateChange}
      ></DatePicker>
        </View>
      </View>

      </Modal>

      <Modal
      animationType='slide'
      transparent={true}
      visible={people}
      >
      <View  style={styles.centeredView2}>
        <View  style={styles.modalView2}>
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
          <TouchableOpacity onPress={handonCancel}>
          <Text style={{fontSize:18,margin:15,}}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity >
          <Text style={{fontSize:18,margin:15,color:'#EF4339'}}>Done</Text>
          </TouchableOpacity>
          </View>
          <View style={{borderWidth:1,width:'87%',borderColor:'#E0E0E1',marginLeft:30}}></View>
          <View style={{marginTop:10,flexDirection:'row',justifyContent:'space-between'}}>
            <View style={{marginLeft:15}}>
              <Text style={{fontSize:18}}>Adults</Text>
              <Text style={{color:'#808080', fontSize:13}}>16+ years</Text>
              </View>
              <View style={styles.quantityContainer}>
           <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={decrementQuantity} style={styles.button1}>
              <Text style={styles.buttonText2}>-</Text>
            </TouchableOpacity>
            <Text style={styles.quantityText}>{quantity}</Text>
            <TouchableOpacity onPress={incrementQuantity} style={styles.button2}>
              <Text style={styles.buttonText2}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
          </View>
          <View style={{borderWidth:1,width:'87%',borderColor:'#E0E0E1',marginLeft:30}}></View>
          <View style={{marginTop:10,flexDirection:'row',justifyContent:'space-between'}}>
            <View style={{marginLeft:15}}>
              <Text style={{fontSize:18}}>Teens</Text>
              <Text style={{color:'#808080', fontSize:13}}>12-15 years</Text>
              </View>
              <View style={styles.quantityContainer}>
           <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={decrementQuantity1} style={styles.button1}>
              <Text style={styles.buttonText2}>-</Text>
            </TouchableOpacity>
            <Text style={styles.quantityText}>{quantity1}</Text>
            <TouchableOpacity onPress={incrementQuantity1} style={styles.button2}>
              <Text style={styles.buttonText2}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
          </View>
          <View style={{borderWidth:1,width:'87%',borderColor:'#E0E0E1',marginLeft:30}}></View>
          <View style={{marginTop:10,flexDirection:'row',justifyContent:'space-between'}}>
            <View style={{marginLeft:15}}>
              <Text style={{fontSize:18}}>Children</Text>
              <Text style={{color:'#808080', fontSize:13}}>2-11 years</Text>
              </View>
              <View style={styles.quantityContainer}>
           <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={decrementQuantity2} style={styles.button1}>
              <Text style={styles.buttonText2}>-</Text>
            </TouchableOpacity>
            <Text style={styles.quantityText}>{quantity2}</Text>
            <TouchableOpacity onPress={incrementQuantity2} style={styles.button2}>
              <Text style={styles.buttonText2}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
          </View>
          <View style={{borderWidth:1,width:'87%',borderColor:'#E0E0E1',marginLeft:30}}></View>
          <View style={{marginTop:10,flexDirection:'row',justifyContent:'space-between'}}>
            <View style={{marginLeft:15}}>
              <Text style={{fontSize:18}}>Infants</Text>
              <Text style={{color:'#808080', fontSize:13}}>Under 2 years</Text>
              </View>
              <View style={styles.quantityContainer}>
           <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={decrementQuantity3} style={styles.button1}>
              <Text style={styles.buttonText2}>-</Text>
            </TouchableOpacity>
            <Text style={styles.quantityText}>{quantity3}</Text>
            <TouchableOpacity onPress={incrementQuantity3} style={styles.button2}>
              <Text style={styles.buttonText2}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
          </View>
        </View>
       
      </View>

      </Modal>
      <Modal
      animationType='slide'
      transparent={true}
      visible={room}
      >
      <View  style={styles.centeredView2}>
        <View  style={styles.modalView2}>
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
          <TouchableOpacity onPress={handonCancel}>
          <Text style={{fontSize:18,margin:15,}}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity >
          <Text style={{fontSize:18,margin:15,color:'#EF4339'}}>Done</Text>
          </TouchableOpacity>
          </View>
          <View style={{borderWidth:1,width:'87%',borderColor:'#E0E0E1',marginLeft:30}}></View>
          
          <View style={{marginTop:10,flexDirection:'row',justifyContent:'space-between'}}>
            <View style={{marginLeft:15}}>
              <Text style={{fontSize:18}}>Single Deluxe Room</Text>
              <Text style={{color:'#808080', fontSize:13}}>Single Bed + Free Breakfast</Text>
              </View>
              <View style={styles.quantityContainer}>
           <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={decrementQuantity4} style={styles.button1}>
              <Text style={styles.buttonText2}>-</Text>
            </TouchableOpacity>
            <Text style={styles.quantityText}>{quantity4}</Text>
            <TouchableOpacity onPress={incrementQuantity4} style={styles.button2}>
              <Text style={styles.buttonText2}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
          </View>
          <View style={{borderWidth:1,width:'87%',borderColor:'#E0E0E1',marginLeft:30}}></View>
          <View style={{marginTop:10,flexDirection:'row',justifyContent:'space-between'}}>
            <View style={{marginLeft:15}}>
              <Text style={{fontSize:18}}>Double Deluxe Room</Text>
              <Text style={{color:'#808080', fontSize:13}}>Double Bed + Free Breakfast</Text>
              </View>
              <View style={styles.quantityContainer}>
           <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={decrementQuantity5} style={styles.button1}>
              <Text style={styles.buttonText2}>-</Text>
            </TouchableOpacity>
            <Text style={styles.quantityText}>{quantity5}</Text>
            <TouchableOpacity onPress={incrementQuantity5} style={styles.button2}>
              <Text style={styles.buttonText2}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
          </View>
          <View style={{borderWidth:1,width:'87%',borderColor:'#E0E0E1',marginLeft:30}}></View>
          <View style={{marginTop:10,flexDirection:'row',justifyContent:'space-between'}}>
            <View style={{marginLeft:15}}>
              <Text style={{fontSize:18}}>Extra Bed</Text>
              <Text style={{color:'#808080', fontSize:13}}>Extra Matress for children</Text>
              </View>
              <View style={styles.quantityContainer}>
           <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={decrementQuantity6} style={styles.button1}>
              <Text style={styles.buttonText2}>-</Text>
            </TouchableOpacity>
            <Text style={styles.quantityText}>{quantity6}</Text>
            <TouchableOpacity onPress={incrementQuantity6} style={styles.button2}>
              <Text style={styles.buttonText2}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
          </View>
          <View style={{borderWidth:1,width:'87%',borderColor:'#E0E0E1',marginLeft:30}}></View>
          <View style={{marginTop:10,flexDirection:'row',justifyContent:'space-between'}}>
            <View style={{marginLeft:15}}>
              <Text style={{fontSize:18}}>Premium Suite</Text>
              <Text style={{color:'#808080', fontSize:13}}>Double Bed + Free Meals</Text>
              </View>
              <View style={styles.quantityContainer}>
           <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={decrementQuantity7} style={styles.button1}>
              <Text style={styles.buttonText2}>-</Text>
            </TouchableOpacity>
            <Text style={styles.quantityText}>{quantity7}</Text>
            <TouchableOpacity onPress={incrementQuantity7} style={styles.button2}>
              <Text style={styles.buttonText2}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
          </View>
        </View>
       
      </View>

      </Modal>
        </View>
    );
};
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
      },
      input:{
        borderWidth:2,
        borderColor:'#D3D3D3',
        width:340,
        height:60,
        padding:15,
        marginTop:20,
        gap:10,
        alignItems:'center',
        flexDirection:'row',
       },
       centeredView:{
        flex:1,
        justifyContent:'center',
        alignContent:'center',
        marginTop:400,
       },
       modalView:{
        width:'100%',
        backgroundColor:'white',
        borderRadius:20,
        alignContent:'center',
        shadowColor: "#000",
        shadowOffset: {
          width: 1,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius:4,
        elevation: 5, 
       },
       centeredView2:{
        flex:1,
        justifyContent:'center',
        alignContent:'center',
        marginTop:470,
       },
       modalView2:{
        width:'100%',
        backgroundColor:'white',
        borderRadius:20,
        alignContent:'center',
        shadowColor: "#000",
        shadowOffset: {
          width: 1,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius:4,
        elevation: 5, 
       },
       quantityText: {
        fontSize: 18,
        padding:5,
      },
      buttonContainer: {
        flexDirection: "row",
      },
      button1: {
        width: 30,
        height: 30,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 999,
        marginHorizontal: 12,
        backgroundColor:'#E0E0E1',
      
      },
      button2: {
        width: 30,
        height: 30,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
        marginHorizontal: 12,
        borderRadius: 999,
        backgroundColor:'#EF4339',
      },
      buttonText2: {
        fontSize: 24,
          color:'white'
      },


})
export default BookingDetails;