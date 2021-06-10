import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity, StatusBar } from "react-native";
// import Ionicons from 'react-native-vector-icons/Ionicons'
// import FontAwesome from 'react-native-vector-icons/FontAwesome'
import {LoginManager} from 'react-native-fbsdk'
export default class LoginForm extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={require('../assets/Splash.jpg')}/>

        <StatusBar style="auto" />
        <View style={styles.EmailView}>
          <TextInput
            style={styles.TextInput}
            textContentType='emailAddress'
            keyboardType='email-address'
            placeholder=" SĐT/Email"
          />
        </View>

        <View style={styles.PasswordView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Mật khẩu"
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
          />
        </View>

        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText}>Đăng nhập</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.forgot_button}>Quên mật khẩu?</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.facebookButton}
          name ="facbook"
          onPress={this.LoginFacebook}
          backgroundColor="#3B5998"
          >
            <Text style={styles.facebooktext}>Đăng nhập bằng Facebook</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FF9900",
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    width: 190,
    height: 180,

  },

  EmailView: {
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginTop: 5,
    alignItems: "center",
    marginBottom: 30,
  },
  PasswordView: {
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginTop: -10,
    alignItems: "center",
    marginBottom: 20,
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 0,

  },

  forgot_button: {
    height: 30,
    textDecorationLine: 'underline',
   
  },

  loginBtn: {
    width: "70%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#C4C4C4",
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#000',
  },
  facebookButton:{
    width: "80%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,

  },
  facebooktext:{
    marginLeft: 0,
  }
  
});


