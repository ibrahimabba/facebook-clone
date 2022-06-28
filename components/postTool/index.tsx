import React, { useState } from 'react'
import { Text, StyleSheet, View, Image, TextInput, TouchableOpacity } from 'react-native'
import { useSelector } from '../../hooks/react-redux-hooks'
import FontAweSome5 from '@expo/vector-icons/FontAwesome5'
import navigation from '../../navigation/navigationRef'
import Colors from '../../constants/Colors'
const usr = require('../../assets/images/user.png')


type Props = {
    isWriteToPage?: boolean;
    page?: any;
    userX?: any;
    isWriteToAnyOne?: boolean;
}

export default function PostTool({ isWriteToAnyOne, userX, isWriteToPage, page }: Props) {

    const user = useSelector(state => state.userReducer.user)

    const [inputBgColor, setInputBgColor] = useState(Colors.dark.card)


    const onLiveStreamPressHandler = () => {
        //navigation.navigate('LiveStream')
    }
    const onPhotoUploaderPressHandler = () => {
        //navigation.navigate('PhotoChooser')
    }
    const onCheckInPressHandler = () => {
        //navigation.navigate('CheckIn')
    }
    const onFullPostToolPressHandler = () => {
        //navigation.navigate('FullPostTool')
    }
    const onPressPostToAnyOneHandler = () => {
        // navigation.navigate('FullPostTool', {
        //     isPostToAnyOne: true,
        //     userX: userX || page
        // })
    }

    const onPressSharePhotoToAnyOne = () => {
        //navigation.navigate('PhotoChooser')
    }
    return (
        <View style={styles.container}>
            <View style={styles.postToolWrapper}>
                <TouchableOpacity activeOpacity={0.5} style={styles.userAvatarWrapper}>
                    <Image source={user?.avatar_url ? { uri: user?.avatar_url } : usr} style={styles.userAvatar} ></Image>
                </TouchableOpacity>
                <TouchableOpacity onPress={isWriteToAnyOne ? onPressPostToAnyOneHandler : onFullPostToolPressHandler} style={styles.postInputWrapper}>
                    <View style={{ ...styles.postInput, backgroundColor: inputBgColor }}>
                        <Text style={{ color: '#fff' }}>{isWriteToAnyOne || isWriteToPage ? `Write somethings to ${userX?.name || page?.name}` : 'What are you thinking ?'}</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.postOptionsWrapper}>
                {!isWriteToAnyOne && !isWriteToPage &&
                    <TouchableOpacity onPress={onLiveStreamPressHandler} activeOpacity={0.5} style={styles.postOptionItemWrapper}>
                        <View style={styles.postOptionItem}>
                            <FontAweSome5 style={styles.postOptionIcon} name="video" color="red" size={16} />
                            <Text style={{ color: '#fff' }}>Live Stream</Text>
                        </View>
                    </TouchableOpacity>
                }
                <TouchableOpacity onPress={isWriteToAnyOne || isWriteToPage ? onPressPostToAnyOneHandler : onPhotoUploaderPressHandler} activeOpacity={0.5} style={styles.postOptionItemWrapper}>
                    <View style={{ ...styles.postOptionItem, ...styles.postOptionItemMiddle }}>
                        <FontAweSome5 style={styles.postOptionIcon} name={isWriteToAnyOne || isWriteToPage ? 'edit' : 'image'} color="green" size={16} />
                        <Text style={{ color: '#fff' }}>{isWriteToAnyOne || isWriteToPage ? 'Write a post' : 'Photo'}</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={isWriteToAnyOne || isWriteToPage ? onPressSharePhotoToAnyOne : onCheckInPressHandler} activeOpacity={0.5} style={styles.postOptionItemWrapper}>
                    <View style={styles.postOptionItem}>
                        <FontAweSome5 style={styles.postOptionIcon} name={isWriteToAnyOne || isWriteToPage ? 'image' : "map-marker-alt"} color="red" size={16} />
                        <Text style={{ color: '#fff' }}>{isWriteToAnyOne || isWriteToPage ? 'Share Photos' : 'Check in'}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        //borderTopColor: '#ddd',
        borderTopWidth: 0.3,
        //borderBottomColor: '#ddd',
        borderBottomWidth: 0.3,
        marginTop: 10,
        backgroundColor: Colors.dark.card
    },
    postToolWrapper: {
        padding: 10,
        flexDirection: 'row'
    },
    postOptionsWrapper: {
        flexDirection: 'row',
        height: 40,
        borderTopColor: '#ddd',
        borderTopWidth: 0.3,
        alignItems: 'center'
    },
    postOptionItemWrapper: {
        flex: 1,
        height: 40,
        justifyContent: 'center'
    },
    postOptionItem: {
        width: "100%",
        flexDirection: 'row',
        justifyContent: 'center'
    },
    postOptionItemMiddle: {
        borderRightColor: '#ddd',
        borderRightWidth: 0.3,
        borderLeftColor: '#ddd',
        borderLeftWidth: 0.3
    },
    postOptionIcon: {
        marginRight: 5
    },
    postInputWrapper: {
        borderRadius: 48,
        flex: 1,
        marginLeft: 5,
    },
    postInput: {
        justifyContent: 'center',
        borderRadius: 48,
        height: 40,
        width: "100%",
        borderColor: "#ddd",
        paddingHorizontal: 10,
        borderWidth: 0.3
    },
    userAvatar: {
        width: 40,
        height: 40,
        borderRadius: 50,
    },
    userAvatarWrapper: {

    }
})
