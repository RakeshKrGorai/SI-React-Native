import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const Card = ({ title, image, description }) => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        {image && <Image source={{ uri: image }} style={styles.image} />}
        <View style={styles.content}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginVertical: 10,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    margin: 5,
    width: "90%",
  },
  image: {
    width: "100%",
    height: 250,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    resizeMode: "cover",
  },
  content: {
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  description: {
    fontSize: 14,
    color: "#444",
    marginBottom: 10,
  },
});

export default Card;
