import { postsActions } from '.././../constants';
import { Alert } from 'react-native';

const initialState: any[] = [];

const reducer = (state = initialState, action: { [key: string]: any }) => {
  switch (action.type) {
    case postsActions.FETCH_POSTS_REQUEST:
      state = initialState;
      return state;
      break;
    case postsActions.FETCH_POSTS_SUCCESS:
      state = action.payload;
      return state;
      break;
    case postsActions.FETCH_POSTS_FAILURE:
      const { message } = action.error;
      Alert.alert('Error', message);
      state = initialState;
      return state;
      break;
    default:
      return state;
  }
};
export default reducer;
