import {
  FlatList,
  Text,
  View,
  Button,
  SafeAreaView,
  ScrollView,
  ImageBackground,
} from "react-native";
import Card from "./Card";

export default function Dashboard({ userName, onLogOut, data }) {
  const renderItem = ({ item }) => (
    <Card
      title={item.title}
      description={item.description}
      image={item.image}
    />
  );
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

        {/* <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      /> */}
        <ScrollView>
          {data.map((item) => (
            <Card
              key={item.id}
              title={item.title}
              description={item.description}
              image={item.image}
            />
          ))}
        </ScrollView>
        <Button onPress={onLogOut} title="Log Out" color="red" />
      </ImageBackground>
    </View>
  );
}
