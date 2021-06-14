import React, { useState, useLayoutEffect, useEffect } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import Item from "../components/item";
import { Ionicons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import {signOut} from "../redux/auth";

export default function profile({navigation,name}) {
  const length = useSelector((state) => state.cart.count);
  const user = useSelector(state => state.auth);
  console.log(user);
  const dispatch = useDispatch();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View>
          <Ionicons name="cart" size={20} color="black" />
          <Text>{length}</Text>
        </View>
      ),
      title: name
    });
  }, [length]);
  const logOut = ()=>{
    dispatch(signOut());
    
  }
  return (
    <View>
      <Text>{user.name}</Text>
      <Text>profile</Text>
      <Button title="log out" onPress={()=> logOut()}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
