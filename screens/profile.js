import React, {  useLayoutEffect } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {signOut} from "../redux/auth";
import { Avatar, withBadge, Icon} from 'react-native-elements';

export default function profile({navigation,name}) {
  const length = useSelector((state) => state.cart.count);
  const user = useSelector(state => state.auth);
  console.log(user);
  const dispatch = useDispatch();
  const BadgedIcon = withBadge(length)(Icon);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View style={styles.carticon}>
          <BadgedIcon type="ionicon" name="cart-outline" />
      
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

  },
  carticon:{
    width:80,
    alignItems:'center'
  }
  
});
