import React from 'react';

const SinglePost = (props) => {
        return (
            <div className="container">
                <div className="row">
                    <div className="col s12">
                        <div className="card blue-grey darken-1">
                            <div className="card-content white-text">
                                <span className="card-title">{props.post.title}</span>
                                <p>{props.post.body}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

export default SinglePost;