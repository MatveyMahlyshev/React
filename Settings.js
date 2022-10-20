import React from "react";
import { StyleSheet, Text, SafeAreaView, Alert, Button, ImageBackground, Image,View, } from "react-native";
import { gStyle } from "../styles/styles";
export default function Settings(){
  const image = require('../Images/fon.png');
   const imagebar = require('../Images/bar.png');
   const list = require('../Images/list.jpg');
   const domik = require('../Images/domik.png');
   const krug = require('../Images/krug.png');
   const lk = require('../Images/lk.png');
   return(
    <SafeAreaView style={gStyle.container}>
        
    <ImageBackground source={image} resizeMode="cover" style={gStyle.image}>
    <Text style={gStyle.text}>Добрый день{'\n'}  USERNAME</Text>
    <Text></Text>
        <View ></View> 
        <View></View>  
       
        <View style={gStyle.viewst3} /> 
        
         <Image source={krug} style={gStyle.home}/>
         <Image source={domik} style={gStyle.homeim}/>
         
        <Image source={imagebar} style={gStyle.bar} />
        <Image source={lk} style={gStyle.lkk} />
        <Image source={list} style={gStyle.list1}/>
        
        
  </ImageBackground>
    
    </SafeAreaView>
   )
  }