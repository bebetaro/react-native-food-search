import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import { withNavigation } from "react-navigation";
import { api } from "../api";

export const ResultsShowScreen = withNavigation<{}>(({ navigation }) => {
  const [results, setResults] = useState<{ name: string; photos: string[] }>({
    name: "",
    photos: []
  });
  const id = navigation.getParam("id");
  const getResults = (path: string) => {
    api.get(`/${path}`).then(response => setResults(response.data));
  };

  useEffect(() => {
    getResults(id);
  }, [id]);
  return (
    <View>
      <Text>{results.name}</Text>
      <FlatList
        data={results.photos}
        keyExtractor={photo => photo}
        renderItem={({ item }) => {
          return <Image style={styles.images} source={{ uri: item }} />;
        }}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  images: {
    height: 200,
    width: 300
  }
});
