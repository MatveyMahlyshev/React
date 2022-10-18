import { StatusBar } from "react-native";
import React from "react";
import { StyleSheet, Text, SafeAreaView, Alert, Button, ImageBackground, Image,View } from "react-native";


export default function App(){

 const image = require('./Images/fon.png');
 const imagebar = require('./Images/bar.png');
 const list = require('./Images/list.png')
 return(
  <SafeAreaView style={styles.container}>
    
  <ImageBackground source={image} resizeMode="cover" style={styles.image}><Image source={imagebar} style={styles.bar}/>
  <Image source={list}style = {styles.bar} /></ImageBackground>
  
  </SafeAreaView>
 )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff'
  },
  text:{
    color: 'red'
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  bar:{
  width: '100%',
  marginTop:'140%',
    

  }
});