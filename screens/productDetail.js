import React, { useState, useLayoutEffect, useEffect } from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { setCart } from "../redux/cart";
import { Icon, withBadge } from "react-native-elements";

export default function productDetail(props) {
  const length = useSelector((state) => state.cart.count);
  const dispatch = useDispatch();
  useEffect(() => {}, [length]);
  const { navigation } = props;
  const { item } = props.route.params;

  let src; // = require (item.image);

  const addItem = () => {
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
  }, [length]);
  return (
    <View>
      <View style={styles.detail}>
        {src ? (
          <Image
            style={styles.image}
            source={require("../assets/wardrobe.png")}
          ></Image>
        ) : (
          <Image
            style={styles.image}
            source={require("../assets/wardrobe.png")}
          ></Image>
        )}

        <Text>{item.name}</Text>
        <Text>{item.cost}$</Text>
      </View>
      <View style={styles.button}>
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
    marginBottom: 20,
  },
  button: {
    alignItems: "center",
  },
  carticon: {
    width: 80,
    alignItems: "center",
  },
});
