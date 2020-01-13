import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

type Props = {
  item: {
    name: string;
    image_url: string;
    rating: number;
    review_count: number;
  };
};

const ResultsDetail: React.FC<Props> = React.memo(({ item }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: item.image_url }} />
      <Text style={styles.name}>{item.name}</Text>
      <Text>
        {item.rating} Stars, {item.review_count} Reviews
      </Text>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    marginLeft: 15
  },
  image: {
    width: 250,
    height: 120,
    borderRadius: 4,
    marginBottom: 5
  },
  name: {
    fontWeight: "bold"
  }
});

export { ResultsDetail };
