import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
            <div class="row">
                       <!-- search field and cog -->
            <div class = "col-11">
                      <div class = "position-relative">
                        <input class = "ps-5 form-control rounded-pill" placeholder="Search Tuiter">
                          <span class = "position-absolute wd-search-icon" style = "position:absolute; bottom:9px;left:10px">
                            <i class="fas fa-search"></i>
                          <span>
                      </div>
                    </div>
                    <div class = "col-1 float-end ">
                      <a href = "#">
                      <i class="fas fa-cog fa-2x text-primary"></i>
                      </a>
                    </div>
           </div>
           <ul class="nav mb-2 nav-tabs pt-3">
                      <li class="nav-item">
                        <a class="nav-link active" href="#">For You</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#">Trending</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#">News</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#">Sports</a>
                      </li>
                      <li class="nav-item d-none d-md-block">
                        <a class="nav-link" href="#">Entertainment</a>
           </ul>
           <!-- image with overlaid text -->
           <div class = "position-relative">
                   <img src = "../../images/starship.jpeg" width="100%">
                   <h1 class = "position-absolute bottom-0 start-5 text-white" style = "left: 10px">SpaceX's Starship</h1>
                 </div>
           ${PostSummaryList()}
    `);
}
export default ExploreComponent

