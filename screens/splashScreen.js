import React from "react";
import { StyleSheet, View, Image } from "react-native";
import logo from "../assets/reactlogo.png";

const SplashScreen = () => {
  return (
    <View style={styles.viewStyles}>
      <Image source={logo} style={styles.image}></Image>
    </View>
  );
};
const styles = StyleSheet.create({
  textStyles: {
    color: "white",
    fontSize: 40,
    fontWeight: "bold",

    position: "absolute",
  },
  viewStyles: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 200,
    height: 200,
  },
});
export default SplashScreen;
