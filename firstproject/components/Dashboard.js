import React from "react";
import { Text } from "react-native";
import { ScrollView, StyleSheet } from "react-native";
import { Card, Title, Paragraph, Button } from "react-native-paper";

const Dashboard = ({ onLogOut, userName, data }) => {
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
