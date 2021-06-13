import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

//tab navigator

//screen
import products from "../screens/products";
import productDetail from "../screens/productDetail";

const Stack = createStackNavigator();

export default function homeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#f4511e",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="HOME"
        style={styles.header}
        options={{ title: "my home" }}
        component={products}
      />
      <Stack.Screen
        name="DETAIL"
        component={productDetail}
        options={{ title: "detail" }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    alignItems: "stretch",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
