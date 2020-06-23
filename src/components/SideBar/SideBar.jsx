import React from 'react'
import "./sidebar.css"

function SideBar() {
    return (
        <div className="side">
            <div className="sidebar-info">
                <img className="sidebar-avatar" src="https://scontent-lga3-1.cdninstagram.com/v/t51.2885-19/s150x150/76709218_577575386151174_2683447222388916224_n.jpg?_nc_ht=scontent-lga3-1.cdninstagram.com&_nc_ohc=v8RtCbwnqK4AX_O2FfB&oh=e5c08684cee03387b2e28641ccc30628&oe=5F1DC4A3" alt=""/>
                <div className="userinfo">
                    <h3>brunopaula</h3>
                    <h6>Bruno Paula</h6>
                </div>
            </div>
           <div className="suggestion-box">
               <h2>Suggestions For You</h2>
               <div className="suggestions-items">
                   <img src="https://images.unsplash.com/profile-fb-1559212755-e94d790d8308.jpg?dpr=1&auto=format&fit=crop&w=64&h=64&q=60&crop=faces&bg=fff" alt=""/>
                   <h5>Brian Dian</h5>
                   <a href="">Follow</a>
               </div>
               <div className="suggestions-items">
                   <img src="https://images.unsplash.com/profile-fb-1516473530-4e49e70397e7.jpg?dpr=1&auto=format&fit=crop&w=64&h=64&q=60&crop=faces&bg=fff" alt=""/>
                   <h5>Clemm Dear</h5>
                   <a href="">Follow</a>
               </div>
               <div className="suggestions-items">
                   <img src="https://images.unsplash.com/profile-fb-1556612035-0560e8ce9d13.jpg?dpr=1&auto=format&fit=crop&w=64&h=64&q=60&crop=faces&bg=fff" alt=""/>
                   <h5>Allien Whelen</h5>
                   <a href="">Follow</a>
               </div>
               <div className="suggestions-items">
                   <img src="https://images.unsplash.com/profile-1576125763960-8bf1a5d7ed09image?dpr=1&auto=format&fit=crop&w=64&h=64&q=60&crop=faces&bg=fff" alt=""/>
                   <h5>Allien Whelen</h5>
                   <a href="">Follow</a>
               </div>
           </div>
           <div className="footer">
               <p>About Help Press API Jobs Privacy Terms</p>
               <p>Locations Top Accounts Hashtags Language English</p>
               <p>© 2020 INSTAGRAM FROM LAMBDA</p>
           </div>
           
        </div>
    )
}

export default SideBar
