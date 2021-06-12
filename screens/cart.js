
import React,{useState, useLayoutEffect, useEffect} from 'react';
import { StyleSheet, Text, View, Button, FlatList, ScrollView
 } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import { useSelector,useDispatch} from 'react-redux';
import {deleteItem, setCart} from '../redux/cart';
//import itemCart from '../components/itemCart';
import ItemCart from '../components/itemCart';
import Item from '../components/item';
import { Colors } from 'react-native/Libraries/NewAppScreen';
export default function cart({navigation, title}) {
  const length = useSelector(state => state.cart.count);
  const total = useSelector(state => state.cart.total);
  const items = useSelector(state => state.cart.items);
  const dispatch = useDispatch();
  useEffect(() => {
    //console.log(items);
  }, [items])
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        //<Ionicons name="home" size={20} color="black" />
        <Text>{length}</Text>
      ),
      title:title
    });
  }, [length]);
  const deleteI = (item)=>{
    dispatch(deleteItem(item));
  }
  const addItem = (item)=>{
    dispatch(setCart(item));
  }
  console.log(items);
  return (
    
    <View>
{/*         
        <FlatList 
            data= {items}
           
            renderItem={({item})=>
              <View style={styles.warrap}>
                 <Item categori={item}
                    
                />      
              </View>
             
            }
            
            keyExtractor={item=>`${item.id}`}
        /> */}
        <ScrollView>
        <FlatList 
            data = {items}
            renderItem ={({item})=>
                <ItemCart
                  item ={item}
                  onPress = {()=>deleteI(item.id)}
                  onPressSetCart = {()=>addItem(item)}
                />
              
            }
            keyExtractor={item=>`${item.id}`}
         />

        <Text >-----------------------------------------------------------------------------</Text>
        <Text style={styles.total}>Total:{total}$</Text>
        </ScrollView>
        
      
    </View>)
   
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  total:{
    color: "red"
  }
});
