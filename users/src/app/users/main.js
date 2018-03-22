import React, { Component } from 'react';
import postsData from './usersData.js';
import SinglePost from './singlePost.js';
import UserGrid from './UserGrid';
import AllPost from './AllPost';
import Loader from '../partials/Loader';
import NotFound from './NotFound.js';
import StatsOfGender from './StatsOfGender.js';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
        }
    }

    componentDidMount(){
        this.setState({
            items: postsData,
        })
    }
    
    render() {

        if (this.props.showLoader == true) {
            return (
                <div className="js-outer-div container">
                    <Loader />
                </div>
            )
        } else {
            // console.log(this.state.emptyUsers);
            
            if (this.props.users.length == 0) {
               return ( <div className="js-outer-div container error-wrapper">
                        <NotFound />
                    </div>
                    )
            } else {
                return (
                    <div className="js-outer-div container">
                        <StatsOfGender data={this.props.users}/>
                        {this.props.showGrid ? <AllPost data={this.props.users}/> : <UserGrid data={this.props.users} />}
                    </div>
                )};
            }
        }

    }
    
export default Main;