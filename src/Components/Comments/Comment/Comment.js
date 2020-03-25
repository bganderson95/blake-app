import React from "react";
import classes from "./Comment.css";

const Comment = props => {
  return (
    <li className={classes.Comment}>
      <div>
        <h4>{props.name}</h4>
        <p>{props.comment}</p>
      </div>
    </li>
  );
};

export default Comment;
