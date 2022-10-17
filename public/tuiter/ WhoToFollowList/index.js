import who from './who.js';
import WhoToFollowListItem from "./WhoToFollowListItem.js";
const WhoToFollowList= () => {
    return(`
    
    <div class="list-group">
                
    <li class="list-group-item"><b>Who to follow</b></li>
    ${
        who.map(who => {
            return(WhoToFollowListItem(who));

        }).join('')
    }

    `);
    // for (var i = 0; i < followlist.length; i++) {
    //     WhoToFollowListItem(followlist[i]);
    //     //console.log(followlist[i]);

    // }
      
   }
export default WhoToFollowList;