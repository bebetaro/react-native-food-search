import React, { useCallback } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

type Props = {
  term: string;
  setTerm: (term: string) => void;
  onTermSubmitted: () => Promise<void>;
};

export const SearchBar: React.FC<Props> = props => {
  const onChangeValueText = useCallback(
    (term: string) => {
      props.setTerm(term);
    },
    [props]
  );
  return (
    <View style={styles.root}>
      <Feather name="search" style={styles.searchIcon} />
      <TextInput
        value={props.term}
        onChangeText={onChangeValueText}
        autoCapitalize={"none"}
        autoCorrect={false}
        placeholder={"Search"}
        style={styles.textBar}
        onEndEditing={props.onTermSubmitted}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: "rgba(0,0,0,0.1)",
    flexDirection: "row",
    height: 50,
    borderRadius: 5,
    marginVertical: 10,
    marginHorizontal: 15
  },
  textBar: {
    fontSize: 18,
    flex: 1
  },
  searchIcon: {
    marginHorizontal: 15,
    fontSize: 35,
    alignSelf: "center"
  }
});
