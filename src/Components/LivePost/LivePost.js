import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import classes from "./LivePost.css";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import SkipNextIcon from "@material-ui/icons/SkipNext";

const livePost = props => {
  let livePostContent = null;

  if (props.selectedPost) {
    livePostContent = (
      <div className={classes.LivePost}>
        <Link to="/">
          <h4>{props.selectedPost}</h4>
        </Link>
        <SkipPreviousIcon />
        <PlayArrowIcon className={classes.PlayIcon} />
        <SkipNextIcon />
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
