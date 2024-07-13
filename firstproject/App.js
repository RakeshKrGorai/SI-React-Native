import { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
// import { TouchableOpacity } from "react-native-web";

export default function App() {
  const [currentPage, setCurrentPage] = useState("GettingStarted");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  function handleSignUp() {
    setCurrentPage("SignUp");
  }

  function handleLogIn() {
    setCurrentPage("Login");
  }

  function handleDashboard() {
    setCurrentPage("Dashboard");
  }

  function handleLogOut() {
    setCurrentPage("GettingStarted");
  }

  if (currentPage === "GettingStarted") {
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
            marginLeft: 95,
            marginBottom: 750,
            fontWeight: "bold",
            fontSize: 30,
            fontStyle: "italic",
          }}
        >
          Welcome to our App
        </Text>
        <Button onPress={handleSignUp} title="Sign Up" color="green" />
      </View>
    );
  } else if (currentPage === "SignUp") {
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
        />

        <Button onPress={handleLogIn} title="Complete Sign Up" color="green" />
      </View>
    );
  } else if (currentPage === "Login") {
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
          Login Page
        </Text>
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

        <Button
          onPress={email === loginEmail && password === loginPassword}
          title="Login"
          color="green"
        />
      </View>
    );
  } else if (currentPage === "Dashboard") {
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
            marginLeft: 95,
            marginBottom: 750,
            fontWeight: "bold",
            fontSize: 30,
            fontStyle: "italic",
          }}
        >
          Dashboard
        </Text>
        <Button onPress={handleLogOut} title="Log Out" color="red" />
      </View>
    );
  }
}
