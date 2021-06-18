import React, { useEffect, useState, useLayoutEffect } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Button,
  TextInput,
  TouchableOpacity,
  Text,
} from "react-native";

import { Icon, withBadge } from "react-native-elements";
import Item from "../components/item";

import { useSelector, useDispatch } from "react-redux";
import { fetchData, setStatusProducts } from "../redux/products";
import { loadData } from "../redux/cart";
import Catalog from "../components/catalogHome";
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
      // headerRight: () => (
      //   // <View style={styles.carticon}>
      //   //
      //   // </View>
      //   //<Ionicons name="home" size={20} color="black" />
      // ),
      // title: name,
      headerShown: false,
    });
  }, [length]);

  // function changView() {
  //   if (colums === 2) {
  //     setColums(1);
  //   } else {
  //     setColums(2);
  //   }
  // }
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
    filter = products.filter((item) =>
      item.name.includes(element.toLowerCase())
    );
    setProductsFilter(filter);
  };
  return (
    <View style={styles.display}>
      <View style={styles.header}>
        <Icon name="menu" type="ionicon" />
        <View style={styles.search}>
          <Icon name="search" />
          <TextInput
            onChangeText={(text) => filterProduct(text)}
            placeholder="input search"
            width={200}
          ></TextInput>
        </View>
        <BadgedIcon type="ionicon" name="cart-outline" />
      </View>
      <View style={styles.typeDisplay}>
        <TouchableOpacity onPress={() => setColums(2)}>
          <View style={styles.typeDisplayChild}>
            <Icon name="grid-outline" type="ionicon" size={30} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setColums(1)}>
          <View style={styles.typeDisplayChild}>
            <Icon name="square-outline" type="ionicon" size={30} />
          </View>
        </TouchableOpacity>
      </View>
      <View>
        <Text color="grey">catelogue</Text>
        <View style={styles.catalog}>
          <FlatList
            data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
            horizontal={true}
            renderItem={({ item }) => <Catalog name={item} />}
            keyExtractor={(item) => `${item}`}
          />
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
    marginBottom: 145,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",

    marginRight: 20,
    marginLeft: 10,
    marginTop: 30,
    marginBottom: 5,
  },
  search: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 5,
  },
  typeDisplay: {
    flexDirection: "row",

    justifyContent: "flex-end",
  },
  typeDisplayChild: {
    marginLeft: 10,
  },
  catalog: {
    flexDirection: "row",
  },
});

export default products;
