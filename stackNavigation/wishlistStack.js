import React from "react";
import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";


import wishlist from "../screens/wishlist";

const Stack = createStackNavigator();

export default function wishlistStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          
        },
        headerTintColor: "black",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="WISHLIST"
        component={wishlist}
        options={{ name: "nhat" }}
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
