import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Button from "../Components/Button";
const screenHeight = Dimensions.get("screen").height;
const Login = () => {
  return (
    <View style={{ backgroundColor: "#2A9D8F" }}>
      <View style={styles.header}>
        <Text style={styles.title}>MySporShop</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.formWrapper}>
          <View style={styles.inputWrapper}>
            <Text style={styles.inputText}>Username : </Text>
            <TextInput style={styles.input} />

            <Text style={styles.inputText}>Username : </Text>
            <TextInput style={styles.input} />
          </View>
          <View style={styles.buttonWrapper}>
            <Button />
          </View>
          <View style={styles.textWrapper}>
            <TouchableOpacity>
              <Text style={styles.passwordAccount}>I forgot my password</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.passwordAccount}>Create an account</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  header: {
    padding: 60,
    alignContent: "center",
    alignItems: "center",
    backgroundColor: "#2A9D8F",
  },
  title: {
    color: "#E9C46A",
    fontWeight: "700",
    fontSize: 35,
    letterSpacing: 0.26,
  },
  body: {
    backgroundColor: "#264653",
    width: "100%",
    height: screenHeight,
    borderTopLeftRadius: 45,
    borderTopEndRadius: 45,
    marginTop: 45,
  },
  formWrapper: {
    padding: 55,
    marginTop: 35,
  },
  inputText: {
    color: "#E9C46A",
    fontSize: 23,
  },
  input: {
    borderBottomWidth: 4,
    borderBottomColor: "#E76F51",
    padding: 5,
    marginBottom: 20,
  },
  buttonWrapper: {
    marginTop: 25,
    alignContent: "center",
    alignItems: "center",
  },
  textWrapper: {
    marginTop: 15,
    padding: 35,
    textAlign: "center",
  },
  passwordAccount: {
    fontSize: 20,
    color: "#E9C46A",
    marginBottom: 15,
  },
});
