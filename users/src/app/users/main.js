import React, { Component } from 'react';
import postsData from './usersData.js';
import SinglePost from './singlePost.js';
import UserGrid from './UserGrid';

class Main extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     items: [],
        //     active: true  
        // }
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
                {/* <UserGrid data={this.state.items}/> */}
            </div>
        )};
    }
    
export default Main;