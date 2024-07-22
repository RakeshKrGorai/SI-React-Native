import React, { useContext } from "react";
import { Text, ScrollView, StyleSheet } from "react-native";
import { Card, Title, Paragraph, Button } from "react-native-paper";
import { UserContext } from "../contexts/UserContext";

const Favorites = ({ navigation }) => {
  const { favorites } = useContext(UserContext);

  const handleGotoDashboardPage = () => {
    navigation.navigate("Dashboard");
  };

  return (
    <>
      <Text
        style={{
          marginLeft: 40,
          marginTop: 50,
          fontWeight: "bold",
          fontSize: 30,
          fontStyle: "italic",
        }}
      >
        Your Favorites
      </Text>
      <Card.Actions>
        <Button
          onPress={handleGotoDashboardPage}
          style={{
            margin: 20,
            padding: 5,
            borderRadius: 25,
          }}
        >
          Back to Dashboard
        </Button>
      </Card.Actions>
      <ScrollView contentContainerStyle={styles.container}>
        {favorites.map((item) => (
          <Card key={item.id} style={styles.card}>
            <Card.Cover source={{ uri: item.image }} />
            <Card.Content>
              <Title>{item.title}</Title>
              <Paragraph>{item.description}</Paragraph>
            </Card.Content>
          </Card>
        ))}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    alignItems: "center",
  },
  card: {
    width: "100%",
    marginBottom: 16,
  },
});

export default Favorites;
