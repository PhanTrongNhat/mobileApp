import React, { useState, useLayoutEffect } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import Item from "../components/item";
import { Ionicons } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { Avatar, Badge, Icon, withBadge } from 'react-native-elements'
export default function wishlist(props) {
  const length = useSelector((state) => state.cart.count);
  const BadgedIcon = withBadge(length)(Icon);
  useLayoutEffect(() => {
    props.navigation.setOptions({
      headerRight: () => (
        <View style={styles.carticon}>
          <BadgedIcon type="ionicon" name="cart-outline" />       
        </View>
      ),
      title: props.title,
    });
  }, [length]);
  return (
    <View>
      <Text>{props.route.child}</Text>
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
  carticon:{
    width:80,
    alignItems:'center'
  }
});
