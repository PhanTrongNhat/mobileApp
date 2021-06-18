import React from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function ({name}) {
  return (
    <TouchableOpacity activeOpacity={0.5}>
      <View style={style.container}>
        <Text style={style.text}>
            {name}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  container: {
    shadowColor: "black",
    padding: 5,
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 11,
    },
    shadowOpacity: 0.57,
    shadowRadius: 15.19,
    
    elevation: 3,
   
    borderRadius: 2,
    margin: 5
  },
  text: {
    height: 15,
    width: 70,
    textAlign: 'center'
  },
});
