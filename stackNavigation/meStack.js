import React from "react";
import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import signIn from "../screens/signInScreen";
import { useSelector } from "react-redux";
import profile from "../screens/profile";
const Stack = createStackNavigator();

export default function meStack() {
  const sign = useSelector((state) => state.auth.signin);

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {},
        headerTintColor: "black",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
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
