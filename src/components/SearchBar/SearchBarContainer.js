// You do not need to change any code in this file
import React,{ useState, useEffect} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faHeart, faCircle, faCompass } from '@fortawesome/free-regular-svg-icons'
import "./SearchBar.css";

const SearchBar = ({data, setUserSearch}) => {

const [ search, setSearch ] = useState('')


useEffect(() => {
  if( search === ''){
    setUserSearch(data)
   }
  })

const handleChanges = (e) => {
   setSearch(e.target.value)
   const filter = data.filter( user => user.username.toLowerCase().includes(search.toLowerCase()))
   setUserSearch(filter)
}





  return (
   
    <div className="search-bar-wrapper">
      <div className="social">
        <FontAwesomeIcon icon={faInstagram} />
      </div>
      <form className="search-form">
        <input
          type="search"
          placeholder="Search"
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
          <FontAwesomeIcon icon={faCircle} />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
