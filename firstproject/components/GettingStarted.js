import { Text, View, TouchableOpacity, ImageBackground } from "react-native";
import { Button, Card } from "react-native-paper";
export default function GettingStarted({ navigation }) {
  const image = require("../assets/getting-started.jpg");

  const handleGotoSignUpPage = () => {
    navigation.navigate("SignUp");
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
            marginLeft: 95,
            marginBottom: 500,
            fontWeight: "bold",
            fontSize: 30,
            fontStyle: "italic",
          }}
        >
          Welcome to our App
        </Text>
        <Card.Actions>
          <Button
            onPress={handleGotoSignUpPage}
            style={{
              alignItems: "center",
              marginRight: 150,
              padding: 5,
              borderRadius: 25,
            }}
          >
            SIGN UP
          </Button>
        </Card.Actions>
      </ImageBackground>
    </View>
  );
}
