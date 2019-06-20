import * as WebBrowser from 'expo-web-browser';
import React from 'react';

import Login from '../components/Login';
import {ImageBackground, StyleSheet} from 'react-native';

export default function HomeScreen() {
  return (
    <ImageBackground
      source={require('../assets/images/moon.jpg')}
      style={styles.bgImage}
    >
      <Login
        onSubmit={submitFunction.bind(this)}
      />
    </ImageBackground>
  );
}

const submitFunction = (email, password) => {
  // HANDLE LOGIN DYNAMICALLY HERE
  console.log('email: ', email);
  console.log('password: ', password);
}

HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  bgImage: {
    flex: 1,
    alignSelf: 'stretch',
    resizeMode: 'contain',
  },
});

