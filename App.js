import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Header} from 'react-native-elements';
 //import Ionicons from 'react-native-vector-icons/Ionicons';
 //tab navigator
import { Ionicons } from '@expo/vector-icons';
 //screen
import * as SecureStore from 'expo-secure-store';
import homeStack from './stackNavigation/homeStack.js';
import wishlistStack from './stackNavigation/wishlistStack.js';
import meStack from './stackNavigation/meStack.js';
import shopStack from './stackNavigation/shopStack.js';
import cartStack from './stackNavigation/cartStack.js';
import secure from './screens/signInScreen';
//  const AppContainer = NavigationContainer(appNavigator);
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();




export default function App() {
 
  return (
    <NavigationContainer >
      <Header
          leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: 'MY', style: { color: '#fff' } }}
          rightComponent={{ icon: 'home', color: '#fff' }}
      />
      <Tab.Navigator  screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'shop') {
              iconName = focused ? 'search' : 'search-outline';
            } else if (route.name === 'wishlist') {
              iconName = focused ? 'heart' : 'heart-outline';
            } else if (route.name === 'cart') {
              iconName = focused ? 'cart' : 'cart-outline';
            } else if (route.name === 'me') {
              iconName = focused ? 'person-circle' : 'person-circle-outline';
            }


            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen name="home" component={homeStack}/>
        <Tab.Screen name="shop" component={shopStack}/>
        <Tab.Screen name="wishlist" component={wishlistStack}/>
        <Tab.Screen name="cart" component={cartStack}/> 
        <Tab.Screen name="me" component={meStack}/>
        <Tab.Screen name="secure" component={secure}/>
 
      </Tab.Navigator>
       
        
    </NavigationContainer>
 

   
   
  );
}

const styles = StyleSheet.create({
  header:{
    flex: 1, alignItems: 'center', justifyContent: 'center'
  }
  ,
  container: {
    flex: 1,
    alignItems: "stretch",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
