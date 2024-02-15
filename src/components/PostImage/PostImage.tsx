import React, { FC } from 'react';
import { View,Text, Button, StyleSheet, Image } from 'react-native';
import { PostImagee } from '../../types';

const PostImage: FC<PostImagee>= ({title,date, url}) =>{
    return(
        <View style={styles.container}>
            <Image source={{ uri: url }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.date}>{date}</Text>
            <View style={styles.buttonContainer}>
                <Button title="View"/>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container:{
        backgroundColor:'rgba(18,39,113,255)',
        borderRadius:20,
        marginBottom:12,
        padding:16,
    },
    title:{
        color:'#fff',
        fontWeight:'bold',
        fontSize:18,
        marginBottom:12,
    },
    date:{
        color:'#fff'
    },
    buttonContainer:{
        alignItems:'flex-end'
    },
    image: {
        width: "100%",
        height: 200,
        borderWidth: 1,
        borderColor: "#fff",
        borderRadius: 32,
      }
});

export default PostImage;