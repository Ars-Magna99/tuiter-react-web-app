export default function PostSummaryItem(post){

return(`
  <li class = "list-group-item">
    <div class = "row">
      <div class = "col-8">
        <div class = "row">
        <div class = "text-secondary">
        ${post.topic}
        </div>
        <div class = "fw-bolder">
          ${post.userName}
          <span class="fa-stack wd-certified-icon">
          <i class="fas fa-certificate fa-stack-2x"></i>
          <i class="fas fa-check fa-stack-1x" style = "color:black"></i>
          </span>
          <span class = "text-secondary fw-normal">
           - ${post.time}
          </span>
          </div>
        </div>

        <div class = "fw-bolder">
          ${post.title}
        </div>

         <div class = "text-secondary pt-1">
         ${post.tweets? `${post.tweets} Tweets` : ``}
        </div>
        </div>
      <div class = "col-4">
        <img src = ${post.image} width = 97px height = 100px class = "float-end">
      </div>
    </div>
  </li>
`);
}