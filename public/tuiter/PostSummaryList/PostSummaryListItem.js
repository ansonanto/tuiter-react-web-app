const PostSummaryItem = (post) => {
    return(`
    <div class="card">
    <div class="card-body">
        <div class="row">
            <div class="col-10">
                <p>
                    <span class="wd-trending-topic">${post.topic}</span><br/>
                    <b class="card-text text-white">${post.userName}</b><span class="wd-tuits-number"> ${post.time}</span><br/>
                    <b class="card-text text-white">
                        ${post.title}
                    </b>
                    <br>
                    <span class="wd-tuits-number">123K Tuits</span>
                </p>
            </div>
                <div class="col-2">
                    <img class="rounded img-fluid" src="${post.image}" height="100px" width="100px"/>
                </div>
        </div>
    </div>
 </div>
`);
   }
export default PostSummaryItem;
