import React, { Component } from "react";
import { connect } from "react-redux";
import classes from "./PostsList.css";
import Post from "./Post/Post";
import Spinner from "../UI/Spinner/Spinner";
import * as actions from "../../store/actions/index";

class PostsList extends Component {
  componentDidMount() {
    this.props.onFetchPosts(this.props.selectedGroup);
  }

  componentDidUpdate(prevProps) {
    if (this.props.selectedGroup !== prevProps.selectedGroup) {
      this.props.onFetchPosts(this.props.selectedGroup);
    }
  }

  render() {
    let listContent = (
      <div>
        <p>POSTS</p>
        <ul className={classes.List}>
          {this.props.posts.map(post => (
            <Post
              key={post.id}
              id={post.id}
              post={post.post}
              date={post.date}
              comments={post.comments}
            />
          ))}
        </ul>
      </div>
    );

    if (this.props.loading) {
      listContent = <Spinner />;
    }

    return <div className={classes.PostsList}>{listContent}</div>;
  }
}

const mapStateToProps = state => {
  return {
    loading: state.posts.loading,
    posts: state.posts.posts,
    selectedGroup: state.groups.selectedGroup
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchPosts: group => dispatch(actions.fetchPosts(group))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsList);
