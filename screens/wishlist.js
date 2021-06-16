import React, { useLayoutEffect, useEffect } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { Icon, withBadge } from "react-native-elements";
import ItemWishList from "../components/itemWishList";
import { setStatusProducts } from "../redux/products";

export default function wishlist(props) {
  const length = useSelector((state) => state.cart.count);
  const products = useSelector((state) => state.products.products);
  let favouriteList = products.filter((item) => item.favourite == true);
  const dispatch = useDispatch();
  const BadgedIcon = withBadge(length)(Icon);
  useLayoutEffect(() => {
    props.navigation.setOptions({
      headerRight: () => (
        <View style={styles.carticon}>
          <BadgedIcon type="ionicon" name="cart-outline" />
        </View>
      ),
      title: props.title,
    });
  }, [length]);
  useEffect(() => {}, [products]);
  const deleteWishList = (id) => {
    dispatch(setStatusProducts(id));
  };

  return (
    <View style={styles.list}>
      <FlatList
        data={favouriteList}
        renderItem={({ item }) => (
          <ItemWishList item={item} onPress={() => deleteWishList(item.id)} />
        )}
        keyExtractor={(item) => `${item.id}`}
      />
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
});
