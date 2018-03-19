import React, { Component } from 'react';
import postsData from './usersData.js';
import SinglePost from './singlePost.js';

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
        console.log(this.state.items);
        return (
            <div className="js-outer-div container">
                {this.state.items.map((item, i) => <SinglePost post={item} key={i} />)}
            </div>
        )};
    }
    
export default Main;