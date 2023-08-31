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

import { useListing } from "../modules/listing/hooks/use-listing";

const ListingPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchTitle, setSearchTitle] = useState("");
  const { data, isLoading, error } = useListing({
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

      {data?.length > 0 && (
        <FlatList
          horizontal={true}
          data={data}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <ImageBackground
                source={{
                  uri: item?.attributes?.posterImage?.original,
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
                  {item?.attributes?.titles?.en ||
                    item?.attributes?.titles?.en_us ||
                    item?.attributes?.titles?.en_jp ||
                    "no title found"}
                </Text>
                <Text
                  numberOfLines={3}
                  style={{
                    fontSize: 12,
                    color: "gray",
                  }}
                >
                  {item?.attributes?.description}
                </Text>
              </View>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      )}
      {/* <View style={styles.list}>
        {data?.map((item: any) => (
          <View key={item.id} style={styles.card}>
            <Text>
              {item?.attributes?.titles?.en ||
                item?.attributes?.titles?.en_us ||
                item?.attributes?.titles?.en_jp ||
                "no title found"}
            </Text>
            <Text>{item?.attributes?.description}</Text>
          </View>
        ))}
      </View> */}
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
});
