import React, { useState, useEffect, useLayoutEffect } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

import { useDispatch } from "react-redux";
import { signIn, loadData } from "../redux/auth";
import { Icon } from "react-native-elements";

export default function signInScreen({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadData());
  }, []);
  const submit = (infor) => {
    dispatch(signIn(infor));
  };
  useLayoutEffect(() => {
    navigation.setOptions({
      // headerRight: () => (
      //   // <View style={styles.carticon}>
      //   //
      //   // </View>
      //   //<Ionicons name="home" size={20} color="black" />
      // ),
      // title: name,
      headerShown: false,
    });
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.textView}>
        <Text style={styles.title}>Sign In</Text>
      </View>
      <View style={styles.viewBottom}>
        <View style={styles.nameTitle}>
          <Text>Username</Text>
        </View>
        <View style={styles.userPassword}>
          <Icon name="person" />
          <TextInput
            placeholder="Username"
            value={username}
            onChangeText={setUsername}
          />
        </View>
        <View style={styles.nameTitle}>
          <Text>Password</Text>
        </View>
        <View style={styles.userPassword}>
          <Icon name="lock" />
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>
        <View style={styles.forgot}>
          <Text style={styles.forgotChild}>Forgot password?</Text>
        </View>

        <Button title="Sign in" onPress={() => submit({ username, password })} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    justifyContent: "center",

    marginLeft: 20,
    marginRight: 20,
  },
  viewBottom: {
    marginBottom: 200,
  },
  textView: {
    alignItems: "center",
    textTransform: "uppercase",
    marginBottom: 50,
  },
  title: {
    fontSize: 30,
  },
  userPassword: {
    flexDirection: "row",
    borderWidth: 0.5,
    borderRadius: 5,
    height: 40,
    alignItems: "center",
  },
  nameTitle: {
    marginBottom: 10,
    marginTop: 20,
  },
  forgot: {
    marginTop: 10,
    alignItems: "flex-end",
    marginBottom: 20,
  },
  forgotChild: {
    textDecorationLine: "underline",
  },
});
