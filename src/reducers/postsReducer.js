import * as actions from "../actions/types";

const initialState = {
  posts: null,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCH_POSTS_SUCCESS:
      return { ...state, posts: action.payload.posts };
    case actions.FETCH_POSTS_FAIL:
      return { ...state, error: action.payload.error };
    default:
      return state;
  }
};
