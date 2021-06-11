import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View, Image, TouchableWithoutFeedback, Keyboard, TextInput, Button, TouchableOpacity, StatusBar } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'


export default class WellCome extends Component {
    
    render() {
      return (
        <View style ={styles.container}>
            <Image source ={require('../assets/Splash.png')}
                style ={styles.logo}>

            </Image>
          
        </View>
      )
    }
}
const styles = StyleSheet.create({
    container: {
          flex: 1,
          flexDirection:'column',
          backgroundColor: "#FF9900",
          alignItems: "center",
          justifyContent: "center",
    },


});     
