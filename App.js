import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

const image = { uri: "https://i.ibb.co/DrXR627/123.jpg" };

const App = () => (
  <View style={styles.container}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
<Text style={styles.text}> Добро пожаловать, USERNAME!</Text>
    </ImageBackground>
  </View>
  
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  text: {
    flex:2,
    justifyContent:"flex-start",
    color: "#3377ff",
    height:50,
    fontWeight: "bold",
    fontSize: 45,
    textAlign: 'left',
    lineHeight: 50,
    alignContent:"flex-end",
  }
});

export default App;