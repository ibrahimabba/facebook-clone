import { actionStories } from '../../constants';
import { Alert } from 'react-native';

const initialState: any = [];

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actionStories.FETCH_STORIES_REQUEST:
      state = initialState;
      return state;
      break;
    case actionStories.FETCH_STORIES_SUCCESS:
      state = action.payload;
      return state;
      break;
    case actionStories.FETCH_STORIES_FAILURE:
      const { message } = action.error;
      Alert.alert('Erorr', message);
      return initialState;
      break;
    default:
      return state;
  }
};
export default reducer;
