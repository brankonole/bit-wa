import React, { Component } from 'react';
import postsData from './usersData.js';
import SinglePost from './singlePost.js';
import UserGrid from './UserGrid';
import AllPost from './AllPost';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        }
    }

    componentDidMount(){
        this.setState({
            items: postsData
        })
    }
    
    render() {
        console.log(this.props.showGrid)
        return (
            <div className="js-outer-div container">
                {this.props.showGrid ? <AllPost data={this.props.users}/> : <UserGrid data={this.props.users} />}
            </div>
        )};
    }
    
export default Main;