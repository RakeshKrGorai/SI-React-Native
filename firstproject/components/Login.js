import { useState } from "react";
import { Text, View, Button, TextInput, Switch } from "react-native";

export default function Login({ onLogin, email, password }) {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [isEnabled, setIsEnabled] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState("lightgray");
  function checkCredentials() {
    if (email === loginEmail && password === loginPassword) {
      onLogin();
    } else {
      alert("User not found with given credentials!");
    }
  }

  // const image = require("../assets/getting-started.jpg");

  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
    setBackgroundColor((previousState) =>
      previousState === "lightgray" ? "cyan" : "lightgray"
    );
  };

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
          marginBottom: 150,
          fontWeight: "bold",
          fontSize: 30,
          fontStyle: "italic",
        }}
      >
        Login Page
      </Text>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
        style={{ alignSelf: "center", marginBottom: 20 }}
      />
      <TextInput
        style={{
          fontSize: 18,
          height: 60,
          margin: 12,
          borderWidth: 1,
          padding: 10,
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
          marginBottom: 400,
        }}
        placeholder="Enter Password"
        secureTextEntry={true}
        onChangeText={setLoginPassword}
      />

      <Button onPress={checkCredentials} title="Login" color="green" />
    </View>
  );
}
