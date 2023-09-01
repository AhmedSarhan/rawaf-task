import {
  StyleSheet,
  TextInput,
  Text,
  View,
  FlatList,
  ImageBackground,
  TouchableHighlight,
} from "react-native";
import React, { useState } from "react";
import Ionicons from '@expo/vector-icons/Ionicons';

import { useMovies } from "../modules/movies/hooks/use-listing";
import { MovieCard } from "../modules/movies/components/movie-card";

const ListingPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchTitle, setSearchTitle] = useState("");
  const { data, isLoading, error } = useMovies({
    page: 1,
    limit: 10,
    title: searchTitle,
  });
  return (
    <View style={styles.container}>
      <Text>Listing Page</Text>

      <View style={{ flexDirection: "row", ...styles.input, alignItems: 'center', marginVertical: 10 }}>
        <View style={{
          width: "95%",
        }}>
          <TextInput
            style={{
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "white",
              height: '100%'
              
            }}
            value={searchTerm}
            onChangeText={(searchString) => setSearchTerm(searchString)}
            placeholder="Search"
            keyboardType="web-search"
            onSubmitEditing={() => setSearchTitle(searchTerm)}
          />
        </View>
        <TouchableHighlight
          style={{ alignItems: "center", justifyContent: "center" }}
          onPress={() => setSearchTitle(searchTerm)}
          underlayColor="transparent"
        >
          <View>
            <Ionicons name='md-search' size={20} color="#4285F4" />
          </View>
        </TouchableHighlight>
      </View>
      {isLoading && <Text>Loading...</Text>}

      {/* {error && <Text>{error?.message}</Text>} */}

      {data?.length! > 0 && (
        <FlatList
          horizontal={true}
          data={data}
          renderItem={({ item }) => (
            <MovieCard movie={item} key={item.id} />
          )}
          keyExtractor={(item) => item.id}
        />
      )}
      
    </View>
  );
};

export default ListingPage;

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  input: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderColor: "gray",
    marginBottom: 16,
    paddingHorizontal: 8,
    borderRadius: 5,
  },
  
});
