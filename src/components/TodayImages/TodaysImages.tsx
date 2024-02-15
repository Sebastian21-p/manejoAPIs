import React, { FC } from "react";
import { Text, View, StyleSheet, Image, Button } from "react-native";

import { PostImagee } from "../../types";

const TodaysImage: FC<PostImagee> = ({ date, title, url }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: url }} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.date}>{date}</Text>
      <View style={styles.buttonContainer}>
        <Button title="View" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2c449d",
    marginVertical: 16,
    marginHorizontal: 24,
    borderRadius: 32,
    padding: 16,
  },
  image: {
    width: "100%",
    height: 200,
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 32,
  },
  title: {
    color: "#fff",
    fontSize: 20,
    marginVertical: 12,
    fontWeight: "bold",
  },
  date: {
    color: "#fff",
    fontSize: 15,
  },
  buttonContainer: {
    alignItems: "flex-end",
    borderRadius:20,
  },
});

export default TodaysImage;
