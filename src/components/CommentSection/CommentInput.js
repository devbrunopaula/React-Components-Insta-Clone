// You do not need to do anything in this file
import React,{useState, useEffect} from 'react';
import "./postInput.css"


const CommentInput = ({data, setData}) => {
  const [ btnColor, setBtnColor ] = useState('#cce8fd')
  const [post, setPost] = useState('')
  const [placeHolder, setPlaceholder] = useState("Add comment... ")







const handleOnChange = (e) => {
  const value =  e.target.value
  setPost(value)
  setBtnColor('#2c83fa')
  
  if(value === ''){
    setBtnColor('#cce8fd')
  }else {
    setBtnColor('#2c83fa')
  }
 
}



const handleSubmit = (e) => {
  e.preventDefault()
  
  const newComment = {
    username: "brunopaula",
    text: post
  }

  setData([ ...data, newComment])
  setPost("")
}


  return (
   
    <form className="comment-form" onSubmit={handleSubmit}>
      
      <input
        id="commentInput"
        type="text"
        value={post}
        placeholder='Add comment...'
        onChange={handleOnChange}
       />

      <button type="submit" className="inputButton"  style={{color: btnColor}}>Post</button>
    </form>
    
    
  );
};

export default CommentInput;
