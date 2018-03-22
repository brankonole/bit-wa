import React, { Component } from 'react';
import formatDate from '../../shared/utils/formatDate';
import formatEmail from '../../shared/utils/formatEmail';
import formatName from '../../shared/utils/formatName';
import formatLastName from '../../shared/utils/formatLastName';

const SinglePost = (props) => {
    return (
        <div className="col s12 m12">
            <div className={props.className}>
                <div className="row valign-wrapper">
                    <div className="col s15">
                        <img className="circle responsive-img valign" src={props.post.photo} />
                    </div>
                    <div className="row col s10">
                        <div className="col s10">
                            <span className="black-text">
                            {`${formatName(props.post.firstName)}  ${formatLastName(props.post.lastName)}`}
                            </span>
                        </div>
                        <div className="col s10">
                            <span className="black-text">
                            <i className="material-icons tiny">email</i>
                            email: {formatEmail(props.post.email)}
                            </span>
                        </div>
                        <div className="col s10">
                            <span className="black-text">
                            <i className="material-icons tiny">cake</i>: {formatDate(props.post.dateOfBirth)}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SinglePost;