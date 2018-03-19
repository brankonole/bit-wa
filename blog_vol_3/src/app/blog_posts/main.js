import React from 'react';
import postsData from './posts.js';
import SinglePost from './single_post.js';

const Main = (props) => {
    return (
        <div className="js-outer-div">
            {postsData.map((item, i) => <SinglePost post={item} key={item.id} />)}
        </div>
    )};
    
export default Main;