import React, { ___ } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const Counter = ({ initialValue }) => {
  // TODO: Use the useState hook to manage the counter state

  // TODO: Implement the incrementCounter function that will increase the counter value

  return (
    <View>
      {/* TODO: Display the counter value */}

      {/* TODO: Implement a button to increment the counter */}
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  text: {
    fontSize: 36,
    fontWeight: "800",
  },
  button: {
    marginTop: 40,
    backgroundColor: "tomato",
    padding: 20,
    borderRadius: 20,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 28,
  },
});
