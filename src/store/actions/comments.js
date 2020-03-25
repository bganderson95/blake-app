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

// //FETCH COMMENTS
// export const fetchCommentsStart = () => {
//   return {
//     type: actionTypes.FETCH_COMMENTS_START
//   };
// };

// export const fetchCommentsSuccess = posts => {
//   return {
//     type: actionTypes.FETCH_COMMENTS_SUCCESS,
//     posts: posts
//   };
// };

// export const fetchCommentsFail = err => {
//   return {
//     type: actionTypes.FETCH_COMMENTS_FAIL,
//     err: err
//   };
// };

// export const fetchComments = group => {
//   return dispatch => {
//     dispatch(fetchCommentsStart());
//     axios
//       .get('/posts.json?orderBy="group"&equalTo="' + group + '"')
//       .then(res => {
//         const fetchedComments = [];
//         for (let key in res.data) {
//           fetchedComments.push({
//             ...res.data[key],
//             id: key
//           });
//         }
//         dispatch(fetchCommentsSuccess(fetchedComments));
//       })
//       .catch(err => {
//         dispatch(fetchCommentsFail(err));
//         console.log("FETCH COMMENTS ERROR: " + err);
//       });
//   };
// };
