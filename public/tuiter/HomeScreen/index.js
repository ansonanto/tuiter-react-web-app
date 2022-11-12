import NavigationSidebar from "../NavigationSidebar/index.js";
import PostSummarItemList from "../PostList/index.js";
import PostSummaryList from "../PostSummaryList/index.js";

function homeComponent() {
    $('#wd-explore').append(`
        <h2>Home</h2>
        <div class="row mt-2">
        <div class="col-2 col-md-2 col-lg-1 col-xl-2 bg-black">
        <!--<h3>Navigation Sidebar</h3>-->
        ${NavigationSidebar('Home')}
        </div>
        <div class="col-10 col-lg-7 col-xl-6 bg-black">
        ${PostSummarItemList()}  
        </div>
        <div class="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4 bg-black">
        <div class="row">
            <div class="list-group">
                <div class="card">
                    <div class="position-relative">
                        <img src="starship.jpeg"
                            class="card-img-top mt-2" alt="">
                            <p 
                            class="pos-absolute">
                            <b>SpaceX's Starship</b>
                        </p>
                    </div>
                </div>
                ${PostSummaryList()}
            </div>
        </div>
        </div>
       </div>
     
    `);
 }
 
 $(homeComponent);