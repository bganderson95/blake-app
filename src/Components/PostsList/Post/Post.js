import React, { Component } from "react";
import * as actions from "../../../store/actions/index";
import { connect } from "react-redux";
import CommentsList from "../../Comments/CommentsList";
import { fixTime } from "../../../shared/utility";

import IconButton from "@material-ui/core/IconButton";

import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
// import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ChatOutlinedIcon from "@material-ui/icons/ChatOutlined";
import ChatIcon from "@material-ui/icons/Chat";
import HeadsetOutlinedIcon from "@material-ui/icons/HeadsetOutlined";
// import HeadsetIcon from "@material-ui/icons/Headset";
import AlbumArt from "../../../assets/images/Graduation.jpg";
import classes from "./Post.css";

class Post extends Component {
  state = {
    showComments: false
  };

  commentToggleHandler = () => {
    this.setState(prevState => ({
      showComments: !prevState.showComments
    }));
  };

  selectPostHandler = () => {
    if (this.props.id !== this.props.selectedPost) {
      this.props.onSelectPost(this.props.id);
      this.setState({ showComments: false });
    }
  };

  render() {
    let attachedClasses = [classes.Post];

    if (this.props.id === this.props.selectedPost) {
      attachedClasses = [classes.Post, classes.Selected];
    }

    return (
      <li
        className={attachedClasses.join(" ")}
        onClick={() => this.selectPostHandler()}
      >
        <div className={classes.PostContent}>
          <img className={classes.Cover} src={AlbumArt} alt="album art" />
          <div className={classes.SongDetails}>
            <h4>{this.props.post}</h4>
            <p>Blake Anderson</p>
            <div className={classes.Controls}>
              <IconButton>
                <ThumbUpAltOutlinedIcon />
              </IconButton>

              <IconButton onClick={() => this.commentToggleHandler()}>
                {/* {this.state.showComments ? <ChatIcon /> : <ChatOutlinedIcon />} */}
                <ChatOutlinedIcon />
                {this.props.comments ? (
                  <p>({Object.values(this.props.comments).length})</p>
                ) : null}
              </IconButton>

              <IconButton>
                <HeadsetOutlinedIcon />
              </IconButton>
            </div>
          </div>
          <div className={classes.PostDetails}>
            <h4>{fixTime(this.props.date)}</h4>
            <p>BA</p>
          </div>
        </div>
        {this.state.showComments &&
        this.props.id === this.props.selectedPost ? (
          <div>
            <CommentsList comments={this.props.comments} post={this.props.id} />
          </div>
        ) : null}
      </li>
    );
  }
}

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
