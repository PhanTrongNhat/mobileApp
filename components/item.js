import React from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  Alert,
  TouchableOpacity,
  Button,
} from "react-native";
import product from "../assets/wardrobe.png";
export default function (props) {
  const { categori, onPress } = props;
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
      <View style={style.container}>
        <Image style={style.image} source={product}></Image>
        <Text style={style.text}>{categori.name}</Text>
        <Text style={style.cost}>Cost:{categori.cost}</Text>
        <Button title="buy" onPress={onPress}></Button>
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
});
