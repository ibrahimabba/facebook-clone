import React, { useEffect } from 'react'
import { View, ScrollView, StyleSheet } from 'react-native'
import Story from './Story'
import { FetchStoriesRequest } from '../../store/actions/storiesAction'
import { useDispatch, useSelector } from "../../hooks/react-redux-hooks";
import StoryAdder from './StoryAdder'
import Colors from '../../constants/Colors';
import { HomeScreenProps } from '../../types';

export default function Stories({navigation, route}: HomeScreenProps) {

    const user = useSelector(state => state.userReducer);
    const stories = useSelector(state => state.storiesReducer);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(FetchStoriesRequest())
    }, [])

    return (
        <View style={styles.container}>
            <ScrollView showsHorizontalScrollIndicator={false} style={styles.stories} horizontal={true}>
                <StoryAdder user={user}/>
                {stories.map((story: any, index: any) => (<Story position={index} key={index} story={story} navigation={navigation} route={route} />))}
            </ScrollView>
        </View >
    )

}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        paddingHorizontal: 5,
        backgroundColor: Colors.dark.card,
        borderColor: '#ddd',
        borderWidth: 0,
        marginVertical: 10
    },
    stories: {
        flexWrap: 'nowrap',
    }
})