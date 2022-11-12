import PostSummaryList from "../PostSummaryList/index.js";
const ExploreComponent = () => {
    return(`
    
        <div class="row">
            <div class="mt-2 col-md-11 search">
                <i class="fa fa-search text-secondary"></i>
                <input type="text" placeholder="Search Tuiter" style="width: 100%;"> 
            </div>
            <div class="mt-3 col-md-1">
                <a href="#"><i class="fa fa-cog fa-2x" style="color: blue"></i></a>
            </div>
        </div>
        <div class="row">
            <ul class="mt-2 nav nav-tabs">
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
                <li class="nav-item">
                    <a class="nav-link" href="#">Entertainment</a>
                </li>
            </ul>
        </div>
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
    `);
}
export default ExploreComponent;

