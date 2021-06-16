import React, {  useLayoutEffect, useEffect } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { deleteItem, setCart, reduceItem } from "../redux/cart";
//import itemCart from '../components/itemCart';
import ItemCart from "../components/itemCart";
import { Icon, withBadge } from "react-native-elements";
export default function cart({ navigation, title }) {
  const dispatch = useDispatch();
  const length = useSelector((state) => state.cart.count);
  const total = useSelector((state) => state.cart.total);
  const items = useSelector((state) => state.cart.items);

  const BadgedIcon = withBadge(length)(Icon);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View style={styles.carticon}>
          <BadgedIcon type="ionicon" name="cart-outline" />
        </View>
      ),
      title: title,
    });
  }, [length]);
  useEffect(() => {}, [items]);
  const deleteI = (id) => {
    dispatch(deleteItem(id));
  };
  const addItem = (item) => {
    dispatch(setCart(item));
  };
  const reduce = (id) => {
    dispatch(reduceItem(id));
  };
  // console.log(items);
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.total}>count:{length}$</Text>
        <Text style={styles.total}>Total:{total}$</Text>
      </View>

      <View style={styles.list}>
        <FlatList
          data={items}
          renderItem={({ item }) => (
            <ItemCart
              item={item}
              onPress={() => deleteI(item.id)}
              onPressSetCart={() => addItem(item)}
              onPressReduce={() => reduce(item.id)}
            />
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
  total: {
    color: "red",
  },
  carticon: {
    width: 80,
    alignItems: "center",
  },
  list: {
    marginBottom: 70,
  },
  header: {
    borderWidth: 1,
  },
});
