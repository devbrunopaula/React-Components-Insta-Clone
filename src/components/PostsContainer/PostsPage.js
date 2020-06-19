//Complete the necessary code in this file
// import useState
import React, { useState } from "react";
import Post from "./Post";
import "./Posts.css";
import dummyData from "../../dummy-data";

const PostsPage = () => {

  const [ data ] = useState(dummyData)
  // set up state for your data
console.log()
  return (
    <div className="posts-container-wrapper">
      {/* map through data here to return a Post and pass data as props to Post */}
      {data.map( (post, i) => <Post key={i} post={post}/>
      )} 
    </div>
  );
};

export default PostsPage;
