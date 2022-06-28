import { showingStoryActions } from '../../constants'

const initialState = {}

const reducer = (state = initialState, action: any) => {

    switch (action.type) {
        case showingStoryActions.SET_SHOWING_STORY_REQUEST:
            state = initialState
            return state
            break
        case showingStoryActions.SET_SHOWING_STORY:
            const { payload } = action
            state = payload
            return state
            break
        default:
            return state
    }
}
export default reducer