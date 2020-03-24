import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../shared/utility";

const initialState = {
  posts: [],
  loading: false,
  selectedPost: null
};

//SELECT POST
const selectPost = (state, action) => {
  return updateObject(state, {
    selectedPost: action.postId
  });
};

//FETCH POSTS
const fetchPostsStart = (state, action) => {
  return updateObject(state, {
    loading: true
  });
};

const fetchPostsFail = (state, action) => {
  return updateObject(state, {
    loading: false
  });
};

const fetchPostsSuccess = (state, action) => {
  return updateObject(state, {
    posts: action.posts,
    loading: false
  });
};

//CREATE GROUP
const makePostStart = (state, action) => {
  return updateObject(state, {
    loading: true
  });
};

const makePostFail = (state, action) => {
  return updateObject(state, {
    loading: false
  });
};

const makePostSuccess = (state, action) => {
  return updateObject(state, {
    loading: false
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    //SELECT POST
    case actionTypes.SELECT_POST:
      return selectPost(state, action);
    //MAKE POST
    case actionTypes.MAKE_POST_START:
      return makePostStart(state, action);
    case actionTypes.MAKE_POST_FAIL:
      return makePostFail(state, action);
    case actionTypes.MAKE_POST_SUCCESS:
      return makePostSuccess(state, action);
    //FETCH POSTS
    case actionTypes.FETCH_POSTS_START:
      return fetchPostsStart(state, action);
    case actionTypes.FETCH_POSTS_FAIL:
      return fetchPostsFail(state, action);
    case actionTypes.FETCH_POSTS_SUCCESS:
      return fetchPostsSuccess(state, action);
    //DEFAULT
    default:
      return state;
  }
};

export default reducer;
