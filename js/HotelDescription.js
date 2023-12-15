import { useState } from "react";
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Image } from "react-native";
import { useNavigation } from '@react-navigation/native';

const HotelDescription = () => {

    const navigation = useNavigation();
    const [isExpanded, setIsExpanded] = useState(false);

    const completeDescription = 'Nestled in the heart of Bengaluru, the Park Plaza provides an upscale home base with easy access to Bengaluru\'s Central Business District. Our stylish hotel is conveniently located within a 5km radius of business and entertainment hot spots and approx. 40-minute drive from Kempegowda International Airport (BLR).';

    const description = isExpanded ? completeDescription : completeDescription.substring(0, 150);

    const toggleDescription = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <View style={styles.container}>
            <ImageBackground style={styles.bitmap} source={require('../assets/Bitmap.png')}>
              <TouchableOpacity  onPress={()=> navigation.navigate('Home')}>
                <Image style={{ margin: 20 }} source={require('../assets/Shapecp.png')} />
                </TouchableOpacity>
                <View style={{ backgroundColor: '#EF4339', width: 124, height: 54, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginLeft: 270, marginTop: 141 }}>
                    <Text style={{ color: 'white', fontSize: 20 }}>Gallery</Text>
                    <Image style={{ marginTop: 3, marginLeft: 5 }} source={require('../assets/forward_icon.png')} />
                </View>
            </ImageBackground>
            <View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ margin: 20, fontSize: 20 }}>Park Plaza</Text>
                    <Text style={{ color: '#EF4339', fontSize: 12 }}>Most viewed</Text>
                </View>
                <View style={{ padding: 10}}>
                    <Text> Marathalli, Bangalore - Show in Map </Text>
                    <Text>{description}</Text>
                    {completeDescription.length > 150 && (
                        <TouchableOpacity onPress={toggleDescription}>
                            <Text style={{ color: '#EF4339', fontSize: 14 }}>
                                {isExpanded ? 'Read less' : 'Read more'}
                            </Text>
                        </TouchableOpacity>
                    )}
                </View>
                <View style={{flexDirection:'row'}} >

                  <View style={{flexDirection:'row',alignItems:'center',marginLeft:20}}>
                <Image source={require('../assets/mail.png')} />
                <Text style={{fontSize:16}}> parkplaza@gmail.com</Text>
                </View>

                <View style={{flexDirection:'row',alignItems:'center',marginLeft:80}}>
                <Image source={require('../assets/phone.png')} />
                <Text style={{fontSize:16}}>+84 969053040</Text>
                </View>

                </View>

                <View style={{flexDirection:'row',marginTop:20 ,marginLeft:20,gap:100,alignItems:'center'}}>
                  <View>
                  <Text style={{fontSize:14}}>Price</Text>
                  <Text style={{fontSize:14}}>100$</Text>
                  </View>

                  <View>
                  <Text style={{fontSize:14}}>Ratings</Text>
                  <View style={{flexDirection:'row'}}>
                  <Image source={require('../assets/Star.png')}/>
                  <Image source={require('../assets/Star.png')}/>
                  <Image source={require('../assets/Star.png')}/>
                  <Image source={require('../assets/Star.png')}/>
                  <Image source={require('../assets/Star.png')}/>
                  </View>
                  </View>

                  <View>
                  <Text style={{fontSize:14}}>Reviews</Text>
                  <TouchableOpacity onPress={()=> navigation.navigate('Reviews')}>
                  <View style={{flexDirection:'row'}}>
                  <Image source={require('../assets/Oval.png')}/>
                  <Image source={require('../assets/Oval2.png')}/>
                  <Image source={require('../assets/Oval3.png')}/>
                  <Image source={require('../assets/Oval4.png')}/>
                
                  </View>
                  </TouchableOpacity>
                  </View>
                </View>
                <Text style={{margin:20}}>Amenities</Text>
               <View style={{flexDirection:'row'}}>
                <View style={styles.amenitiesall}>
                <View style={styles.amenities}>
                <Image source={require('../assets/wifi.png')}/>
                </View>
                <Text style={styles.txt}>Free wifi</Text>
                </View> 

                <View style={styles.amenitiesall}>
                <View style={styles.amenities}>
                <Image source={require('../assets/Break.png')}/>
                </View>
                <Text style={styles.txt}>Breafast</Text>
                </View> 

                <View style={styles.amenitiesall}>
                <View style={styles.amenities}>
                <Image source={require('../assets/Pet.png')}/>
                </View>
                <Text style={styles.txt}>Pet</Text>
                </View> 

                <View style={styles.amenitiesall} >
                <View style={styles.amenities}>
                <Image source={require('../assets/Bar.png')}/>
                </View>
                <Text style={styles.txt}>Bar</Text>
                </View> 

                <View style={styles.amenitiesall}>
                <View style={styles.amenities}>
                <Image source={require('../assets/Pool.png')}/>
                </View>
                <Text style={styles.txt}>Pool</Text>
                </View> 

                <View style={styles.amenitiesall}>
                <View style={styles.amenities}>
                <Image source={require('../assets/More.png')}/>
                </View>
                <Text style={styles.txt}>More</Text>
                </View> 
                </View>
            </View>
            <View style={{flexDirection:'row',alignItems:'center'}}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('BookingDetails')}>
                <Text style={styles.buttonText}>Book Now</Text>
            </TouchableOpacity>
            <View style={{
             marginTop:40,
             marginLeft:30,
             width:45,
             height:40,
             borderWidth:1,
             borderColor:'#EF4339',
             alignItems:'center',
             justifyContent:'center',
             borderRadius:4,

            }}>
            <Image source={require('../assets/savenocolor.png')}/>
           </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    button: {
        marginTop: 45,
        marginLeft:20,
        backgroundColor: '#EF4339',
        padding: 10,
        width: 280,
        height: 50,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        textAlign: 'center',
        textAlignVertical: 'center',
    },
    bitmap: {
        width: '100%',
        height: 267,
    },
    txt:{
      fontSize:12,
      alignItems:'center',
      justifyContent:'center',
    },
   amenitiesall:{
     paddingTop:8,
     paddingLeft:20,
     marginLeft:5,
   },
    amenities:{
    alignItems:'center',
    justifyContent:'center',
     width:30,
     height:30,
     shadowColor: "#000",
     shadowOffset: {
       width: 0,
       height: 2,
     },
     shadowOpacity: 0.25,
     shadowRadius: 2.5,
     elevation: 1,
    }
});

export default HotelDescription;
