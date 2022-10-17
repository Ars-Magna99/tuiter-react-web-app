export default function WhoToFollowListItem(who){

return(`
        <div class = "list-group-item pt-2">
          <div class = "row" >
            <div class = "col">
              <img src = ${who.avatarIcon} height = 50px class = "float-start rounded-circle">
            </div>
            <div class = "col-6 float-start">
              <div class = "fw-bolder">
                <a href = "#" class = "text-white wd-link-no-decoration">${who.userName}
                  <span class="fa-stack wd-certified-icon">
                <i class="fas fa-certificate fa-stack-2x"></i>
                <i class="fas fa-check fa-stack-1x text-dark"></i>
              </span>
                </a>
              </div>
              <div class = "text-secondary">
                @ ${who.handle}
              </div>
            </div>
            <div class = "col">
              <button type="button" class="btn btn-primary rounded-pill">Follow</button>
            </div>
          </div>
        </div>

`);
}

