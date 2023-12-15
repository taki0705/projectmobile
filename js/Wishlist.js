import { ImageBackground } from "react-native";
import { FlatList } from "react-native";
import { StyleSheet, Text, TouchableOpacity } from "react-native"; 
import { Image, View } from "react-native";
import { useNavigation } from '@react-navigation/native';

const Wishlist = () => {
  const hotelData2 = [
    { name: "Sheraton Grand", star: "5 Star Hotel", image: require('../assets/TajWestside.png'), price: "$100" },
    { name: "Taj Vista", star: "4 Star Hotel", image: require('../assets/ParkPlaza.png'), price: "$150" },
    { name: "Taj", star: "3 Star Hotel", image: require('../assets/Sheraton.png'), price: "$80" },
  ];
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20, marginTop: 32 }}>Wishlist </Text>

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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
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
});

export default Wishlist;
