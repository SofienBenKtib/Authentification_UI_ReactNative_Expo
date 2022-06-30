import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
const Button = () => {
  return (
    <TouchableOpacity style={styles.button}>
      <Entypo
        name="chevron-right"
        size={45}
        color="black"
        style={{
          alignSelf: "center",
          marginVertical: 15,
        }}
      />
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#E9C46A",
    height: 80,
    width: 80,
    borderRadius: 80,
  },
});
