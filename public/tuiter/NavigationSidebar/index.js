const NavigationSidebar = (act) => {
    return(`
        <div class="list-group">
            <a href="https://en.wikipedia.org/wiki/Dune_(novel)" class="list-group-item list-group-item-action mt-2">
                <i class="fab fa-twitter fa-2x m-2"></i> </a>
                

            <a href="../HomeScreen/index.html" class="list-group-item list-group-item-action ${act==='Home'?'active':''}">
                <i class="fa fa-home wd-float-left"></i><span class=" wd-float-left d-none d-xl-block d-xxl-block ">&nbsp; Home</span></a>

            <!-- <a href="../HomeScreen/index.html" class="list-group-item list-group-item-action ">
                <i class="fa fa-home"></i><span class="d-none d-xl-block d-xxl-block"> Home</span></a> -->

            <a href="../explore/index3.html" class="list-group-item list-group-item-action ${act==='Explore'?'active':''}">
                <i class="fa fa-hashtag wd-float-left"></i><span class="wd-float-left d-none d-xl-block d-xxl-block"> &nbsp; Explore</a>
            <a href="https://en.wikipedia.org/wiki/Harry_Potter" class="list-group-item list-group-item-action">
                <i class="fa fa-bell wd-float-left"></i> <span class="d-none d-xl-block d-xxl-block"> &nbsp;Notifications</a>
            <a href="https://en.wikipedia.org/wiki/2001:_A_Space_Odyssey_(novel)" class="list-group-item list-group-item-action">
                <i class="fa fa-envelope wd-float-left"></i><span class="wd-float-left d-none d-xl-block d-xxl-block"> &nbsp; Messages</a>
            <a href="https://en.wikipedia.org/wiki/2001:_A_Space_Odyssey_(novel)" class="list-group-item list-group-item-action">
                <i class="fa fa-bookmark wd-float-left"></i><span class="wd-float-left d-none d-xl-block d-xxl-block"> &nbsp; Bookmarks</a>
            <a href="https://en.wikipedia.org/wiki/2001:_A_Space_Odyssey_(novel)" class="list-group-item list-group-item-action">
                <i class="fa fa-list wd-float-left"></i> <span class="wd-float-left d-none d-xl-block d-xxl-block"> &nbsp;Lists</a>
            <a href="https://en.wikipedia.org/wiki/2001:_A_Space_Odyssey_(novel)" class="list-group-item list-group-item-action">
                <i class="fa fa-user wd-float-left"></i><span class="wd-float-left d-none d-xl-block d-xxl-block"> &nbsp; Profile</a>
            <a href="https://en.wikipedia.org/wiki/2001:_A_Space_Odyssey_(novel)" class="list-group-item list-group-item-action">
                <i class="fa fa-stop-circle wd-float-left"></i><span class="wd-float-left d-none d-xl-block d-xxl-block"> &nbsp; More</a>
            <button class="btn btn-primary mt-1" style="border-radius: 40px">
                Tuit
            </button>
        </div>
    `);
   }
   export default NavigationSidebar;