import React, { useLayoutEffect, useEffect } from "react";
import { StyleSheet, View, FlatList, Text } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { Icon, withBadge } from "react-native-elements";
import ItemWishList from "../components/itemWishList";
import { setStatusProducts } from "../redux/products";

export default function wishlist({navigation, name}) {
  const length = useSelector((state) => state.cart.count);
  const products = useSelector((state) => state.products.products);
  let favouriteList = products.filter((item) => item.favourite == true);
  const dispatch = useDispatch();
  const BadgedIcon = withBadge(length)(Icon);
  useLayoutEffect(() => {
    navigation.setOptions({
      // headerRight: () => (
      //   // <View style={styles.carticon}>
      //   //   <BadgedIcon type="ionicon" name="cart-outline" />
      //   // </View>

      // ),
     // title: props.title,
      headerShown: false,
    });
  }, [length]);
  useEffect(() => {}, [products]);
  const deleteWishList = (id) => {
    dispatch(setStatusProducts(id));
  };

  return (
    <View>
      <View>
        <View style={styles.header}>
          <Icon name="menu" type="ionicon" />
          <Text style={styles.title}>
          WishList
          </Text>
          <BadgedIcon type="ionicon" name="cart-outline" />
        </View>
      </View>
      <View style={styles.list}>
        <FlatList
          data={favouriteList}
          renderItem={({ item }) => (
            <ItemWishList item={item} onPress={() => deleteWishList(item.id)} />
          )}
          keyExtractor={(item) => `${item.id}`}
        />
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
  carticon: {
    width: 80,
    alignItems: "center",
  }, 
  header: {
    flexDirection: "row",
    justifyContent: "space-between",

    marginRight: 20,
    marginLeft: 10,
    marginTop: 40,
    marginBottom: 10,
  },
  list:{
    marginBottom: 160
  },
  title:{
    fontSize: 25,
    fontWeight: 'bold'
  }
});
