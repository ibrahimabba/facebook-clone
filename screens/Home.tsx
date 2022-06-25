import React, { useEffect } from 'react';
import { StyleSheet, View, ScrollView, Dimensions } from 'react-native';
import { useDispatch, useSelector } from "../hooks/react-redux-hooks";
import { FetchPostsRequest } from '../store/actions/postsActions'
import { LoginRequest } from '../store/actions/userActions'
import PostTool from '../components/postTool'
//import Stories from '../components/Stories'
//import RecommendFriends from '../components/RecommendFriends'
//import Item from '../components/Item'c

export default function Home() {
    const posts = useSelector(state => state.postsReducer);
    const user = useSelector(state => state.userReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(FetchPostsRequest())
        dispatch(LoginRequest("vucms", "vucms"))
    }, [])

    if (posts.length === 0) return <View></View>

    return (
        <View>
            <ScrollView bounces={false}>
                <PostTool></PostTool>
                {/* <Stories></Stories> */}
                {/* {data.map((item: any, index: any) => (
                    <View key={index}>
                        {index === 1 && <RecommendFriends ></RecommendFriends>}
                        <Item item={item} key={index} ></Item>
                    </View>
                ))} */}
            </ScrollView>
        </View >
    )
}

const screenHeight = Math.round(Dimensions.get('window').height);
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',

    },
    countTxt: {
        fontSize: 200,
        textAlign: 'center',
        lineHeight: screenHeight - 170,
        width: "100%",
        height: screenHeight - 170
    },
    button: {
        width: "100%",
        height: 50,
        backgroundColor: 'black',
    },
    buttonText: {
        fontSize: 20,
        color: "white",
        textAlign: "center",
        lineHeight: 50
    }
});
