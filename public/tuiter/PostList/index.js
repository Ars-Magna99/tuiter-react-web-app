import PostItem from "./PostItem.js";
import posts from "./posts.js"

const PostList = () => {
   return (`
           <ul class="list-group">
           <!-- continue here -->
            <!-- use map to keep creating items in the list-->
             ${
                        posts.map(post => {
                           return(PostItem(post));
                        }).join('')
                     }
           </ul>
`); }

export default PostList;