import {
  Text,
  View,
  TextInput,
  ImageBackground,
  StyleSheet,
} from "react-native";
import { useState } from "react";
import { Button, Card } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function SignUp({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const image = require("../assets/getting-started.jpg");

  const handleGotoLoginPage = async () => {
    await AsyncStorage.setItem(
      "userData",
      JSON.stringify({ name, email, password })
    );
    navigation.navigate("Login");
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "stretch",
        backgroundColor: "white",
      }}
    >
      <ImageBackground
        source={image}
        resizeMode="cover"
        style={{ flex: 1, justifyContent: "center" }}
      >
        <Text
          style={{
            marginLeft: 130,
            marginTop: 30,
            marginBottom: 150,
            fontWeight: "bold",
            fontSize: 30,
            fontStyle: "italic",
          }}
        >
          Sign Up Page
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Name"
          onChangeText={setName}
          value={name}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter Email"
          onChangeText={setEmail}
          value={email}
        />
        <TextInput
          style={[styles.input, { marginBottom: 200 }]}
          placeholder="Enter Password"
          secureTextEntry={true}
          onChangeText={setPassword}
          value={password}
        />
        <Card.Actions>
          <Button
            onPress={handleGotoLoginPage}
            style={{
              marginRight: 120,
              padding: 5,
              borderRadius: 25,
              marginBottom: 100,
            }}
          >
            Complete Sign Up
          </Button>
        </Card.Actions>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    height: 60,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 25,
  },
});
