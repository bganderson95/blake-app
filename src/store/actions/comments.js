import * as actionTypes from "./actionTypes";
import axios from "../../axios";

//SELECT COMMENT
export const selectComment = postId => {
  return {
    type: actionTypes.SELECT_COMMENT,
    postId: postId
  };
};

//MAKE COMMENT
export const makeCommentStart = () => {
  return {
    type: actionTypes.MAKE_COMMENT_START
  };
};

export const makeCommentSuccess = () => {
  return {
    type: actionTypes.MAKE_COMMENT_SUCCESS
  };
};

export const makeCommentFail = err => {
  return {
    type: actionTypes.MAKE_COMMENT_FAIL,
    err: err
  };
};

export const makeComment = (comment, post) => {
  return dispatch => {
    dispatch(makeCommentStart());
    console.log("COMMENT" + comment);
    const fullComment = {
      ...comment,
      date: new Date(),
      name: "BlAkE",
      post: post
    };
    console.log("Full Comment" + comment);
    axios
      .post("/posts/" + post + "/comments.json", fullComment)
      .then(response => {
        console.log(response);
        dispatch(makeCommentSuccess());
      })
      .catch(err => {
        console.log(err);
        dispatch(makeCommentFail(err));
      });
  };
};
