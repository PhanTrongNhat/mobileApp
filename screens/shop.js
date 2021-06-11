
import React,{useState, useLayoutEffect, useEffect} from 'react';
import { StyleSheet, Text, View, Button
 } from 'react-native';
import Item from '../components/item';
import { Ionicons } from '@expo/vector-icons';
import {useDispatch, useSelector} from 'react-redux'
import {} from '../redux/cart';

export default function shop(props) {
   const length= useSelector(state => state.cart.items.length);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   length1 = dispatch(getLengthCart());
  // }, [length1]);
  useLayoutEffect(() => {
    props.navigation.setOptions({
      headerRight: () => (
        //<Ionicons name="home" size={20} color="black" />
        <Text>{length}</Text>
      ),
      title:props.title
    });
  }, [length]);
  return (
    <View>
        <Text>Shop</Text>
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
