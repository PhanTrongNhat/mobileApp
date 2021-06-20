import React, { useLayoutEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../redux/auth";
import { Avatar, withBadge, Icon } from "react-native-elements";
const w = Dimensions.get("screen").width;
const h = Dimensions.get("screen").height;
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
        <Avatar
          rounded
          size="large"
          source={require("../assets/logouser.jpg")}
        />
        <Text style={styles.name}>{user.name}</Text>
      </View>

      <View style={styles.informations}>
        <Text style={styles.tabChildTitle}>Information</Text>
        <View style={styles.tabChild}>
          <View style={styles.icon}>
            <Icon name="person-outline" type="ionicon" />
          </View>

          <Text style={styles.tabChildText}>My account</Text>
          <Icon name="chevron-forward-outline" type="ionicon" />
        </View>
        <View style={styles.tabChild}>
          <View style={styles.icon}>
            <Icon name="document-text-outline" type="ionicon" />
          </View>

          <Text style={styles.tabChildText}>Order & Return</Text>
          <Icon name="chevron-forward-outline" type="ionicon" />
        </View>
      </View>

      <View style={styles.settings}>
        <Text style={styles.tabChildTitle}>Settings</Text>
        <View style={styles.tabChild}>
          <View style={styles.icon}>
            <Icon name="settings-outline" type="ionicon" />
          </View>
          <Text style={styles.tabChildText}>App settings</Text>
          <Icon name="chevron-forward-outline" type="ionicon" />
        </View>
        <View style={styles.tabChild}>
          <View style={styles.icon}>
            <Icon name="help-circle-outline" type="ionicon" />
          </View>

          <Text style={styles.tabChildText}>Help & infor</Text>
          <Icon name="chevron-forward-outline" type="ionicon" />
        </View>
        <View style={styles.tabChild}>
          <View style={styles.icon}>
            <Icon name="call-outline" type="ionicon" />
          </View>

          <Text style={styles.tabChildText}>Hotline</Text>
          <Text>+84339545856</Text>
        </View>
        <View style={styles.tabChild}>
          <View style={styles.icon}>
            <Icon name="log-out-outline" type="ionicon" />
          </View>
          <TouchableOpacity onPress={() => logOut()}>
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
  informations: {
    height: h * 0.24,
  },
  settings: {
    height: h * 0.3,
  },
  username: {
    justifyContent: "space-around",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    backgroundColor: "#e6e6e6",
    height: 90,
  },
  name: {
    fontSize: 15,
    color: "black",
    marginRight: 20,
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
    marginBottom: 10,
  },
  headerText: {
    textAlign: "center",
    marginRight: 100,
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
    marginBottom: 5,
  },
  tabChildText: {
    marginRight: 165,
  },
  tabChildTitle: {
    marginLeft: 10,
    marginBottom: 15,
  },
  icon: {
    marginRight: 20,
  },
});
