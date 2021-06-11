import React, { useState, useLayoutEffect } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import Item from "../components/item";
import { Ionicons } from "@expo/vector-icons";
import { useSelector} from 'react-redux';
export default function me(props) {
  const length= useSelector(state => state.cart.items.length);
  useLayoutEffect(() => {
    props.navigation.setOptions({
      headerRight: () =>// <Ionicons name="home" size={20} color="black" />
      <Text>{length}</Text>
      ,
      title: props.title,
    });
  }, [length]);
  return (
    <View>
      <Text>Me</Text>
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
