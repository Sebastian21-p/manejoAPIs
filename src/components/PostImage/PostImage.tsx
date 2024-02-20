import React, { FC } from 'react';
import { View,Text, Button, StyleSheet, Image } from 'react-native';
import { PostImagee, RootStackParams } from '../../types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from "@react-navigation/native";

type PostImageNavigationProps = NativeStackNavigationProp<RootStackParams, 'Detail'>

const PostImage: FC<PostImagee>= ({title,date, url, explanation}) =>{
    const {navigate} = useNavigation<PostImageNavigationProps>();

    const handleViewPress=() =>{
        navigate('Detail', {title,date,url,explanation})
    }

    return(
        <View style={styles.container}>
            <Image source={{ uri: url }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.date}>{date}</Text>
            <View style={styles.buttonContainer}>
                <Button title="View" onPress={handleViewPress}/>
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