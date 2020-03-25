import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../shared/utility";

const initialState = {
  loading: false
};

// //FETCH COMMENTS
// const fetchCommentsStart = (state, action) => {
//   return updateObject(state, {
//     loading: true
//   });
// };

// const fetchCommentsFail = (state, action) => {
//   return updateObject(state, {
//     loading: false
//   });
// };

// const fetchCommentsSuccess = (state, action) => {
//   return updateObject(state, {
//     posts: action.posts,
//     loading: false
//   });
// };

//MAKE COMMENT
const makeCommentStart = (state, action) => {
  return updateObject(state, {
    loading: true
  });
};

const makeCommentFail = (state, action) => {
  return updateObject(state, {
    loading: false
  });
};

const makeCommentSuccess = (state, action) => {
  return updateObject(state, {
    loading: false
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    //MAKE COMMENT
    case actionTypes.MAKE_COMMENT_START:
      return makeCommentStart(state, action);
    case actionTypes.MAKE_COMMENT_FAIL:
      return makeCommentFail(state, action);
    case actionTypes.MAKE_COMMENT_SUCCESS:
      return makeCommentSuccess(state, action);
    // //FETCH COMMENTS
    // case actionTypes.FETCH_COMMENTS_START:
    //   return fetchCommentsStart(state, action);
    // case actionTypes.FETCH_COMMENTS_FAIL:
    //   return fetchCommentsFail(state, action);
    // case actionTypes.FETCH_COMMENTS_SUCCESS:
    //   return fetchCommentsSuccess(state, action);
    //DEFAULT
    default:
      return state;
  }
};

export default reducer;
