import React, { useEffect } from 'react'
import { useSelector, useDispatch } from '../hooks/react-redux-hooks'

import Swiper from 'react-native-swiper'

import StoryDetailItem from '../components/Stories/StoryDetailItem'
import { SetShowingStoryRequest } from '../store/actions/showingStoryActions'
import { StoryDetailScreenProps } from '../types'

export default function StoryDetail({ route, navigation }: StoryDetailScreenProps) {
    const stories = useSelector(state => state.storiesReducer)
    const showingStory = useSelector(state => state.showingStroyReducer)
    const dispatch = useDispatch()
    let swiper = {}
    const { position } = route.params

    const onSwipeRightHandle = () => {
        console.log("right")
    }
    const onSwipeLeftHandle = () => {
        console.log("Left")
    }
    const onIndexChangedHandle = (index: number) => {
        console.log("index", index)
        SetShowingStoryRequest({}, index)
    }

    useEffect(() => {
        SetShowingStoryRequest(stories[position], position)
    }, [])


    return (
        <Swiper ref={(swi: any) => swiper = swi} onIndexChanged={onIndexChangedHandle} index={position} loop={false} showsPagination={false} >
            {stories.map((story: any, index: number) => (
                <StoryDetailItem swiper={swiper} showingStory={showingStory} position={index} key={story.id} storyDetail={story} />
            ))}
        </Swiper>
    )
}
