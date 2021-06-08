import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View, Button

 } from 'react-native';
 import { createStackNavigator } from '@react-navigation/stack';
import Item from '../components/item';

import me from '../screens/me';


const Stack = createStackNavigator();

export default function meStack(props) {
    
  return (
 
    <Stack.Navigator>
        <Stack.Screen name="ME" component={me}/>
    </Stack.Navigator>

   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
