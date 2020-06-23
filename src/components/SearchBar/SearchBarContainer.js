// You do not need to change any code in this file
import React,{ useState, useEffect} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faHeart, faCircle, faCompass } from '@fortawesome/free-regular-svg-icons'
import "./SearchBar.css";
import dummyData from "../../dummy-data";

const SearchBar = ({setUserSearch}) => {

const [ search, setSearch ] = useState('')


useEffect(() => {
  if( search === ''){
    setUserSearch(dummyData)
   }
})


const handleChanges = (e) => {
   setSearch(e.target.value)
   const filter = dummyData.filter( user => user.username.toLowerCase().includes(search.toLowerCase()))
   setUserSearch(filter)
}


  return (
   
    <div className="search-bar-wrapper">
      <div className="social">
       
        <img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"/>
      </div>
      <form className="search-form">
        <input
          type="search"
          placeholder='Search'
          onChange={handleChanges}
        />
      </form>
      <div className="social-wrapper">
        <div className="social">
          <FontAwesomeIcon icon={faCompass} />
        </div>
        <div className="social">
          <FontAwesomeIcon icon={faHeart} />
        </div>
        <div className="social">
       </div>
      </div>
    </div>
  );
};

export default SearchBar;
