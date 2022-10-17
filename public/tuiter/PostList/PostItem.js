const PostItem = (post) => {
    return(`
    <img src="${post.userImage}" class='wd-float-left me-2' height="40px" width="40px" style="border-radius: 50%"/>
    
    <div class="card bg-black me-5 postion-absolute">
        <div class="row">
            <span class=""><b>${post.name}&nbsp;</b> <span class="wd-handle text-secondary"> ${post.userName} <span>&#8226;</span> ${post.time}</span></span>
            <span>${post.title}</span>
            <div class="position-relative">
                <img src="${post.image}"
                    class="card-img-top mt-2" alt="">   
            </div>
            <span class='border border-light rounded-bottom mb-3'>
                    <span class="card-text text-white">${post.head_content}</span><br/>
                    <span class="card-text text-secondary">
                        ${post.content}
                    </span>
                    <br>
            </span>
            
        </div>
        <p class="d-flex justify-content-between">
            <i class='fa fa-comment' style='color: grey'> ${post.comments}</i>
            <i class='fa fa-retweet' style='color: grey'> ${post.retweet}</i>
            <i class='fa fa-heart' style='color: grey'> ${post.likes}</i>
            <i class='fa fa-upload' style='color: grey'></i>
        </p>

    </div>
    


`);
   }
export default PostItem;
