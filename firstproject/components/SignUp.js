import { Text, View, Button, TextInput } from "react-native";
import { useState } from "react";

export default function SignUp({ onCompletion }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "stretch",
        backgroundColor: "white",
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
        Sign Up Page
      </Text>
      <TextInput
        style={{
          fontSize: 18,
          height: 60,
          margin: 12,
          borderWidth: 1,
          padding: 10,
        }}
        placeholder="Enter Name"
        onChangeText={setName}
        value={name}
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
        onChangeText={setEmail}
        value={email}
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
        onChangeText={setPassword}
        value={password}
      />

      <Button
        onPress={() => onCompletion(name, email, password)}
        title="Complete Sign Up"
        color="green"
      />
    </View>
  );
}
