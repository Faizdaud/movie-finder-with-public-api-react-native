import { StatusBar } from 'expo-status-bar';
import React, {useState,useEffect} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native';
import Item from './Item'

export default function Home({navigation}) {

    const [searchTitle, setsearchTitle] = useState("");

    const [movies, setMovies] = useState([]);

       const callApi = () => {
        fetch(`https://www.omdbapi.com/?s=${searchTitle}&apikey=87d10179`)
        .then(response => response.json())
        .then(data => setMovies(data["Search"]));
       }

       const renderItem = ({item}) => (
           <TouchableOpacity onPress={() => navigation.push("MovieDetail", {imdbID:item.imdbID})}>
             <Item title={item.Title} year={item.Year} poster={item.Poster} />
           </TouchableOpacity> 
       );

       useEffect( () => {
           console.log("page loaded");
       }, []);



  return (
    <View style={styles.container}>

        <View style={styles.searchGroup}>
          <TextInput 
          style={styles.input} 
          placeholder="Enter a Movie" 
          value={searchTitle}
          onChangeText= {(text) => setsearchTitle(text)}>
        </TextInput>

        <TouchableOpacity 
          style={styles.searchButton} 
          onPress={callApi}>
           <Text>Search</Text>
        </TouchableOpacity>

        </View>


      <FlatList  
    
        data= {movies} 
        keyExtractor={item=>item.imdbID} 
        renderItem={renderItem}
        >    
      </FlatList>

     
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  input: {
      borderWidth: 3,
      marginRight: 20,
      padding: 8,
      flex:2,
      borderColor: "black"
  },

  searchButton:{
    borderRadius: 15,
    backgroundColor: "blue",
    padding: 8,
  },

  searchGroup: {
      flex:1,
      flexDirection: "row",
      marginTop: 4,
      marginBottom: 4,
      maxHeight: "50px",
      minHeight: "20px",
  }
});


// {
//     "Title": "Harry Potter and the Deathly Hallows: Part 2",
//     "Year": "2011",
//     "imdbID": "tt1201607",
//     "Type": "movie",
//     "Poster": "https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg"
//   },
//   {
//     "Title": "Harry Potter and the Sorcerer's Stone",
//     "Year": "2001",
//     "imdbID": "tt0241527",
//     "Type": "movie",
//     "Poster": "https://m.media-amazon.com/images/M/MV5BNjQ3NWNlNmQtMTE5ZS00MDdmLTlkZjUtZTBlM2UxMGFiMTU3XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg"
//   },
//   {
//     "Title": "Harry Potter and the Chamber of Secrets",
//     "Year": "2002",
//     "imdbID": "tt0295297",
//     "Type": "movie",
//     "Poster": "https://m.media-amazon.com/images/M/MV5BMTcxODgwMDkxNV5BMl5BanBnXkFtZTYwMDk2MDg3._V1_SX300.jpg"
//   },
