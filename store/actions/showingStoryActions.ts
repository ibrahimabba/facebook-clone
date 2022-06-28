import { showingStoryActions } from '../../constants'

export const SetShowingStoryRequest = (story: {[key: string]: any}, position: number) => {
    return (dispatch: any) => {
        const showingStory = {
            ...story,
            position,
        }
        dispatch(SetShowingStorySuccess(showingStory))
    }
}

export const SetShowingStorySuccess = (story: {[key: string]: any}) => {
    return {
        type: showingStoryActions.SET_SHOWING_STORY,
        payload: story
    }
}
