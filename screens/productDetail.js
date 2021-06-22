import React, { useState, useLayoutEffect, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { setCartCount } from "../redux/cart";
import { Icon, withBadge } from "react-native-elements";
import { LinearGradient } from "expo-linear-gradient";
const h = Dimensions.get("screen").height;
export default function productDetail(props) {
  const [count, setCount] = useState(0);
  const length = useSelector((state) => state.cart.count);
  const dispatch = useDispatch();
  useEffect(() => {}, [length]);
  const { navigation } = props;
  const { item } = props.route.params;

  let src; // = require (item.image);

  const addItem = () => {
    item.count = count;
  
   
    dispatch(setCartCount(item));
    setCount(0);
  };
  useEffect(() => {
  
  }, [dispatch]);
  const BadgedIcon = withBadge(length)(Icon);
  useLayoutEffect(() => {
    navigation.setOptions(
      {
        headerShown: false,
        // headerRight: () => (
        //   <View style={styles.carticon}>
        //     <BadgedIcon type="ionicon" name="cart-outline" />
        //   </View>
        // ),

        // title: item.name,
      },
      [length]
    );
  }, [length]);
  return (
    <LinearGradient colors={["white", "#f8f6d3"]} style={styles.container}>
      <View>
        <View style={styles.header}>
          <View>
            <TouchableOpacity onPress={() => navigation.navigate("HOME")}>
              <Icon name="arrow-back-outline" type="ionicon" />
            </TouchableOpacity>
          </View>

          <View>
            <BadgedIcon type="ionicon" name="cart-outline" />
          </View>
        </View>
        <View style={styles.detail}>
          {src ? (
            <Image style={styles.image} source={{ uri: item.image }}></Image>
          ) : (
            <Image style={styles.image} source={{ uri: item.image }}></Image>
          )}
        </View>

        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.description}>Product description:</Text>
        <View style={styles.scrollView}>
          <ScrollView>
            <Text style={styles.descriptionDetail}>{item.description}</Text>
          </ScrollView>
        </View>

        <View style={styles.priceCost}>
          <Text style={styles.price}>Price:</Text>
          <Text style={styles.cost}>{item.cost}$</Text>
        </View>
        <View style={styles.count}>
          <Text style={styles.countChild}>count:</Text>
        </View>
        <View style={styles.buttonCount}>
          <TouchableOpacity>
            <Text
              style={styles.buttonCountChild}
              onPress={() => {
                if (count > 0) {
                  setCount(count - 1);
                }
              }}
            >
              -
            </Text>
          </TouchableOpacity>

          <Text style={styles.buttonCountChild}>{count}</Text>
          <TouchableOpacity>
            <Text
              style={styles.buttonCountChild}
              onPress={() => setCount(count + 1)}
            >
              +
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.button}>
          <TouchableOpacity onPress={addItem}>
            <View style={styles.addToCart}>
              <Text>ADD TO CART</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-end",
  },
  scrollView: {
    height: h * 0.13,
    marginBottom: 10,
  },
  header: {
    marginTop: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 20,
    marginRight: 20,
  },
  priceCost: {
    marginBottom: 5,
  },
  count: {
    color: "black",
    marginLeft: 10,
  },
  buttonCount: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginBottom: 20,
  },
  description: {
    color: "black",
    marginLeft: 10,
  },
  descriptionDetail: {
    marginLeft: 20,
    color: "grey",
  },

  cost: {
    fontSize: 30,
    color: "grey",
    fontStyle: "italic",
    marginLeft: 20,
  },
  price: {
    marginLeft: 10,
  },
  image: {
    width: h * 0.23,
    height: h * 0.27,

    marginBottom: 10,

    shadowRadius: 30,
    shadowOffset: { height: 2, width: 0 },
    shadowColor: "#000000",
    shadowOpacity: 0.5,
    padding: 60,
  },
  productName: {
    textTransform: "uppercase",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "#ff3333",
  },
  buttonCountChild: {
    borderRadius: 10,
    marginRight: 10,
    backgroundColor: "#b3c6ff",
    fontSize: 25,
    overflow: "hidden",
    width: 40,
    height: 40,
    textAlign: "center",
    justifyContent: "center",
  },
  // countChild:{
  //   borderRadius: 10,
  //   marginRight: 10,
  //   backgroundColor: '#fff',
  //   fontSize: 25,
  //   overflow: 'hidden',
  //   width: 40,
  //   height:40,
  //   textAlign: 'center',
  //   justifyContent: 'center',
  // },

  detail: {
    alignContent: "center",
    textAlign: "center",
    alignItems: "center",

    marginBottom: 10,
  },
  button: {
    alignItems: "center",
  },
  carticon: {
    width: 80,
    alignItems: "center",
  },
  addToCart: {
    backgroundColor: "#ff3333",

    width: 320,

    justifyContent: "center",
    height: 40,
    borderRadius: 5,
    alignItems: "center",
  },
});
