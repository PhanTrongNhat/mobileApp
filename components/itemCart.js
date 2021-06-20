import React from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  
} from "react-native";
import { Icon } from "react-native-elements";
export default function ({ item, onPress, onPressSetCart, onPressReduce }) {
  return (
    <TouchableOpacity activeOpacity={0.5}>
      <View style={style.container}>
        <View style={style.imageView}>
          <Image style={style.image} source={{uri : item.image}}></Image>
        </View>

        <View style={style.item}>
          <Text style={style.text}>{item.name}</Text>
          <Text style={style.cost}>Cost:{item.cost}$</Text>
          <Text>Total:{item.count * item.cost}$</Text>
          <View style={style.delete}>
            <TouchableOpacity onPress={onPress}>
              <Icon name="trash-outline" type="ionicon" size={20} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={style.button}>
          <View style={style.reduce}>
            <TouchableOpacity onPress={onPressReduce}>
             
              <Text>-</Text>
            </TouchableOpacity>
          </View>
          <View style={style.number}>
            <Text  >{item.count}</Text>
          </View>
          
          <View style={style.increse}>
            <TouchableOpacity onPress={onPressSetCart}>
           
              <Text>+</Text>
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
    height: 130,
    borderRadius: 5,
 
    justifyContent: "space-around",
    flexDirection: "row",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  image: {
    width: 100,
    height: 110,
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
    borderWidth: 1,
  },
  increse: {
    width: 30,
    height: 30,
    backgroundColor: "#efeff5",
   
    borderLeftWidth: 1,
  
    alignItems: 'center',
    justifyContent: 'center'
  },
  reduce: {
    width: 30,
    height: 30,
    backgroundColor: "#efeff5",
    alignItems: 'center',
    borderRightWidth: 1,
    justifyContent: 'center'
  },
  delete: {
    marginBottom: 10,
  },
  number:{
    width: 50,
    alignItems: 'center'
  }
});
