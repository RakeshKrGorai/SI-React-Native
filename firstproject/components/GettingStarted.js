import { Text, View, Button, ImageBackground } from "react-native";

export default function GettingStarted({ onSignUpPress }) {
  const image = require("../assets/getting-started.jpg");

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
            marginLeft: 95,
            marginBottom: 750,
            fontWeight: "bold",
            fontSize: 30,
            fontStyle: "italic",
          }}
        >
          Welcome to our App
        </Text>
        <Button onPress={onSignUpPress} title="Sign Up" color="green" />
      </ImageBackground>
    </View>
  );
}
