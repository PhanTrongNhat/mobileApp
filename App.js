import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Ionicons } from "@expo/vector-icons";
//screen

import homeStack from "./stackNavigation/homeStack.js";
import wishlistStack from "./stackNavigation/wishlistStack.js";
import meStack from "./stackNavigation/meStack.js";
import cartStack from "./stackNavigation/cartStack.js";

import { Provider } from "react-redux";
import store from "./redux/store";

//splash

import SplashScreen from "./screens/splashScreen";
const Tab = createBottomTabNavigator();

export default function App() {
  const [flag, setFlag] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setFlag(false);
    }, 3000);
  });

  return flag ? (
    <SplashScreen />
  ) : (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === "home") {
                iconName = focused ? "home" : "home-outline";
              } else if (route.name === "wishlist") {
                iconName = focused ? "heart" : "heart-outline";
              } else if (route.name === "cart") {
                iconName = focused ? "cart" : "cart-outline";
              } else if (route.name === "me") {
                iconName = focused ? "person-circle" : "person-circle-outline";
              }

              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: "tomato",
            inactiveTintColor: "gray",
          }}
        >
          <Tab.Screen name="home" component={homeStack} />

          <Tab.Screen name="wishlist" component={wishlistStack} />
          <Tab.Screen name="cart" component={cartStack} />
          <Tab.Screen name="me" component={meStack} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
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
