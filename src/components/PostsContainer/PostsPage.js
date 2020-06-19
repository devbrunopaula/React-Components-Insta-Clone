//Complete the necessary code in this file
// import useState
import React from "react";
import Post from "./Post";
import "./Posts.css";


const PostsPage = ({filterUser}) => {
// console.log(filterUser)
  return (
    <div className="posts-container-wrapper">
     
      {  filterUser.map( (post, i) => <Post key={i} id={filterUser.username} post={post}/>
      )} 
    </div>
  );
}

export default PostsPage;
