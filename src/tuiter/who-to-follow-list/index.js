import WhoToFollowListItem
       from "./who-to-follow-list-item";
import {useSelector} from "react-redux";

const WhoToFollowList = () => {
  const whoArray = useSelector(
                    (state) => state.who);
  return(
       <ul className="list-group">
          <h2 className = "list-group-item ">Who To Follow</h2>
         {
           whoArray.map(who =>
             <WhoToFollowListItem
               key={who._id} who={who}/> )
         }
       </ul>
  );
};
export default WhoToFollowList;