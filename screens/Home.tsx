import { StyleSheet, View, ScrollView, Dimensions } from 'react-native';
import { useGetPostsQuery } from '../store/services/posts'
import { useAppSelector } from '../hooks/react-redux-hooks';
//import PostTool from '../components/PostTool'
//import Stories from '../components/Stories'
//import RecommendFriends from '../components/RecommendFriends'
//import Item from '../components/Item'

export default function Home() {
    const { isLoading, error, isFetching, isSuccess, data, isError } = useGetPostsQuery()
    const postsReducer = useAppSelector(state => state.postsReducer)

    if (!isLoading && !isFetching) {
        console.log(data)
        console.log('reducer', postsReducer)
    }

    //if (data.length === 0) return <View></View>
    return (
        <View>
            <ScrollView bounces={false}>
                {/* <PostTool></PostTool> */}
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
