import React, { useEffect, useState, useLayoutEffect } from "react";
import { StyleSheet, View, FlatList, Button, TextInput } from "react-native";

import { Icon, withBadge } from "react-native-elements";
import Item from "../components/item";

import { useSelector, useDispatch } from "react-redux";
import { fetchData, setStatusProducts } from "../redux/products";
import { loadData } from "../redux/cart";

function products({ name, navigation }) {
  let filter;
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const length = useSelector((state) => state.cart.count);
  const [colums, setColums] = useState(2);
  const [productsFilter, setProductsFilter] = useState(products);
  const BadgedIcon = withBadge(length)(Icon);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View style={styles.carticon}>
          <BadgedIcon type="ionicon" name="cart-outline" />
        </View>
        //<Ionicons name="home" size={20} color="black" />
      ),
      title: name,
    });
  }, [length]);

  function changView() {
    if (colums === 2) {
      setColums(1);
    } else {
      setColums(2);
    }
  }
  const setStatus = (id) => {
    dispatch(setStatusProducts(id));
  };
  useEffect(() => {
    dispatch(loadData());
  }, []);
  useEffect(() => {
    dispatch(fetchData());
  }, []);

  useEffect(() => {
    setProductsFilter(products);
  }, [products]);
  const filterProduct = (element) => {
    filter = products.filter((item) => item.name.includes(element));
    setProductsFilter(filter);
  };
  return (
    <View style={styles.display}>
      <View style={styles.header}>
        <Button
          title={colums === 1 ? "listView" : "gridView"}
          onPress={changView}
        ></Button>
        <View style={styles.search}>
          <Icon name="search" />
          <TextInput
            onChangeText={(text) => filterProduct(text)}
            placeholder="input search"
            width={200}
          ></TextInput>
        </View>
      </View>

      <FlatList
        data={productsFilter}
        key={colums}
        numColumns={colums}
        renderItem={({ item }) => (
          <View style={styles.warrap}>
            <Item
              categori={item}
              onPress={() => navigation.navigate("DETAIL", { item: item })}
              onPressStatus={() => setStatus(item.id)}
            />
          </View>
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
  warrap: {
    flex: 1,
  },
  carticon: {
    width: 80,
    alignItems: "center",
  },
  display: {
    marginBottom: 60,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 20,
    marginRight: 10,
    marginTop: 10,
    marginBottom: 5,
  },
  search: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 2,
  },
});

export default products;
