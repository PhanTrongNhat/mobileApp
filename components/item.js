import React from 'react'
import {View, Image, Text, StyleSheet} from 'react-native'
import product from '../assets/wardrobe.png'
export default function( props){

    return <View style={style.container}>
        <Image style={style.image} source={product}></Image>
        <Text style={style.text}>wardrobe.</Text>
        <Text style={style.cost}>Cost</Text>
    </View>;
}

const style = StyleSheet.create({
    container:{
        alignItems: "center", 
        padding: 20,
        backgroundColor: "#DCDCDC",
        borderRadius: 10,
        shadowRadius: 10,
        shadowColor: "grey",
        shadowOpacity: 20,
        shadowOffset: {width:0, height: 0}
        // shadowColor: 'red',
        // borderColor: "#DCDCDC"
       
    },
    image:{
        width: 200,
        height: 200
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