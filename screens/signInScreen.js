import React, { useState, useEffect } from "react";
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

  return (
    <View style={styles.container}>
      <View style={styles.textView}>
        <Text style={styles.text}>Login</Text>
      </View>
      <View style={styles.viewBottom}>
        <View style={styles.icon}>
          <Icon name="person" />
          <TextInput
            placeholder="Username"
            value={username}
            onChangeText={setUsername}
          />
        </View>
        <View style={styles.icon}>
          <Icon name="lock" />
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>

        <Button title="Signin" onPress={() => submit({ username, password })} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
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
  text: {
    textTransform: "uppercase",
    fontSize: 30,
  },
  icon: {
    flexDirection: "row",
  },
});
