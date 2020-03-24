import React from "react";
import * as actions from "../../../store/actions/index";
import { connect } from "react-redux";
import classes from "./Post.css";

const Post = props => {
  let attachedClasses = [classes.Post];

  if (props.id === props.selectedPost) {
    attachedClasses = [classes.Post, classes.Selected];
  }

  return (
    <li
      className={attachedClasses.join(" ")}
      onClick={() => props.onSelectPost(props.id)}
    >
      <div>
        <h4>{props.post}</h4>
        <p>{props.date}</p>
      </div>
    </li>
  );
};

const mapStateToProps = state => {
  return {
    selectedPost: state.posts.selectedPost
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSelectPost: postId => dispatch(actions.selectPost(postId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);
