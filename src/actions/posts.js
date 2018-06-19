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

const fetchPostsSuccess = posts => ({
  type: actions.FETCH_POSTS_SUCCESS,
  payload: {
    posts
  }
});

const fetchPostsFail = error => ({
  type: actions.FETCH_POSTS_FAIL,
  payload: {
    error
  }
});

export const createPost = (title, body) => async dispatch => {
  try {
    const response = await fetch(`${BASE_URL}/posts.json`, {
      method: "POST",
      body: JSON.stringify({ title, body })
    });
    const name = await response.json();

    dispatch(createPostSuccess(name, title, body));
  } catch (error) {
    dispatch(fetchPostsFail(error));
  }
};

const createPostSuccess = (name, title, body) => ({
  type: actions.CREATE_POST_SUCCESS,
  payload: {
    name,
    post: {
      title,
      body
    }
  }
});
