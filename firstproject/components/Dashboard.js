import { Text, View, Button, SafeAreaView } from "react-native";
import Card from "./Card";

export default function Dashboard({ userName, onLogOut }) {
  const data = [];

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
          fontWeight: "bold",
          fontSize: 30,
          fontStyle: "italic",
        }}
      >
        Dashboard
      </Text>
      <Text
        style={{
          marginLeft: 95,
          marginTop: 20,
          fontWeight: "bold",
          fontSize: 20,
          fontStyle: "italic",
        }}
      >
        Welcome, {userName}
      </Text>
      <SafeAreaView>
        <Card
          title="Google Pixel 7 Pro"
          image="https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/b/p/s/-original-imaggsuemmztbghp.jpeg?q=70&crop=false%202x,%20https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/b/p/s/-original-imaggsuemmztbghp.jpeg?q=70&crop=false%201"
          description="12 GB RAM | 128 GB ROM"
        />

        <Card
          title="Google Pixel 8 Pro"
          image="https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/e/f/m/-original-imagtwh5rbhf7ngh.jpeg?q=70&crop=false"
          description="12 GB RAM | 128 GB ROM"
        />
      </SafeAreaView>

      <Button onPress={onLogOut} title="Log Out" color="red" />
    </View>
  );
}
