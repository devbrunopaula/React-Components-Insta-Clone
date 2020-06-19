// You do not need to do anything in this file
import React,{useState} from 'react';
import "./postInput.css"
import data  from '../../dummy-data'
// lightblue = #cce8fd
// blue = #cce8fd
const CommentInput = ({data, id}) => {
  const [ btnColor, setBtnColor ] = useState('#cce8fd')
  const [post, setPost] = useState('')




  const newPost = {
    
              username: "bruno paula",
              text: post
          
      
  
  }


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
  
 
  
}


  return (
   
    <form className="comment-form" onSubmit={data.submitComment}>
      
      <input
        id="commentInput"
        type="text"
        value={data.comment}
        placeholder="Add comment... "
        onChange={handleOnChange}
        onClick={ (e) => console.log(id)}
        
      />
      <button type="submit" className="inputButton" onSubmit={handleOnChange} style={{color: btnColor}}>Post</button>
    </form>
    
  );
};

export default CommentInput;
