import React, { useState, useCallback } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { useSearch } from "../hooks/useSearch";
import { ResultsList } from "../components/results-list";
import { SearchBar } from "../components/search-bar/SearchBar";

export const SearchScreen = () => {
  const [term, setTerm] = useState<string>("");

  const { results, getSearchResults, errorMessage } = useSearch(term);

  const filteredSearchingItems = useCallback(
    (query: string) => {
      // console.log(results);
      return results.filter(item => item.price === query);
    },
    [results]
  );

  return (
    <View style={styles.container}>
      <SearchBar
        term={term}
        setTerm={setTerm}
        onTermSubmitted={getSearchResults}
      />
      {errorMessage && <Text>{errorMessage}</Text>}

      <Text>We have found {results.length} results</Text>
      <ScrollView>
        <ResultsList title={"梅"} results={filteredSearchingItems("￥")} />
        <ResultsList title={"竹"} results={filteredSearchingItems("￥￥")} />
        <ResultsList title={"松"} results={filteredSearchingItems("￥￥￥")} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
