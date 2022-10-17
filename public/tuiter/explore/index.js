import NavigationSidebar from "../NavigationSidebar/index.js";
import WhoToFollowList from "../ WhoToFollowList/index.js";
import ExploreComponent from "../ExploreScreen/ExploreComponent.js";


function exploreComponent() {
    $('#wd-explore').append(`
        <h2>Explore</h2>
        <div class="row mt-2">
        <div class="col-2 col-md-2 col-lg-1 col-xl-2 bg-black">
        <!--<h3>Navigation Sidebar</h3>-->
        ${NavigationSidebar('Explore')}
        </div>
        <div class="col-10 col-lg-7 col-xl-6 bg-black">
        ${ExploreComponent()}  
        </div>
        <div class="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4 bg-black">
        ${WhoToFollowList()}
        </div>
       </div>
     
    `);
 }
 
 $(exploreComponent);