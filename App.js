import React from "react";
import { View, StyleSheet } from "react-native";
import Counter from "./Counter";

const App = () => {
  return (
    <View style={styles.container}>
      <Counter initialValue={0} />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lavender",
  },
});
