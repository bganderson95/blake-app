import * as actionTypes from "./actionTypes";
import axios from "../../axios";

//SELECT POST
export const selectPost = postId => {
  return {
    type: actionTypes.SELECT_POST,
    postId: postId
  };
};

//CREATE GROUP
export const makePostStart = () => {
  return {
    type: actionTypes.MAKE_POST_START
  };
};

export const makePostSuccess = () => {
  return {
    type: actionTypes.MAKE_POST_SUCCESS
  };
};

export const makePostFail = err => {
  return {
    type: actionTypes.MAKE_POST_FAIL,
    err: err
  };
};

export const makePost = (post, group) => {
  return dispatch => {
    dispatch(makePostStart());
    console.log("POST" + post);
    const fullPost = {
      ...post,
      date: new Date(),
      group: group
    };
    console.log("Full Post" + post);
    axios
      .post("/posts.json", fullPost)
      .then(response => {
        console.log(response);
        dispatch(makePostSuccess());
        dispatch(fetchPosts(group));
      })
      .catch(err => {
        console.log(err);
        dispatch(makePostFail(err));
      });
  };
};

//FETCH POSTS
export const fetchPostsStart = () => {
  return {
    type: actionTypes.FETCH_POSTS_START
  };
};

export const fetchPostsSuccess = posts => {
  return {
    type: actionTypes.FETCH_POSTS_SUCCESS,
    posts: posts
  };
};

export const fetchPostsFail = err => {
  return {
    type: actionTypes.FETCH_POSTS_FAIL,
    err: err
  };
};

export const fetchPosts = group => {
  return dispatch => {
    dispatch(fetchPostsStart());
    axios
      .get('/posts.json?orderBy="group"&equalTo="' + group + '"')
      .then(res => {
        const fetchedPosts = [];
        for (let key in res.data) {
          fetchedPosts.push({
            ...res.data[key],
            id: key
          });
        }
        dispatch(fetchPostsSuccess(fetchedPosts));
      })
      .catch(err => {
        dispatch(fetchPostsFail(err));
        console.log("FETCH POSTS ERROR: " + err);
      });
  };
};
