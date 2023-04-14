import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

const HomePage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to our React Native FireStore Todo App!</Text>
      <Image
        style={styles.image}
        source={require('../assets/firebase-art.png')}
        resizeMode="contain" // or "cover"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'purple',
    fontSize: 24,
    textAlign: 'center'
  },
  image: {
    width: 100, // set the width and height as per your requirement
    height: 100,
  },
});

export default HomePage;
