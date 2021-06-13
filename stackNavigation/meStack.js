import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Item from "../components/item";

import signIn from "../screens/signInScreen";
import { useDispatch, useSelector } from "react-redux";
import profile from "../screens/profile";
const Stack = createStackNavigator();

export default function meStack(props) {
  const sign = useSelector((state) => state.auth.signin);
 
  return (
    <Stack.Navigator>
      {sign ? (
        <Stack.Screen name="PROFILE" component={profile} />
      ) : (
        <Stack.Screen name="LOGIN" component={signIn} />
      )}
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
