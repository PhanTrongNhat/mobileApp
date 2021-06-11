import { StatusBar } from 'expo-status-bar';
import React,{useEffect, useState, useLayoutEffect} from 'react';
import { StyleSheet, Text, View, FlatList, Button,TouchableOpacity
 } from 'react-native';
import axios from 'axios';
import Item from '../components/item';
import { Ionicons } from '@expo/vector-icons';

import {connect} from 'react-redux';
import {useSelector, useDispatch} from 'react-redux';
import { fetchData, setData } from '../redux/products';
import {getLengthCart} from '../redux/cart';

// import { createSelector } from 'reselect'

// const selectNumCompletedTodos = createSelector(
//       state => state.products,()=>{}
// );

 function products({name,navigation}) {
  const products = useSelector(state => state.products.products);
  const length = useSelector(state => state.cart.items.length);
  const dispatch = useDispatch();
  useEffect(() => {
   dispatch(fetchData());
  }, []); 

  const [colums,setColums] = useState(2);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        //<Ionicons name="home" size={20} color="black" />
        <Text>{length}</Text>
      ),
      title:name
    });
  }, [length]);
 
  function changView(){
    if(colums === 2){
      setColums(1);
    }else{
      setColums(2);
    }
  }
  // console.log( products);
  // console.log('-------------------------------');
  return (
    <View>
        <Button title={colums===1?'listView':'gridView'} onPress={changView}></Button>
        
          <FlatList 
            data= {products}
            key = {colums}
            numColumns = {colums}
            renderItem={({item})=>
              <View style={styles.warrap}>
                 <Item categori={item}
                  onPress = {()=>navigation.navigate('DETAIL',{item:item})          
                }
              />      
              </View>
             
            }
            
            keyExtractor={item=>`${item.id}`}
        />
    </View>  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  warrap:{
    flex:1
  }
});

export default products;