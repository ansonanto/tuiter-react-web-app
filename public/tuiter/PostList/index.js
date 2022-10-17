import post from './posts.js';
import PostItem from './PostItem.js';
const PostSummarItemList= () => {
    return(`

    ${
        post.map(post => {
            return(PostItem(post));

        }).join('')
    }
    `);
      
   }
export default PostSummarItemList;