import { useDeferredValue } from "react"
import { TouchableOpacity } from "react-native";
import { ScrollView } from "react-native";
import { TextInput } from "react-native";
import { Image, StyleSheet, Text, View } from "react-native"
import { FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
const ExploreHome=()=>{
  const navigation=useNavigation();
    const hotelData = [
        { name: "Sheraton Grand", image:require('../assets/Sheraton.png'),price: "$100" },
        { name: "Taj Vista", image:require('../assets/TajVista.png'),price: "$150" },
        { name: "Taj", image:require('../assets/Sheraton.png') ,price: "$80" },
       
      ];
      
    return(
        <ScrollView>
        <View style={styles.container}>
           
            <Text  style={{fontSize:20,marginTop:32}}>Explore </Text>
            <View style={styles.menu}>
        <View style={styles.input}>
        <Image source={require('../assets/Icon3.png')}/>
       <TextInput placeholder="Adress"></TextInput>
        </View>
        <View style={styles.input}>
        <Image source={require('../assets/Icon4.png')}/>
       <TextInput placeholder="Arrival time"></TextInput>
        </View>
        <View style={styles.input}>
        <Image source={require('../assets/Icon4.png')}/>
       <TextInput placeholder="Time to leave"></TextInput>
        </View>
        <View style={styles.input}>
        <Image source={require('../assets/Icon5.png')}/>
       <TextInput placeholder="People"></TextInput>
        </View>
        </View>
        <View style={{flexDirection:'row',alignItems:'center'}}>
        <TouchableOpacity  style={styles.button} onPress={()=> navigation.navigate('ExploreHomeAftersearch')}>
        <Text style={styles.buttonText}>Search</Text>
      </TouchableOpacity>
         <View style={styles.adress} >
         <Image source={require('../assets/Icon3.png')}/>
         </View>
        </View>
        <View style={{flexDirection:'row',alignItems:'cenger'}}>
       
        <Text style={{marginRight:210,marginTop:10,color:'#333333',fontSize:18}}>Top Hotels</Text>
        <TouchableOpacity>
        <Text style={{color:'#EF4339',fontSize:16}}>View All</Text>
        </TouchableOpacity>
        </View>
       <View style={{marginTop:30}}>

        <FlatList
        data={hotelData}
        horizontal
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.hotelall}>
        <View style={styles.hotelItem}>
       <Image source={item.image} style={styles.hotelImage} />
        <View>
        <Text style={styles.hotelName}>{item.name}</Text>
        <Text style={styles.hotelPrice}>{item.price}</Text>
        </View>
    </View>
    </View>
  )}
/>
</View>
        </View>
        </ScrollView>
    );
};
export default ExploreHome;

const styles=StyleSheet.create({
    container:{
        flex:1,    
        alignItems:'center',
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
       marginTop:20,
       },
       button: {
        marginTop:25,
        backgroundColor: '#EF4339', 
        padding:10,
        width:280,
        height:50,
        borderRadius: 5,
        marginRight:10,
      },
      buttonText: {
        color: 'white',
        fontSize: 18,
        textAlign: 'center', 
        textAlignVertical:'center',
      },
      adress:{
        marginLeft:10,
        borderRadius:10,
        marginTop:24,
        borderColor:'#EF4339',
        borderWidth:1,
        width:50,
        height:50,
        alignItems:'center',
        justifyContent:'center'
      },
      hotelall:{
      },
      hotelItem: {
        marginHorizontal: 10,
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
      hotelImage: { 
        width:200,
        height:130,
      },
      hotelName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft:10,
        marginTop:10,
      },
      hotelPrice: {
        fontSize: 16,
        color: '#EF4339', 
        marginLeft:10,
      },
    
})