import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import classes from "./LivePost.css";

const livePost = props => {
  let livePostContent = null;

  if (props.selectedPost) {
    livePostContent = (
      <div className={classes.LivePost}>
        <Link to="/">
          <h4>{props.selectedPost}</h4>
        </Link>
      </div>
    );
  }

  return livePostContent;
};

const mapStateToProps = state => {
  return {
    selectedPost: state.posts.selectedPost,
    posts: state.posts.posts
  };
};

export default connect(mapStateToProps)(livePost);
