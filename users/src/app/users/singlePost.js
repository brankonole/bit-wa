import React, { Component } from 'react';

class SinglePost extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentWillMount() {
        const email = this.props.post.email;
        const hiddenCar = email.slice(3,6);

        this.props.post.email = email.replace(hiddenCar, '...');

        const dateOfBirth = this.props.post.dob.split(' ');
        const date = dateOfBirth[0].split('-');
        const finalDate = date[2] + '.' + date[1] + '.' + date[0];
        
        this.props.post.dob = finalDate;

        const firstLetter = (this.props.post.name.first)[0].toUpperCase();
        const otherNameLetter = (this.props.post.name.first).slice(1);
        
        this.props.post.name.first = firstLetter + otherNameLetter;

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
                                <i className="material-icons tiny">email</i>:
                                email: {this.props.post.email}
                                </span>
                            </div>
                            <div className="col s10">
                                <span className="black-text">
                                <i className="material-icons tiny">cake</i>: {this.props.post.dob}
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