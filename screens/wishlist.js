
import React,{useState, useLayoutEffect} from 'react';
import { StyleSheet, Text, View, Button
 } from 'react-native';
import Item from '../components/item';
import { Ionicons } from '@expo/vector-icons';
export default function wishlist(props) {
  useLayoutEffect(() => {
    props.navigation.setOptions({
      headerRight: () => (
        <Ionicons name="home" size={20} color="black" />
      ),
      title:props.title
    });
  }, []);
  return (
    <View>
        <Text>{props.route.child}</Text>     
    </View>
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
