import React, { Component } from "react";
import classes from "./CommentsList.css";
import Comment from "./Comment/Comment";
import MakeComment from "../../Containers/MakeComment/MakeComment";

class CommentList extends Component {
  render() {
    // const commentArray = Object.values(this.props.comments);

    return (
      <div className={classes.CommentsList}>
        <hr noshade />
        {this.props.comments ? (
          <ul className={classes.List}>
            {Object.values(this.props.comments).map(comment => (
              <Comment
                key={comment.index}
                comment={comment.comment}
                name={comment.name}
                date={comment.date}
              />
            ))}
          </ul>
        ) : null}
        <MakeComment post={this.props.post} />
      </div>
    );
  }
}

export default CommentList;
