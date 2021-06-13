import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Item from "../components/item";

import wishlist from "../screens/wishlist";

const Stack = createStackNavigator();

export default function wishlistStack(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="WISHLIST"
        component={wishlist}
        options={{ child: "nhat" }}
      />
    </Stack.Navigator>
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
