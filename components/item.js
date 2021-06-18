import React from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  Button,
} from "react-native";
import product from "../assets/trousers.png";
import { Icon } from "react-native-elements";
export default function ({ categori, onPress, onPressStatus }) {
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
      <View style={style.container}>
        <View style={style.imageHeart}>
          <Image style={style.image} source={product}></Image>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={onPressStatus}
            style={style.heart}
          >
            <View>
              {categori.favourite === false ? (
                <Icon name="heart-outline" type="ionicon" />
              ) : (
                <Icon name="heart" type="ionicon" color="red" />
              )}
            </View>
          </TouchableOpacity>
        </View>
        <View style={style.priceAndName}>
          <Text style={style.text}>{categori.name}</Text>
          <Text style={style.cost}>Cost:{categori.cost}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#DCDCDC",
    borderRadius: 1,
    flex: 2,
    shadowColor: "#f2f2f2",
    shadowOpacity: 20,
    shadowOffset: { width: 0, height: 0 },
    marginRight: 10,
    marginBottom: 10,
    marginLeft: 5,
  },
  imageHeart: {
    
    width: 168,
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,

  },
  heart: {
    position: "absolute",
    left: 140,
    top: 5,
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
  },
  priceAndName: {
    alignItems: "flex-start",
  },
});
