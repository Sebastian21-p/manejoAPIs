import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import Header from "../../components/Header";
import fetchApi from "../../utils/fetch";
import TodayImages from "../../components/TodayImages";
import LastFiveDaysImages from "../../components/LastFiveDaysImages";
import { PostImagee } from "../../types";
import {format, sub} from 'date-fns';
import PostImage from './../../components/PostImage/PostImage';


const Home = () => {
  const [todaysImage, setTodaysImage] = useState<PostImagee>();
  const [lastFiveDaysImages, setLastFiveDaysImages] = useState<PostImagee[]>([]);

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

    const loadLast5DaysImages = async() => {
      try{
        const date = new Date();
        const todaysDate = format(sub(date,{days: 1}), 'yyyy-MM-dd');
        const fiveDaysAgoDate = format(sub(date,{days: 5}), 'yyyy-MM-dd')
      
        const lastFiveDaysImageResponse = await fetchApi(
          `&start_date=${fiveDaysAgoDate}&end_date=${todaysDate}`
          );
      
        setLastFiveDaysImages(lastFiveDaysImageResponse);
      }catch(error){
        console.error(error);
      }
    };

    loadTodaysImage().catch(null);
    loadLast5DaysImages().catch(null);
  }, []);
  

  return (
    <View style={styles.container}>
      <Header />
      <TodayImages {...todaysImage} />
      <LastFiveDaysImages postImages={lastFiveDaysImages}/>
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
