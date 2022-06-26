import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import ScaledImage from '../ScaledImage'
import Icon from '@expo/vector-icons/FontAwesome5'
import navigation from '../../navigation/navigationRef'
import FontAwesome5Icon from '@expo/vector-icons/FontAwesome5'
import { permission } from '../../constants'
import Colors from '../../constants/Colors'


type Props = {
    item: any,
    user?: any,
}
export default function Item({ item, user }: Props) {

    const onPressHandle = () => {
        const { comments } = item
        navigation.navigate('Comments', {
            comments
        })
    }
    const onPressPostOptionsIconHandler = () => {
        navigation.navigate('PostOptions', {
            postDetail: item
        })
    }
    const onPressPostImageHandler = (id: any) => {
        // navigation.navigate('PostDetail', {
        //     id
        // })
    }
    const onPressShareHandler = () => {
        // navigation.navigate('SharePost', {
        //     id: item.id
        // })
    }
    const onPressProfileHandler = (userId: any) => {
        // if (userId === user.id) {
        //     return navigation.navigate('Profile')
        // }
        // navigation.push('ProfileX', {
        //     userId
        // })
    }

    return (
        <View style={styles.item}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.customListView}>
                    <Image style={styles.avatar} source={{ uri: item.user?.avatar_url }}></Image>
                    <View style={styles.infoWrapper}>
                        <View style={styles.namesWrapper}>
                            <TouchableOpacity onPress={() => onPressProfileHandler(item.user?.id)}>
                                <Text style={{ fontSize: 16, fontWeight: '500', color: Colors.light.background }}>{item.user?.name}</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.extraInfoWrapper}>
                            <Text style={{ color: '#333', fontSize: 14 }}>{item.create_at}</Text>
                            <Text style={{ fontSize: 16, marginHorizontal: 5 }}>·</Text>
                            {item.permission == permission.PUBLIC && (
                                <FontAwesome5Icon color='#333' name="globe-asia" />
                            )}
                            {item.permission == permission.SETTING && (
                                <FontAwesome5Icon color='#333' name="cogs" />
                            )}
                            {item.permission == permission.GROUP && (
                                <FontAwesome5Icon color='#333' name="newspaper" />
                            )}
                        </View>
                    </View>
                </View>
                <TouchableOpacity onPress={onPressPostOptionsIconHandler} style={{ width: 25, alignItems: 'center' }}>
                    <Icon name="ellipsis-h" color={Colors.light.background}></Icon>
                </TouchableOpacity>
            </View>
            <View style={styles.contentContainer}>
                <Text style={styles.paragraph}>{item.content}</Text>
            </View>
            <TouchableOpacity onPress={() => onPressPostImageHandler(item.id)}>
                <View style={styles.imageContainer}>
                    <ScaledImage height={300} source={item.image}></ScaledImage>
                </View>
            </TouchableOpacity>
            <View style={styles.reactionContainer}>
                <TouchableOpacity><Icon
                    name="thumbs-up"
                    color="#318bfb"
                    backgroundColor="#fff"
                    style={styles.reactionIcon}
                ></Icon></TouchableOpacity>
                <TouchableOpacity><Icon
                    name="heart"
                    color="#e8304a"
                    backgroundColor="white"
                    style={styles.reactionIcon}
                ></Icon></TouchableOpacity>
                <TouchableOpacity><Icon
                    name="grin-squint"
                    color="#f7ca51"
                    backgroundColor="white"
                    style={styles.reactionIcon}
                ></Icon></TouchableOpacity>
                <TouchableOpacity><Icon
                    name="surprise"
                    color="#f7ca51"
                    backgroundColor="white"
                    style={styles.reactionIcon}
                ></Icon></TouchableOpacity>
                <TouchableOpacity><Icon
                    name="sad-tear"
                    color="#f7ca51"
                    backgroundColor="white"
                    style={styles.reactionIcon}
                ></Icon></TouchableOpacity>
                <TouchableOpacity><Icon
                    lineBreakMode={false}
                    name="angry"
                    color="#dc4311"
                    backgroundColor="white"
                    style={styles.reactionIcon}
                ></Icon></TouchableOpacity>
                <TouchableOpacity onPress={onPressHandle}><Icon
                    lineBreakMode={false}
                    name="comment-alt"
                    color="gray"
                    backgroundColor="white"
                    style={{ ...styles.reactionIcon, fontSize: 14 }}
                ><Text style={{ fontSize: 12 }}> {item.comments.length} comments</Text></Icon></TouchableOpacity>
                <TouchableOpacity onPress={onPressShareHandler} style={styles.shareIcon}><Icon name="share-alt"
                    color="gray" ><Text style={{ fontSize: 12, textAlignVertical: 'center' }}> Share</Text></Icon></TouchableOpacity>
            </View>
            <View style={styles.commentContainer}>
                <Image source={{ uri: user?.avatar_url }} style={styles.commentAvatar}></Image>
                <View style={styles.commentInput}>
                    <TouchableOpacity onPress={onPressHandle} style={styles.commentInputWrapper}>
                        <Text>Comment...</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity><Icon style={styles.btnSendComment} name="paper-plane" color="gray"></Icon></TouchableOpacity>
            </View>
        </View>
    )

}

const screenWidth = Math.round(Dimensions.get('window').width);
const styles = StyleSheet.create({
    customListView: {
        padding: 15,
        width: screenWidth - 40,
        flexDirection: 'row'
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 50
    },
    infoWrapper: {
        marginLeft: 8
    },
    namesWrapper: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    extraInfoWrapper: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    item: {
        backgroundColor: Colors.dark.card,
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowOffset: { height: 0, width: 0 },
        marginBottom: 10
    },
    commentInputWrapper: {
        width: "100%",
        height: "100%",
        justifyContent: 'center',
        borderRadius: 20,
        paddingHorizontal: 15
    },
    paragraph: {
        color: Colors.light.background,
        fontSize: 14
    },
    contentContainer: {
        paddingHorizontal: 15
    },
    imageContainer: {
        marginTop: 5,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    reactionContainer: {
        position: 'relative',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignItems: 'center'
    },
    reactionIcon: {
        fontSize: 20,
        padding: 10
    },
    shareIcon: {
        position: 'absolute',
        fontSize: 14,
        padding: 10,
        right: 0
    },
    commentContainer: {
        flexDirection: 'row',
        padding: 10,
        borderColor: "red",
        borderStyle: 'dashed',
        flexWrap: 'nowrap'
    },
    commentAvatar: {
        width: 30,
        height: 30,
        borderRadius: 50
    },
    commentInput: {
        borderWidth: 0.5,
        borderColor: 'gray',
        borderRadius: 20,
        marginLeft: 10,
        height: 30,
        width: screenWidth - 15 * 2 - 60,
    },
    btnSendComment: {
        width: 30,
        height: 30,
        textAlign: 'center',
        lineHeight: 30
    }
})