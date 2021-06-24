import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Item( {title, year, poster}) {
  return (
    <View style={styles.container} >
      <Text style={styles.movieTitle}>{title}</Text>
      <Text>{year}</Text>
      <Image 
      style= {styles.image}
      source={{
          uri: poster,
      }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#80ff80',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    margin: 10,
  },

  image:{
    width: 100,
    height: 100,
    margin: 10,
  },

  movieTitle:{
    // borderWidth: 3,
    margin: 6,
    fontWeight: "bold",
    fontSize: 20,
  },
});
