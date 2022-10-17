const WhoToFollowListItem = (who) => {
    return(`
    <li class="list-group-item">
    <div class="row">
        <div class="col-3">
            <img class="rounded-circle" src="${who.avatarIcon}" height="50px" width="50px"/>
        </div>
        <div class="col-4">
            <b>${who.userName}</b><br>
            @${who.handle}
        </div>
        <div class="col-5">
            <button class="btn btn-primary btn-sm mt-1" style="border-radius: 40px">
                Follow
            </button>
        </div>
    </div>
</li>`
    
    );
        // console.log(who.handle));
   }
   export default WhoToFollowListItem;





//    <img class="rounded-circle" src="${who.avatarIcon}" height="50px" width="50px"/>
//    <div class="col-4">
//    <b>${who.userName}</b><br>
//    <span style="font-size:15px">${who.handle}</span>
//    </div>
//    <div class="col-5">
//    <button class="btn btn-primary btn-sm mt-1" style="border-radius: 40px"> Follow  </button>
//    </div>