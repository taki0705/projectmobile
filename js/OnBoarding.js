import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import {
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { useNavigation } from '@react-navigation/native';
const OnBoarding = () => {
  const navigation=useNavigation();
  const [isLastSlide, setIsLastSlide] = useState(false);
  const handleSkip = () => {
    navigation.replace('Register')
  };
  const handleGetStarted = () => {
    navigation.replace('Register')
  };
  const RenderItem = ({ item, index }) => {
    return (
      <View
        style={{
          flex: 1,
          padding:50,
          backgroundColor: item.backgroundColor,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
       
        <Image style={styles.introImageStyle} source={item.image} />
        <Text style={styles.introTitleStyle}>{item.title}</Text>
        <Text style={styles.introTextStyle}>{item.text}</Text>
        
        {index === slides.length - 1 && (
          <TouchableOpacity
            style={styles.getStartedButton}
            onPress={handleGetStarted}>
            <Text style={styles.getStartedButtonText}>Get Started</Text>
          </TouchableOpacity>)}
      </View>
    );
  };
  return (
    <View style={styles.container} >
    <TouchableOpacity style={styles.skipButton} onPress={handleSkip}>
    <Text style={styles.skipText}>Skip</Text>
     </TouchableOpacity>
        <AppIntroSlider
          data={slides}
          renderItem={RenderItem}  
          onSlideChange={(index) => setIsLastSlide(index === slides.length - 1)}
         renderNextButton={() =>
          !isLastSlide && (
            <Text style={{ color: 'black',fontSize:20,marginTop:20}}>Next</Text>
          )
        }/>
          </View>
      
      )};

export default OnBoarding ;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  titleStyle: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom:100,
    color:'EF4339'
  },
  paragraphStyle: {
    padding: 10,
    textAlign: 'center',
    fontSize: 16,
  },
  introImageStyle: {
    width: 230,
    height: 230,
   
  },
  introTextStyle: {
    fontSize: 18,
    color:'#333333',
    textAlign: 'center',
    paddingVertical: 30,
  },
  introTitleStyle: {
    fontSize: 20,
    color: 'red',
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: 'bold',
    width:300,
  },
  skipButton: {
   marginTop:20,
   marginLeft:310,
  },
  skipText: {
    fontSize: 22,
    color: 'black', 
  },
  getStartedButton: {
    backgroundColor: '#EF4339', 
    padding: 10,
    borderRadius: 5,
  },
  getStartedButtonText: {
    color: 'white',
    fontSize: 18,
  },
});

const slides = [
  {
    key: 's1',
    text: 'Browse best hotels from 40,000+ database that fits your unique needs',
    title: 'Search and save your preference',
    image: require('../assets/Illustration.png'),

  },
  {
    key: 's2',
    title: 'Order Food',
    text: 'Hungry? Order food in just a few clicks and we’ll take care of you.',
    image: require('../assets/Illustration2.png'),
    backgroundColor: '#FFFFFF',
  },
  {
    key: 's3',
    title: 'Make Reseravations',
    text: 'Book a table in advance to avoid waiting in line',
    image: require('../assets/Illustration3.png'),
    backgroundColor: '#FFFFFF',
  },
];
