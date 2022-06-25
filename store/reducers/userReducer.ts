import { userActions } from '../../constants';
import { Alert } from 'react-native';

const initialState: {
  user: any;
  highlightPhotos: any[];
  friends: any[];
  posts: any[];
} = {
  user: {},
  friends: [],
  highlightPhotos: [],
  posts: [],
};
const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case userActions.LOGIN_REQUEST:
      return { ...state, user: {} };
      break;
    case userActions.LOGIN_SUCCESS:
      return { ...state, user: action.payload };
      break;
    case userActions.LOGIN_FAILURE:
      const { message } = action.error;
      Alert.alert('Error', message);
      return state;
      break;
    case userActions.FETCH_HIGHLIGHT_PHOTOS_REQUEST:
      return { ...state, highlightPhotos: [] };
      break;
    case userActions.FETCH_HIGHLIGHT_PHOTOS_SUCCESS:
      return { ...state, highlightPhotos: [...action.payload] };
      break;
    case userActions.FETCH_HIGHLIGHT_PHOTOS_FAILURE:
      const { message2 } = action.error;
      Alert.alert('Error', message2);
      return state;
      break;
    case userActions.FETCH_FRIENDS_REQUEST:
      return { ...state, friends: [] };
      break;
    case userActions.FETCH_FRIENDS_SUCCESS:
      return { ...state, friends: [...action.payload] };
      break;
    case userActions.FETCH_FRIENDS_FAILURE:
      const { message3 } = action.error;
      Alert.alert('Error', message3);
      return state;
      break;
    case userActions.FETCH_PROFILE_POSTS_REQUEST:
      return { ...state, posts: [] };
      break;
    case userActions.FETCH_PROFILE_POSTS_SUCCESS:
      return { ...state, posts: [...action.payload] };
      break;
    case userActions.FETCH_PROFILE_POSTS_FAILURE:
      const { message4 } = action.error;
      Alert.alert('Error', message4);
      return state;
      break;
    default:
      return state;
  }
};
export default reducer;
