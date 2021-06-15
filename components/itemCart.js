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
export default function ({ item, onPress, onPressSetCart, onPressReduce }) {
  return (
    <TouchableOpacity activeOpacity={0.5}>
      <View style={style.container}>
        <View style={style.item}>
          <Text style={style.text}>{item.name}</Text>
          <Image style={style.image} source={product}></Image>
        </View>
        <View style={style.item}>
          
          <Text style={style.cost}>Cost:{item.cost}$</Text>
          <Text>Total:{item.count * item.cost}$</Text>
          <View style={style.button}>
            <View style={style.reduce}>
              <Button title="-"  onPress={onPressReduce}></Button>
            </View>
            <Text>{item.count}</Text>
            <View style={style.increse}>
              <Button title="+" onPress={onPressSetCart}></Button>
            </View>
            
          </View>
          <View style={style.delete}>
            <Button title="delete"onPress={onPress}></Button>
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
    backgroundColor: "#DCDCDC",
    borderRadius: 10,
    flex: 1,
    justifyContent: "space-around",
    flexDirection: "row",
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
  item: {
    alignItems: "center",
  },
  button: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: 'space-between'
  },
  increse:{
    margin: 5,
    width: 50
  },
  reduce:{
    margin: 5,
    width: 50
  },
  delete:{
    marginBottom:10
  }
});
