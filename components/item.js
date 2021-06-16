import React from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  Button,
} from "react-native";
import product from "../assets/wardrobe.png";
import { Icon } from "react-native-elements";
export default function ({ categori, onPress, onPressStatus }) {
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
      <View style={style.container}>
        <Image style={style.image} source={product}></Image>
        <Text style={style.text}>{categori.name}</Text>
        <Text style={style.cost}>Cost:{categori.cost}</Text>
        <View style={style.button}>
          <Button title="buy" onPress={onPress}></Button>
          <TouchableOpacity activeOpacity={0.5} onPress={onPressStatus}>
            {categori.favourite === false ? (
              <Icon name="heart-outline" type="ionicon" />
            ) : (
              <Icon name="heart" type="ionicon" />
            )}
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  container: {
    alignItems: "center",
    margin: 10,
    backgroundColor: "#DCDCDC",
    borderRadius: 10,
    flex: 1,
    shadowColor: "grey",
    shadowOpacity: 20,
    shadowOffset: { width: 0, height: 0 },
    borderWidth: 5,
  },
  image: {
    width: 100,
    height: 100,
  },
  text: {
    color: "red",
    textTransform: "uppercase",
  },
  cost: {
    color: "black",
  },
  button: {
    width: 100,
    marginBottom: 10,
  },
});
