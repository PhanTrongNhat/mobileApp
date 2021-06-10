import { StatusBar } from 'expo-status-bar';
import React,{useEffect, useState, useLayoutEffect} from 'react';
import { StyleSheet, Text, View, FlatList, Button,TouchableOpacity
 } from 'react-native';
import axios from 'axios';
import Item from '../components/item';
import { Ionicons } from '@expo/vector-icons';

import {connect} from 'react-redux';

export default connect()( function products(props) {
  const [data,setData] = useState([]);
  const [colums,setColums] = useState(2);
  useEffect(()=>{        
        axios.get("https://2g8ge.sse.codesandbox.io/products").then((res)=>{
          setData(res.data);
          console.log('data loaded!');
        }).catch(err=>{
          console.log(err);
        })
       },[]);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Ionicons name="home" size={20} color="black" />
      ),
      title:props.name
    });
  }, []);
  useEffect(()=>{        
    
   },[colums]);
  
  const products = data;
  const {navigation} = props;
 
  function changView(){
    if(colums === 2){
      setColums(1);
    }else{
      setColums(2);
    }
  }
  
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
                  onPress = {()=>navigation.navigate('DETAIL',{name:item.name})
                  
                }
              />
             
              </View>
             
            }
            
            keyExtractor={item=>`${item.id}`}
        />
    </View>
     
 

   
   
  );
})

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
