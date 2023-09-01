import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Movie } from "../types";

export const MovieCard = ({movie}: {movie: Movie}) => {
  return (
    <View style={styles.card}>
      <ImageBackground
        source={{
          uri: movie?.attributes?.posterImage?.original,
        }}
        resizeMode="cover"
        style={styles.card_image}
      ></ImageBackground>

      <View style={{ padding: 10 }}>
        <Text
          style={{
            fontWeight: "bold",
            marginBottom: 5,
          }}
        >
          {movie?.attributes?.titles?.en ||
            movie?.attributes?.titles?.en_us ||
            movie?.attributes?.titles?.en_jp ||
            "no title found"}
        </Text>
        <Text
          numberOfLines={3}
          style={{
            fontSize: 12,
            color: "gray",
          }}
        >
          {movie?.attributes?.description}
        </Text>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  card_image: {
    flex: 1,
    justifyContent: "center",
  },
  card: {
    width: 200,
    height: 200,
    backgroundColor: "white",
    margin: 10,
    borderRadius: 10,
    shadowColor: "#746363",
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    overflow: "hidden",
  },
})