// You will add code to this file
import React from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  // Add state for the comments
 console.log(props)
  return (
    <div>
      {/* map through the comments data and return the Comment component */}
      {props.comments.map( (comment, i) => <Comment key={i}  comment={comment}/>)}
      <CommentInput data={props} id={props.postId}/>
    </div>
  );
}

export default CommentSection;
