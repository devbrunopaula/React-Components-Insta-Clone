// look at the likes on this component. Right now it is hard coded on line 20.
// console.log your props and see how to add likes to this component so that it will update when you click the icon.
// HINT: You will need to add an onClick event pass through your props and update the hard coded Likes
import React, {useState} from "react";
import { FaHeart,FaRegHeart, FaRegComment } from 'react-icons/fa';



const LikeSection = props => {
  const [heart, setHeart] = useState(true)
  
  
  const handleIncrementLikes = (e) => {
    props.setLikes( prev => prev + 1)
    e.target.style.fill = 'red'
    setHeart(!heart)
  }

  const handleDecrementLikes = (e) => {
    props.setLikes( prev => prev - 1)
    e.target.style.fill = 'red'
    setHeart(!heart)
  }
   

  
  
  return (
    <div>
      <div
        className="like-section"
        key="likes-icons-container"
      >
        <div className="like-section-wrapper">
        {heart ? <FaRegHeart onClick={handleIncrementLikes}/>  : <FaHeart onClick={handleDecrementLikes} style={{fill:'red'}}/>}
        </div>
        <div className="like-section-wrapper">
          <FaRegComment />
        </div>
      </div>
      <p className="like-number">{props.likes < 1 ? props.likes + ' like' : props.likes + " likes"}</p>
    </div>
  )
};

export default LikeSection;
