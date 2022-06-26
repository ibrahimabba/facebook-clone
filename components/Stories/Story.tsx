import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native'
import navigation from '../../navigation/navigationRef'
import { TabActions } from '@react-navigation/native';


type Props = {
    story: any
    position: number
}
export default function Story({ story, position }: Props) {

    const onPressHandle = () => {
        console.log("click")
        // navigation.navigate("StoryDetail", {
        //     position: position
        // })
    }
    let displayImagePosition = 0
    for (let image of story.images) {
        if (image.viewed) displayImagePosition++
    }
    if (displayImagePosition == story.images.length) displayImagePosition = 0

    const displayImage = story.images[displayImagePosition]

    return (
        <View style={styles.container}>
            <TouchableOpacity activeOpacity={0.8} onPress={onPressHandle}>
                <ImageBackground imageStyle={{ resizeMode: 'cover' }} style={styles.imageBackground} source={{ uri: displayImage.url }}>
                    <Image style={styles.avatar} source={{ uri: story.user.avatar_url }} />
                </ImageBackground>
                <View style={styles.nameWrapper}>
                    <Text style={styles.name}>{story.user.name}</Text>
                </View>
            </TouchableOpacity>

        </View>
    )

}
const styles = StyleSheet.create({
    container: {
        borderRadius: 20,
        overflow: 'hidden',
        marginHorizontal: 5,
    },
    imageBackground: {
        position: 'relative',
        height: 250,
        width: 150,
    },
    avatar: {
        marginTop: 20,
        marginLeft: 20,
        resizeMode: 'cover',
        borderRadius: 50,
        height: 40,
        width: 40,
        borderWidth: 3,
        borderColor: '#ddd',

    },
    nameWrapper: {
        position: 'absolute',
        height: "100%",
        width: "100%",
        top: 0,
        left: 0,
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
    },
    name: {
        color: 'white',
        fontWeight: 'bold',
        marginBottom: 20,
        marginLeft: 10
    }
})