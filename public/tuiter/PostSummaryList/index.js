import PostSummaryItem from "./PostSummaryItem.js";
import posts from "./posts.js"

const PostSummaryList = () => {
   return (`
           <ul class="list-group">
           <!-- continue here -->
            <!-- use map to keep creating items in the list-->
             ${
                        posts.map(post => {
                           return(PostSummaryItem(post));
                        }).join('')
                     }
           </ul>
`); }

export default PostSummaryList;