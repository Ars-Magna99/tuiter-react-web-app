
const NavigationSidebar = (active) => {
 return(`
   <div class="list-group">
     <a class="list-group-item " href="/">
       <i class="fab fa-twitter"></i></a>
       <!-- continue rest of list, e.g.,
            Home, Explore, Notifications,  Messages, etc. -->
        ${active === 'home'? `<a href="../HomeScreen/index.html" class="list-group-item list-group-item-action active">` : `<a href="../HomeScreen/index.html" class="list-group-item list-group-item-action">`}
          <i class="fas fa-house-user"></i>
          <span class = "hidden-xs hidden-sm hidden-md hidden-lg ps-1">Home</span>
        </a>
        ${active === 'explore'? `<a href="../ExploreScreen/index.html" class="list-group-item list-group-item-action active">` : `<a href="../ExploreScreen/index.html" class="list-group-item list-group-item-action">`}
          <i class="fas fa-hashtag pr-2"></i>
          <span class = "hidden-xs hidden-sm hidden-md hidden-lg ps-1">Explore</span>
        </a>
          <a href="#" class="list-group-item list-group-item-action">
          <i class="fas fa-bell pr-2"></i>
          <span class = "hidden-xs hidden-sm hidden-md hidden-lg ps-1">Notifications</span>
        </a>
        <a href="#" class="list-group-item list-group-item-action">
          <i class="fas fa-envelope pr-2"></i>
          <span class = "hidden-xs hidden-sm hidden-md hidden-lg ps-1">Messages</span>
        </a>
        <a href="#" class="list-group-item list-group-item-action">
          <i class="fas fa-bookmark pr-2"></i>
          <span class = "hidden-xs hidden-sm hidden-md hidden-lg ps-1">Bookmarks</span>
        </a>
        <a href="#" class="list-group-item list-group-item-action">
          <i class="fas fa-list pr-2"></i>
          <span class = "hidden-xs hidden-sm hidden-md hidden-lg ps-1">Lists</span>
        </a>
        <a href="#" class="list-group-item list-group-item-action">
          <i class="fas fa-user-alt pr-2"></i>
          <span class = "hidden-xs hidden-sm hidden-md hidden-lg ps-1">Profile</span>
        </a>
        <a href="#" class="list-group-item list-group-item-action">
          <span class="fa-stack pr-1" style = "left:-12px;margin-right:-20px;">
            <i class="far fa-circle fa-stack-1x"></i>
            <i class="fas fa-ellipsis-h fa-stack-1x"></i>
          </span>
          <span class = "hidden-xs hidden-sm hidden-md hidden-lg ps-1">More</span>
        </a>

   </div>
   <div class="d-grid mt-2">
     <a href="tweet.html"
        class="btn btn-primary btn-block rounded-pill">
        Tweet</a>
   </div>
 `);
}
export default NavigationSidebar;
//$(NavigationSidebar);