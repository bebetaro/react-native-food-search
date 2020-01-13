import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from "react-native";
import { withNavigation } from "react-navigation";
import { ResultsDetail } from "../results-detail";

type Props = {
  title: string;
  results: Array<{
    name: string;
    image_url: string;
    rating: number;
    review_count: number;
    id: string;
  }>;
};

export const ResultsList = withNavigation<Props>(
  React.memo(props => {
    if (props.results.length === 0) {
      return null;
    }
    return (
      <View style={styles.container}>
        <Text style={styles.titleStyle}>{props.title}</Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={result => result.id}
          data={props.results}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  props.navigation.navigate("ResultsShow", { id: item.id })
                }
              >
                <ResultsDetail item={item} />
              </TouchableOpacity>
            );
          }}
        />
      </View>
    );
  })
);

const styles = StyleSheet.create({
  container: {
    marginBottom: 5
  },
  titleStyle: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 15
  }
});
