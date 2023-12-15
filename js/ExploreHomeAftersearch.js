import { useState } from "react";
import {  StyleSheet, Text, FlatList, TouchableOpacity } from "react-native";
import { Image, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
const ExploreHomeAftersearch=()=>{
     const navigation=useNavigation();
     const hotelData = [
        { name: "Sheraton Grand", image:require('../assets/Sheraton.png'),price: "$100" },
        { name: "Taj Vista", image:require('../assets/TajVista.png'),price: "$150" },
        { name: "Taj", image:require('../assets/Sheraton.png') ,price: "$80" },
       
      ];
    return(
     <View style={styles.container}>
        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
        <TouchableOpacity  onPress={()=> navigation.replace('Home')}>
                <Image source={require('../assets/Shapecp.png')} />
                </TouchableOpacity>
          <Text  style={{fontSize:20,marginRight:20}}>Explore</Text>
          <Image style={{marginRight:10}} source={require('../assets/search.png')} />
          </View>
          <View style={{flexDirection:'row',alignItems:'center'}}>
                <Image  source={require('../assets/local.png')} />
                <Text style={{fontSize:16,marginLeft:5}}>Bangalore</Text>
                </View>
                <View style={styles.deals}>
                <Image style={{marginTop:20}} source={require('../assets/click.png')} />
                <View style={{width:200,height:100,marginLeft:20,marginTop:10}}>
                    <Text style={{fontSize:20,color:'white'}}>We have deals for your favorite and relaxing stay. </Text>
                </View>
                <View style={styles.view}>
                    <Text style={{alignItems:'center',justifyContent:'center',color:'white'}}> View</Text>
                    <Image style={{}} source={require('../assets/view.png')} />
                </View>
                </View>
                <View style={{marginTop:30}}>

        <View style={{flexDirection:'row',alignItems:'cenger'}}>
       
       <Text style={{marginRight:210,color:'#333333',fontSize:18}}>Top Hotels</Text>
       <TouchableOpacity onPress={()=>navigation.navigate('TopHotels')}>
       <Text style={{color:'#EF4339',fontSize:16}}>View All</Text>
       </TouchableOpacity>
       </View>
        <FlatList
        data={hotelData}
        horizontal
        showsHorizontalScrollIndicator={false}
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
        
        <View style={{flexDirection:'row',alignItems:'cenger',marginTop:20}}>
       
       <Text style={{marginRight:210,color:'#333333',fontSize:18 }}>Top Deals</Text>
       <TouchableOpacity>
       <Text style={{color:'#EF4339',fontSize:16}}>View All</Text>
       </TouchableOpacity>
       </View>
        <FlatList
        data={hotelData}
        horizontal
        showsHorizontalScrollIndicator={false}
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
    );
};
const styles=StyleSheet.create({
    container:{
        paddingTop:20,
        marginLeft:10,
        flex:1,
       },
       deals:{
        marginLeft:10,
        marginTop:20,
        width:340,
        height:111,
        backgroundColor:'#EF4339',
        borderRadius:10,
        flexDirection:'row'
       },
       view:{
        flexDirection:'row',
        alignItems:'center',
        marginTop:70,
        width:200,
        height:40,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
       },
       hotelItem: {
        marginTop:15,
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
export default ExploreHomeAftersearch;