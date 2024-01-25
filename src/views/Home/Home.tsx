import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import Header from "../../components/Header";
import fetchApi from "../../utils/fetch";
import TodayImages from "../../components/TodayImages";
import { PostImage } from "../../types";


const Home = () => {
  const [todaysImage, setTodaysImage] = useState<PostImage>();

  useEffect(() => {
    const loadTodaysImage = async () => {
      try {
        const todaysImageResponse = await fetchApi();
        setTodaysImage(todaysImageResponse);
      } catch (error) {
        console.log(error);
        setTodaysImage({});
      }
    };
    loadTodaysImage().catch(null);
  }, []);
  
console.log(todaysImage);

  return (
    <View style={styles.container}>
      <Header />
      <TodayImages {...todaysImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
});

export default Home;
