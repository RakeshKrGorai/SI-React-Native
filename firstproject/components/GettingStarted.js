import { Text, View, Button } from "react-native";

export default function GettingStarted({ onSignUpPress }) {
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
      <Button onPress={onSignUpPress} title="Sign Up" color="green" />
    </View>
  );
}
