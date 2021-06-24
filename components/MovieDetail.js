import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function MovieDetail({navigation}) {

  const [movie, setMovie] = useState(null);

  useEffect( () => {
   fetch(`https://www.omdbapi.com/?i=${navigation.getParam('imdbID')}&apikey=87d10179`)
   .then(response => response.json())
   .then(data => setMovie(data));
  }, [] );
  
  return (
    <View style={styles.container}>
      {
        (movie) ?

        <View style={styles.container}>
          <Text style={styles.movieTitle}>{movie.Title}</Text>
          <Image 
              style= {styles.image}
              source={{
                  uri: movie.Poster,
              }} />
          <Text style={styles.movieYear}>Year: {movie.Year}</Text>
          <Text>IMDB: {movie.imdbID}</Text>
        </View>
        


        :
        <Text>Loading ....</Text>
      }
      <Text>Details Page</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff80',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  image:{
    width: 300,
    height: 300,
  },

  movieTitle:{
    // borderWidth: 3,
    margin: 10,
    fontWeight: "bold",
    fontSize: 20,
  },

  movieYear: {
    // borderWidth: 3,
    margin: 10,
    fontWeight: "bold",
  }
});
