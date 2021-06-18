import React from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import product from "../assets/wardrobe.png";
import { Icon } from "react-native-elements";
export default function ({ item, onPress }) {
  return (
    <TouchableOpacity activeOpacity={0.5}>
      <View style={style.container}>
        <View style={style.imageView}>
          <Image style={style.image} source={product}></Image>
        </View>
        <View style={style.infor}>
          <Text style={style.text}>{item.name}</Text>
          <Text style={style.cost}>Cost:{item.cost}$</Text>
        </View>
        <View>
          <View style={style.delete}>
            <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
              <Icon name="trash-outline" type="ionicon" size={40} color="red" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  container: {
    alignItems: "center",
    margin: 10,
    borderRadius: 5,

    justifyContent: "space-around",
    flexDirection: "row",

    height: 150,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },

  image: {
    width: 100,
    height: 100,
  },
  imageView: {
    marginLeft: 10,
  },
  infor: {
    marginRight: 90,
  },
  text: {
    color: "red",
    textTransform: "uppercase",
  },
  cost: {
    color: "black",
  },
  item: {
    alignItems: "center",
  },
  button: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "space-between",
  },
  increse: {
    margin: 5,
    width: 50,
  },
  reduce: {
    margin: 5,
    width: 50,
  },
  delete: {
    marginBottom: 10,
    marginRight: 10,
  },
});
