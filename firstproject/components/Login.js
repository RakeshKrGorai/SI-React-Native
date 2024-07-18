import React, { useState } from "react";
import { Text, View, TextInput } from "react-native";
import { Button, Card } from "react-native-paper";

export default function Login({ onLogin, email, password }) {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("lightgray");

  function checkCredentials() {
    if (email === loginEmail && password === loginPassword) {
      onLogin();
    } else {
      alert("User not found with given credentials!");
    }
  }

  function getRandomColor() {
    const hexChars = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += hexChars[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  function changeColor() {
    setBackgroundColor(getRandomColor());
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "stretch",
        backgroundColor: backgroundColor,
      }}
    >
      <Text
        style={{
          marginLeft: 130,
          marginTop: 30,
          marginBottom: 70,
          fontWeight: "bold",
          fontSize: 30,
          fontStyle: "italic",
        }}
      >
        Login Page
      </Text>
      <Card.Actions>
        <Button
          onPress={changeColor}
          mode="contained"
          style={{
            marginRight: 130,
            padding: 5,
            borderRadius: 25,
            marginBottom: 0,
          }}
        >
          Change Color
        </Button>
      </Card.Actions>
      <TextInput
        style={{
          fontSize: 18,
          height: 60,
          margin: 12,
          borderWidth: 1,
          padding: 10,
          borderRadius: 25,
        }}
        placeholder="Enter Email"
        onChangeText={setLoginEmail}
      />
      <TextInput
        style={{
          fontSize: 18,
          height: 60,
          margin: 12,
          borderWidth: 1,
          padding: 10,
          marginBottom: 100,
          borderRadius: 25,
        }}
        placeholder="Enter Password"
        secureTextEntry={true}
        onChangeText={setLoginPassword}
      />

      <Card.Actions>
        <Button
          onPress={checkCredentials}
          style={{
            marginRight: 150,
            padding: 5,
            borderRadius: 25,
            marginBottom: 20,
          }}
        >
          Log In
        </Button>
      </Card.Actions>
    </View>
  );
}
