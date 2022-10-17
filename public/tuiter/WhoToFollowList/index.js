import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js"

const WhoToFollowList = () => {
   return (`
           <ul class="list-group">
           <!-- continue here -->
            <div class="list-group-item fw-bolder">Who to follow</div>
            <!-- use map to keep creating items in the list-->
             ${
                        who.map(user => {
                           return(WhoToFollowListItem(user));
                        }).join('')
                     }
           </ul>
`); }

export default WhoToFollowList;