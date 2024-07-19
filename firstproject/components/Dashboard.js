import React, { useContext } from "react";
import { Text } from "react-native";
import { ScrollView, StyleSheet } from "react-native";
import { Card, Title, Paragraph, Button, IconButton } from "react-native-paper";
import { UserContext } from "../UserContext";

const Dashboard = ({ onLogOut, onFavorites, userName, data }) => {
  const { favorites, addFavorite, removeFavorite } = useContext(UserContext);

  const toggleFavorite = (product) => {
    if (favorites.some((item) => item.id === product.id)) {
      removeFavorite(product.id);
    } else {
      addFavorite(product);
    }
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
        Welcome, {userName}
      </Text>

      <ScrollView contentContainerStyle={styles.container}>
        {data.map((item) => (
          <Card key={item.id} style={styles.card}>
            <Card.Cover source={{ uri: item.image }} />
            <Card.Content>
              <Title>{item.title}</Title>
              <Paragraph>{item.description}</Paragraph>
            </Card.Content>
            <Card.Actions>
              <IconButton
                icon={
                  favorites.some((fav) => fav.id === item.id)
                    ? "heart"
                    : "heart-outline"
                }
                onPress={() => toggleFavorite(item)}
              />
            </Card.Actions>
          </Card>
        ))}
      </ScrollView>
      <Card.Actions>
        <Button
          onPress={onLogOut}
          style={{
            marginRight: 150,
            padding: 5,
            borderRadius: 25,
          }}
        >
          Log Out
        </Button>
        <Button
          onPress={onFavorites}
          style={{
            margin: 0,
            padding: 5,
            borderRadius: 25,
          }}
          mode="contained"
        >
          View Favorites
        </Button>
      </Card.Actions>
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

export default Dashboard;
