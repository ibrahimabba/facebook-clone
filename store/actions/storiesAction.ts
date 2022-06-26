import { actionStories } from '../../constants';
import axios from 'axios';

const taskURI = '/stories?_expand=user';

export const FetchStoriesRequest = () => {
  return (dispatch: any) => {
    dispatch(FetchDefaultState());
    axios
      .get(taskURI)
      .then((v) => {
        const stories = v.data;
        dispatch(FetchStoriesSuccess(stories));
      })
      .catch((error) => {
        dispatch(FetchStoriesFailure(error));
      });
  };
};
const FetchDefaultState = () => {
  return {
    type: actionStories.FETCH_STORIES_REQUEST,
  };
};
export const FetchStoriesFailure = (error: any) => {
  return {
    type: actionStories.FETCH_STORIES_FAILURE,
    error,
  };
};
export const FetchStoriesSuccess = (stories: any) => {
  return {
    type: actionStories.FETCH_STORIES_SUCCESS,
    payload: stories,
  };
};
