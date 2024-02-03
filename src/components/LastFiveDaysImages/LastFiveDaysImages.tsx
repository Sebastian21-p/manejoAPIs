import React, { FC } from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import { PostImagee as PostImageTypes} from "../../types";
import PostImage from "../PostImage";


const LastFiveDaysImages: FC<{postImages?:PostImageTypes[]}> = ({postImages}) => {
  console.log();
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Last 5 Days</Text>
      </View>
      <ScrollView style={styles.content}>
        {postImages?.map(postImage=>(
            <PostImage key={`post-image-${postImage.title}`} {...postImage}/>
        ))}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 8,
  },
  content:{
    paddingHorizontal:8,
  },
  title: {
    color: "#fff",
    fontSize: 16,
    marginBottom: 18,
  },
});

export default LastFiveDaysImages;
