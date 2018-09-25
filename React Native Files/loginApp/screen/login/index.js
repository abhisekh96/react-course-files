import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Button,
  Image,
  ImageBackground,
} from 'react-native';

const { width, height } = Dimensions.get("window");

const background = require('./bg4.jpg');
const lock = require('./lock.png');
const user = require('./user.png');
const loginStar = require('./twitterLogo.png');

export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={background} resizeMode="cover" style={styles.background}>
          <View style={styles.logoContainer}>
            <Image source={loginStar} style={styles.logo} resizeMode="contain" />
          </View>
          <View style={styles.wrapper}>
            <View style={styles.inputWrapper}>
              <View style={styles.iconWrapper}>
                <Image source={user} resizeMode="contain" style={styles.icon} />
              </View>
              <TextInput placeholder="Your Username" placeholderTextColor="#ffffff" style={styles.input} />
            </View>
            <View style={styles.inputWrapper}>
              <View style={styles.iconWrapper}>
                <Image source={lock} resizeMode="contain" style={styles.icon} />
              </View>
              <TextInput placeholder="Your Password" placeholderTextColor="#ffffff" style={styles.input} secureTextEntry={true} />
            </View>
            <TouchableOpacity>
              <View>
                <Text style={styles.forgotPassword}>
                  Forgot your password?
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Sign In</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.container}>
            <View style={styles.signUpWrapper}>
              <Text style={styles.account}>
                You can also
              </Text>
              <TouchableOpacity>
                <View>
                  <Text style={styles.signUpLink}>
                    Sign Up
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  background: {
    width: width,
    height: height
  },
  logoContainer: {
    flex: 1,
    paddingVertical: 20
  },
  logo: {
    flex: 1,
    height: null,
    width: null
  },
  wrapper: {
    paddingVertical: 30
  },
  inputWrapper: {
    flexDirection: "row",
    marginVertical: 30,
    height: 45,
    borderBottomWidth: 1,
    borderBottomColor: "#c1c1c1"
  },
  iconWrapper: {
    paddingVertical: 5,
    justifyContent: "center",
    alignItems: "center"
  },
  icon: {
    height: 20,
    width: 20
  },
  input: {
    flex: 1,
    paddingHorizontal: 10
  },
  button: {
    backgroundColor: "#41EBA3",
    paddingVertical: 20,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 20
  },
  forgotPassword: {
    color: "#c1c1c1",
    backgroundColor: "transparent",
    textAlign: "center",
    paddingRight: 20
  },
  signUpWrapper: {
    backgroundColor: "transparent",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  account: {
    color: "#c1c1c1"
  },
  signUpLink: {
    color: "#ffffff",
    marginLeft: 5
  }
});