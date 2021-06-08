import { StatusBar } from "expo-status-bar";
import React, { useState, useLayoutEffect } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import Item from "../components/item";
import { Ionicons } from "@expo/vector-icons";
export default function productDetail(props) {
  const [count, setCount] = useState(0);
  const { navigation } = props;
  const { name } = props.route.params;
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <Ionicons name="home" size={20} color="black" />,
      title: props.route.params.name,
    });
  }, []);
  props.title = "abc";
  return (
    <View>
      <Text>{name}</Text>
      <Text>{count}</Text>
      <Button title="raise" onPress={() => setCount(count + 1)}></Button>
      <Button title="Go back" onPress={() => navigation.goBack()}></Button>
      <Button
        title="push"
        onPress={() => navigation.push("DETAIL", { name: "abc" })}
      ></Button>
      <Button title="home" onPress={() => navigation.popToTop()}></Button>
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
});
