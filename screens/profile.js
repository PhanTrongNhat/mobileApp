import React, { useLayoutEffect } from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../redux/auth";
import { Avatar, withBadge, Icon } from "react-native-elements";

export default function profile({ navigation, name }) {
  const length = useSelector((state) => state.cart.count);
  const user = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const BadgedIcon = withBadge(length)(Icon);
  useLayoutEffect(() => {
    navigation.setOptions({
      //
      headerShown: false,
    });
  }, [length]);
  const logOut = () => {
    dispatch(signOut());
  };
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.headerText}>Account</Text>
        <BadgedIcon type="ionicon" name="cart-outline" />
      </View>
      <View style={styles.username}>
        <Text style={styles.name}>{user.name}</Text>

        <Avatar
          size="large"
          rounded
          icon={{ name: "user", color: "grey", type: "font-awesome" }}
          overlayContainerStyle={{ backgroundColor: "white" }}
          onPress={() => console.log("Works!")}
          activeOpacity={0.7}
        />
      </View>

      <View style={styles.information}>
        <Text style={styles.tabChildTitle}>Information</Text>
        <View style={styles.tabChild}>
          <Icon name="person-outline" type="ionicon" />
          <Text style={styles.tabChildText}>My account</Text>
          <Icon name="chevron-forward-outline" type="ionicon" />
        </View>
        <View style={styles.tabChild}>
          <Icon name="document-text-outline" type="ionicon" />
          <Text style={styles.tabChildText}>Order & Return</Text>
          <Icon name="chevron-forward-outline" type="ionicon" />
        </View>
      </View>

      <View style={styles.settings}>
      <Text style={styles.tabChildTitle}>Settings</Text>
        <View style={styles.tabChild}>
          <Icon name="settings-outline" type="ionicon" />
          <Text style={styles.tabChildText}>App settings</Text>
          <Icon name="chevron-forward-outline" type="ionicon" />
        </View>
        <View style={styles.tabChild}>
          <Icon name="help-circle-outline" type="ionicon" />
          <Text style={styles.tabChildText}>Help & infor</Text>
          <Icon name="chevron-forward-outline" type="ionicon" />
        </View>
        <View style={styles.tabChild}>
          <Icon name="call-outline" type="ionicon" />
          <Text style={styles.tabChildText}>Hotline</Text>
          <Text>+84339545856</Text>
        </View>
        <View style={styles.tabChild}>
          <Icon name="log-out-outline" type="ionicon" />
          <TouchableOpacity onPress={() => logOut()} >
          <Text style={styles.tabChildText}>Sign Out</Text>
          </TouchableOpacity>
       
        </View>
      </View>
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
  username: {
    justifyContent: "space-around",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    backgroundColor: "#ccccff",
    height: 100,
  },
  name: {
    fontSize: 20,
    color: "#4169E1",
  },
  carticon: {
    width: 80,
    alignItems: "center",
  },
  header: {
    marginTop: 30,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    marginRight: 20,
    marginBottom: 20,
  },
  headerText: {
    textAlign: "center",
    marginRight: 80,
    fontWeight: "bold",
    fontSize: 25,
  },
  tabChild: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginRight: 10,
    marginLeft: 10,
    height: 50,
    marginBottom: 5
  },
  tabChildText: {
    marginRight: 150,
  },
  tabChildTitle: {
    marginLeft: 10,
    marginBottom: 15
  },
 
});
