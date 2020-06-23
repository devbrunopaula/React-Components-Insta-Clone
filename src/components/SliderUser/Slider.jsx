import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './sliderUser.css'

function Slider({profilePicture}) {
    
 
        
     const responsive = {
          superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
          },
          desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
          },
          tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
          },
          mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
          }
        };

     

      return (
        <Carousel responsive={responsive}
        focusOnSelect={true}
      centerMode={true}
         swipeable={true}
        containerClass="slider"
        ssr={false}
        infinite={false}>

       <div className="test">
            <img className="avatarsImg" src="https://images.unsplash.com/profile-fb-1563196104-9d3f5b9904ae.jpg?dpr=1&auto=format&fit=crop&w=64&h=64&q=60&crop=faces&bg=fff" alt=""/>
            <p>Jess.Vallent</p>
       </div>
       <div className="test">
            <img className="avatarsImg" src="https://images.unsplash.com/profile-fb-1569292224-0e608ea9dedc.jpg?dpr=1&auto=format&fit=crop&w=64&h=64&q=60&crop=faces&bg=fff" alt=""/>
            <p>book.sabrina</p>
       </div>
       <div className="test">
            <img className="avatarsImg" src="https://images.unsplash.com/profile-fb-1526718086-ed1fd803acaf.jpg?dpr=1&auto=format&fit=crop&w=64&h=64&q=60&crop=faces&bg=fff" alt=""/>
            <p>AntonioAmk</p>
       </div>
       <div className="test">
            <img className="avatarsImg" src="https://images.unsplash.com/profile-fb-1563079911-4570091d929a.jpg?dpr=1&auto=format&fit=crop&w=64&h=64&q=60&crop=faces&bg=fff" alt=""/>
            <p>MarryFerk</p>
       </div>
       <div className="test">
            <img className="avatarsImg" src="https://images.unsplash.com/profile-fb-1586521961-91ac9b88780b.jpg?dpr=1&auto=format&fit=crop&w=64&h=64&q=60&crop=faces&bg=fff" alt=""/>
            <p>Tayliza_freit</p>
       </div>
       <div className="test">
            <img className="avatarsImg" src="https://images.unsplash.com/profile-1587415294147-afc0a77f8f89image?dpr=1&auto=format&fit=crop&w=64&h=64&q=60&crop=faces&bg=fff" alt=""/>
            <p>sophie1903</p>
       </div>
       <div className="test">
            <img className="avatarsImg" src="https://images.unsplash.com/profile-fb-1532104214-7e7a57b3965f.jpg?dpr=1&auto=format&fit=crop&w=64&h=64&q=60&crop=faces&bg=fff" alt=""/>
            <p>Carol_Kayla</p>
       </div>
       <div className="test">
            <img className="avatarsImg" src="https://images.unsplash.com/profile-1516885944282-ca69fd4e01ce?dpr=1&auto=format&fit=crop&w=64&h=64&q=60&crop=faces&bg=fff" alt=""/>
            <p>John2020</p>
       </div>
       <div className="test">
            <img className="avatarsImg" src="https://images.unsplash.com/profile-fb-1460145945-82dd866d15f5.jpg?dpr=1&auto=format&fit=crop&w=64&h=64&q=60&crop=faces&bg=fff" alt=""/>
            <p>LilliMeira</p>
       </div>
      
    
       </Carousel>
      )
}

export default Slider


