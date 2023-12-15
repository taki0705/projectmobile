import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Wishlist from './js/Wishlist';
import Profile from './js/Profile';
import ExploreHome from './js/ExploreHome';
import OnBoarding from './js/OnBoarding';
import Login from './js/Login';
import Register from './js/Register';
import BookingDetails from './js/BookingDetails';
import HotelDescription from './js/HotelDescription';
import Reviews from './js/Reviews';
import WriteaReview from './js/WriteaReview';
import ExploreHomeAftersearch from './js/ExploreHomeAftersearch';
import PaymentCheckout from './js/PaymentCheckout';
import BookingConfirmation from './js/BookingConfirmation';
import TopHotels from './js/TopHotels';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function Home() {
  return (
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: '#EF4339',
          tabBarInactiveTintColor: '#A8A8A8',
          tabBarLabelStyle: {
            fontSize: 16,
          },
          tabBarStyle: {
            display: 'flex',
          },
        }}>
        <Tab.Screen
          name="ExploreHome"
          component={ExploreHome}
          options={{
            tabBarLabel: 'Explore',
            tabBarIcon: ({ color }) => (
              <Image style={{ width: 24, height: 24 }} source={require('./assets/explore.png')} />
            ),
          }}
        />
        <Tab.Screen
          name="Wishlist"
          component={Wishlist}
          options={{
            tabBarLabel: 'Wishlist',
            tabBarIcon: ({ color }) => (
              <Image style={{ width: 24, height: 24 }} source={require('./assets/save.png')} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color }) => (
              <Image style={{ width: 24, height: 24 }} source={require('./assets/profile.png')} />
            ),
          }}
        />
      
      </Tab.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="OnBoarding" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="OnBoarding" component={OnBoarding} />
      <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="BookingDetails" component={BookingDetails} />
        <Stack.Screen name="HotelDescription" component={HotelDescription} />
        <Stack.Screen name="Wishlist" component={Wishlist} />
        <Stack.Screen name="Reviews" component={Reviews} />
        <Stack.Screen name="WriteaReview" component={WriteaReview} />
        <Stack.Screen name="ExploreHomeAftersearch" component={ExploreHomeAftersearch} />
        <Stack.Screen name="PaymentCheckout" component={PaymentCheckout} />
        <Stack.Screen name="BookingConfirmation" component={BookingConfirmation} />
        <Stack.Screen name="TopHotels" component={TopHotels}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
