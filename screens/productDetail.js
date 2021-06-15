import { StatusBar } from "expo-status-bar";
import React, { useState, useLayoutEffect, useEffect } from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import Item from "../components/item";
import { Ionicons } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";
import { setCart, getLengthCart } from "../redux/cart";
import { Avatar, Badge, Icon, withBadge } from 'react-native-elements'
export default function productDetail(props) {
  const length = useSelector((state) => state.cart.count);
  const dispatch = useDispatch();
  useEffect(() => {}, [length]);
  const { navigation } = props;
  const { item } = props.route.params;
  //console.log(item);
  const [image, setImage] = useState("");
  let src = "../assets/wardrobe.png";
  const addItem = () => {
    //item.id = length + 1;
    dispatch(setCart(item));
  };
  const BadgedIcon = withBadge(length)(Icon);
  useLayoutEffect(() => {
    navigation.setOptions(
      {
        headerRight: () => (
          <View style={styles.carticon}>
            <BadgedIcon type="ionicon" name="cart-outline" />       
          </View>
        ),
        title: item.name,
      },
      [length]
    );

    import(src).then((image) => setImage(image.default));
  }, [length]);
  return (
    <View>
      <View style={styles.detail}>
        <Image style={styles.image} source={image}></Image>
        <Text>{item.name}</Text>
        <Text>{item.cost}$</Text>
      </View>
      <View  style={styles.button}>
        <Button title="ADD TO CART" onPress={addItem}></Button>
      </View>
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
  image: {
    width: 200,
    height: 200,
  },
  detail: {
    alignContent: "center",
    textAlign: "center",
    alignItems: "center",
    borderWidth: 1,
    marginBottom: 20
  },
  button: {
    alignItems:'center'
  },
  carticon:{
    width:80,
    alignItems:'center'
  }
});
