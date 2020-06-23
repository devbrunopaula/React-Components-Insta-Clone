/* 
Start here and then work through the 
PostsContainer components and the CommentSection Components. 
Not all files need code added. 
Look at each file to see where you need to pass props or add code 
*/
import React,{useState} from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBarContainer";

import PostsPage from "./components/PostsContainer/PostsPage";
import Slider from "./components/SliderUser/Slider";
import SideBar from "./components/SideBar/SideBar";



const App = () => {
const [ userSearch, setUserSearch ] = useState([])

  
  return (
    <div>
      <SearchBar search={userSearch} setUserSearch={setUserSearch}/>
     
      <div className="wrapper">
        <div className="main">
          <Slider/>
          <PostsPage  filterUser={userSearch}/>
        </div>
        <div className="sidebar">
          <SideBar/>
        </div>
      </div>
    </div>
    
  );
};

export default App;
