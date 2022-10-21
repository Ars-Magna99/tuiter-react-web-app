import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";

const NavigationSidebar = (
) => {
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[2];

 return (

   <div className="list-group">
     <a className="list-group-item">Tuiter</a>
     <Link to="/tuiter/home" className={`list-group-item
                    ${active === 'home'?'active':''}`}>
        <i class="fas fa-house-user"></i> Home
     </Link>
     <Link to="/tuiter/explore" className={`list-group-item
                    ${active === 'explore'?'active':''}`}>
       <i class="fas fa-hashtag pr-2"></i> Explore
     </Link>
      <Link to = "/" className="list-group-item">
        <i class="fa-solid fa-flask"></i> Labs
      </Link>
     <a  className={`list-group-item
                    ${active === 'notifications'?'active':''}`}>
       <i class="fas fa-bell pr-2"></i> Notifications
     </a>
     <a  className={`list-group-item
                    ${active === 'messages'?'active':''}`}>
       <i class="fas fa-envelope pr-2"></i> Messages
     </a>
     <a className={`list-group-item
                    ${active === 'bookmarks'?'active':''}`}>
       <i class="fas fa-bookmark pr-2"></i> Bookmarks
     </a>
     <a className={`list-group-item
                    ${active === 'lists'?'active':''}`}>
       <i className="fas fa-list pr-2"></i> Lists
     </a>
     <a to="/" className={`list-group-item
                    ${active === 'profile'?'active':''}`}>
       <i className="fas fa-user-alt pr-2"></i> Profile
     </a>
     <a to="/" className={`list-group-item
                    ${active === 'more'?'active':''}`}>
       <span className="fa-stack pr-1" style = {{left:-12,marginRight:-20}}>
                   <i className="far fa-circle fa-stack-1x"></i>
                   <i className="fas fa-ellipsis-h fa-stack-1x"></i>
                 </span>
       More
     </a>
   </div>
 );
};
export default NavigationSidebar;