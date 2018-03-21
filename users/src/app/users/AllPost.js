import React from 'react';
import SinglePost from './singlePost.js';

const AllPost = (props) => {    
    return  <div className="row">
                {props.data.map((item, i) => {
                    if (item.gender == 'female') {
                        return <SinglePost post={item} key={i} className='card-panel pink lighten-5 z-depth-1'/>
                    } else {
                        return <SinglePost post={item} key={i} className='card-panel grey lighten-5 z-depth-1'/>
                    }
                })}
            </div>
}

export default AllPost;