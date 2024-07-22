import React, { useContext, useState, useEffect } from "react";
import { Text } from "react-native";
import { ScrollView, StyleSheet } from "react-native";
import { Card, Title, Paragraph, Button, IconButton } from "react-native-paper";
import { UserContext } from "../contexts/UserContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Dashboard = ({ navigation }) => {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const fetchUserDetails = async () => {
      const userDataString = await AsyncStorage.getItem("userData");
      const userData = userDataString ? JSON.parse(userDataString) : {};
      setUserName(userData.name);
    };
    fetchUserDetails();
  }, []);
  const handleGotoFavoritesPage = async () => {
    navigation.navigate("Favorites");
  };

  const handleLogout = () => {
    navigation.navigate("GettingStarted");
  };
  const { favorites, addFavorite, removeFavorite } = useContext(UserContext);

  const toggleFavorite = (product) => {
    if (favorites.some((item) => item.id === product.id)) {
      removeFavorite(product.id);
    } else {
      addFavorite(product);
    }
  };

  const data = [
    {
      id: "1",
      title: "Google Pixel 7 Pro",
      image:
        "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/b/p/s/-original-imaggsuemmztbghp.jpeg?q=70&crop=false%202x,%20https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/b/p/s/-original-imaggsuemmztbghp.jpeg?q=70&crop=false%201",
      description: "12 GB RAM | 128 GB ROM",
    },
    {
      id: "2",
      title: "Google Pixel 8 Pro",
      image:
        "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/e/f/m/-original-imagtwh5rbhf7ngh.jpeg?q=70&crop=false",
      description: "12 GB RAM | 128 GB ROM",
    },
    {
      id: "3",
      title: "Google Pixel 8 Pro",
      image:
        "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/e/f/m/-original-imagtwh5rbhf7ngh.jpeg?q=70&crop=false",
      description: "12 GB RAM | 128 GB ROM",
    },
    {
      id: "4",
      title: "Google Pixel 7 Pro",
      image:
        "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/b/p/s/-original-imaggsuemmztbghp.jpeg?q=70&crop=false%202x,%20https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/b/p/s/-original-imaggsuemmztbghp.jpeg?q=70&crop=false%201",
      description: "12 GB RAM | 128 GB ROM",
    },
    {
      id: "5",
      title: "Google Pixel 8 Pro",
      image:
        "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/e/f/m/-original-imagtwh5rbhf7ngh.jpeg?q=70&crop=false",
      description: "12 GB RAM | 128 GB ROM",
    },
    {
      id: "6",
      title: "Google Pixel 8 Pro",
      image:
        "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/e/f/m/-original-imagtwh5rbhf7ngh.jpeg?q=70&crop=false",
      description: "12 GB RAM | 128 GB ROM",
    },
  ];

  return (
    <>
      <Text
        style={{
          marginLeft: 40,
          marginTop: 15,
          fontWeight: "bold",
          fontSize: 30,
        }}
      >
        Welcome, {userName}!
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
          onPress={handleLogout}
          style={{
            marginRight: 150,
            padding: 5,
            borderRadius: 25,
          }}
        >
          Log Out
        </Button>
        <Button
          onPress={handleGotoFavoritesPage}
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
