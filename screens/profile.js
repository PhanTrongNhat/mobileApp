import React, { useState, useLayoutEffect, useEffect } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import Item from "../components/item";
import { Ionicons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import {signOut} from "../redux/auth";
import { Avatar,icon } from 'react-native-elements';

export default function profile({navigation,name}) {
  const length = useSelector((state) => state.cart.count);
  const user = useSelector(state => state.auth);
  console.log(user);
  const dispatch = useDispatch();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View>
          <Ionicons name="cart" size={20} color="black" />
          <Text>{length}</Text>
        </View>
      ),
      title: name
    });
  }, [length]);
  const logOut = ()=>{
    dispatch(signOut());
    
  }
  return (
    <View>
   
    

      <View style={styles.username}>
        <Text style={styles.name}>{user.name}</Text>
       
        <Avatar
            size="large"
            rounded
            icon={{name: 'user', color: 'grey', type: 'font-awesome'}}
            overlayContainerStyle={{backgroundColor: 'white'}}
            onPress={() => console.log("Works!")}
            activeOpacity={0.7}
           
        />
      </View>
     
      <Button title="log out" onPress={()=> logOut()}/>
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
  username:{
   justifyContent: "space-around",
    flexDirection: "row",
    alignItems:"center",
    marginBottom: 100 ,
    backgroundColor:"grey",
    height:100
   
  },
  name:{
    fontSize: 20,
    color: "#4169E1"

  }
});
