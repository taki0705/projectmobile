import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import { ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const TopHotels = () => {
    const hotelData2 = [
        { name: "Sheraton Grand", star: "5 Star Hotel", image: require('../assets/TajWestside.png'), price: "$100" },
        { name: "Taj Vista", star: "4 Star Hotel", image: require('../assets/ParkPlaza.png'), price: "$150" },
        { name: "Taj", star: "3 Star Hotel", image: require('../assets/Sheraton.png'), price: "$80" },
      ];
      const navigation = useNavigation();
  return (
    <View style={styles.container}>
    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
    <TouchableOpacity  onPress={()=> navigation.navigate('ExploreHomeAftersearch')}>
            <Image source={require('../assets/Shapecp.png')} />
            </TouchableOpacity>
      <Text  style={{fontSize:20,marginRight:20}}>Top Hotels</Text>
      <Image style={{marginRight:10}} source={require('../assets/search.png')} />
      </View>
      <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:30}}>
      <View style={{flexDirection:'row',alignItems:'center',padding:10}}>
            <Image  source={require('../assets/local.png')} />
            <Text style={{fontSize:16,marginLeft:5}}>Bangalore</Text>
            </View>
        <View style={{flexDirection:'row',alignItems:'center',padding:10}}>
            <Image  source={require('../assets/Filter.png')} />
            <Text style={{fontSize:16}}>Filter By</Text>
            </View>     
            </View>
            <FlatList
        data={hotelData2}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.hotelItem}>
           <TouchableOpacity onPress={() => navigation.navigate('HotelDescription')}>
              <ImageBackground source={item.image} style={styles.hotelImage}>
                <View style={{ marginTop: 100, alignItems: 'center', flexDirection: 'row', flex: 1 }}>
                  <View style={{ width: 210, marginLeft: 10 }}>
                    <Text style={styles.hotelName}>{item.name}</Text>
                    <Text style={styles.hotelstar}>{item.star}</Text>
                  </View>
                  <View style={{ marginLeft: 30 }}>
                    <Text style={styles.hotelPrice}>{item.price}</Text>
                    <Text style={{ color: '#D3D3D3' }}>Per Night</Text>
                  </View>
                </View>
              </ImageBackground>
              </TouchableOpacity>
        
            <View style={{ flexDirection: 'row', margin: 15, justifyContent: 'space-between' }}>
              <View style={{ flexDirection: 'row' }}>
                <Image source={require('../assets/bookmark.png')} />
                <Text style={{ color: '#EF4339', fontSize: 14 }}> Save </Text>
              </View>
              <View style={{ borderWidth: 1, width: 87, height: 24, borderRadius: 4, borderColor: '#EF4339', alignItems: 'center' }}>
                <TouchableOpacity>
                  <Text style={{ color: '#EF4339', fontSize: 14 }}>Book Now</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      />

    </View>
  )
}
const styles=StyleSheet.create({
    container:{
        paddingTop:20,
        marginLeft:10,
        flex:1,
       },
       hotelItem: {
        flex: 1,
        justifyContent: 'center',
        margin: 10,
        height:230,
        overflow: 'hidden',
        borderWidth:0.01,
        shadowColor: "#000",
        shadowOffset: {
          width: 1,
          height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 9.51,
        elevation: 2,
      },
      hotelName: {
        fontSize: 24,
        color: 'white',
        padding: 5,
      },
      hotelImage: {
        width: 345,
        height: 172,
      },
      hotelstar: {
        fontSize: 14,
        color: '#D3D3D3',
      },
      hotelPrice: {
        fontSize: 24,
        color: '#D3D3D3',
      },
    })
export default TopHotels