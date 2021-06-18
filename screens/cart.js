import React, { useLayoutEffect, useEffect } from "react";
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
      // headerRight: () => (
      //   <View style={styles.carticon}>
      //
      //   </View>
      // ),
      headerShown: false,
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
        <Icon name="menu" type="ionicon" />
        <Text style={styles.title}> Cart</Text>
        <BadgedIcon type="ionicon" name="cart-outline" />
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
      <View style={styles.bottom}>
        <View>
          <Text style={styles.total}>Total:</Text>
          <Text style={styles.sum}>{total}$</Text>
        </View>

        <View style={styles.order}>
          <Text style={styles.orderChild}>Order</Text>
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
  total: {
    color: "grey",
    fontSize: 15,
  },
  carticon: {
    width: 80,
    alignItems: "center",
  },
  list: {
    height: 480,
  },
  bottom: {
    flexDirection: "row",
    height: 55,
    justifyContent: "flex-end",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.00,
    
    elevation: 0.4,
  },
  header: {
    flexDirection: "row",
    marginTop: 30,
    marginRight: 20,
    marginLeft: 10,
    justifyContent: "space-between",
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
  },
  order: {
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    width: 100,
  },
  orderChild: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
  sum: {
    color: "red",
    fontSize: 20,
  },
});
