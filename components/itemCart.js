import React from 'react'
import {View, Image, Text, StyleSheet, Alert,TouchableOpacity, Button } from 'react-native'
import product from '../assets/wardrobe.png'
export default function( {item,onPress, onPressSetCart}){
    
    return (
    <TouchableOpacity activeOpacity={0.5} >
        <View style={style.container}>
            <Image style={style.image} source={product}></Image>
            <Text style={style.text}>{item.name}</Text>
            <Text >Count:{item.count}</Text>
            <Text style={style.cost}>Cost:{item.cost}$</Text>
            <Text >Total:{item.count * item.cost}$</Text>
            
            <Button title="delete" onPress={onPress}></Button>
            <Button title="add" onPress={onPressSetCart}></Button>
        </View>
    </TouchableOpacity>)
    ;
}

const style = StyleSheet.create({
    container:{
        alignItems: "center", 
        margin: 10,
        backgroundColor: "#DCDCDC",
        borderRadius: 10,
        flex: 1,
        shadowColor: "grey",
        shadowOpacity: 20,
        shadowOffset: {width:0, height: 0}
    },
    image:{
        width: 100,
        height: 100
    },
    text:{
        color:"red",
        textTransform: "uppercase"
        
    },
    cost:{
        color: "black"
    }
    }
)