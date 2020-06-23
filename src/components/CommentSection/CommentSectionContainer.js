// You will add code to this file
import React, {useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {

 const [ comments, setData] = useState(props.comments)

 return (
   <div>
     {comments.map( (comment, i) => <Comment key={i}   comment={comment}/>)}
      <CommentInput data={comments} setData={setData}/>
    </div>
  );
}

export default CommentSection;
