import React, { Component } from 'react';

class SinglePost extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="col s12 m8 offset-m2 l6 offset-l3">
                <div className="card-panel grey lighten-5 z-depth-1">
                    <div className="row valign-wrapper">
                        <div className="col s15">
                            <img className="circle responsive-img valign" src={this.props.post.picture.medium} />
                        </div>
                        <div className="row col s10">
                            <div className="col s10">
                                <span className="black-text">
                                name: {this.props.post.name.first}
                                </span>
                            </div>
                            <div className="col s10">
                                <span className="black-text">
                                email: {this.props.post.email}
                                </span>
                            </div>
                            <div className="col s10">
                                <span className="black-text">
                                date of birth:{this.props.post.dob}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SinglePost;