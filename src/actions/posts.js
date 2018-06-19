import * as actions from "./types";
import { BASE_URL } from "../env";

export const fetchPosts = () => async dispatch => {
  try {
    const response = await fetch(`${BASE_URL}/posts.json`);
    const posts = await response.json();

    dispatch(fetchPostsSuccess(posts));
  } catch (error) {
    dispatch(fetchPostsFail(error));
  }
};

export const fetchPostsSuccess = posts => ({
  type: actions.FETCH_POSTS_SUCCESS,
  payload: {
    posts
  }
});

export const fetchPostsFail = error => ({
  type: actions.FETCH_POSTS_FAIL,
  payload: {
    error
  }
});
