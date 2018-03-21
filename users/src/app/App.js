import React, { Component } from 'react';
import Header from './partials/header.js';
import Footer from './partials/footer.js';
import usersData from './users/usersData.js';
import Main from './users/main.js';
import { userService } from '../services/UserService.js';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			users: [],
			active: true
		}
	}

	loadData(){
		userService.fetchUsers()
			.then((usersData) => {
				this.setState({
					users: usersData
				})
			})
	}

	componentDidMount() {
		if(localStorage.getItem('page')) {
			this.setState({
				active: JSON.parse(localStorage.getItem('page'))
			})
		}

		this.loadData();
	}
	
	handleClick = (event) => {
		localStorage.setItem('page', !this.state.active)
		this.setState((prevState, props) => ({
			active: !this.state.active
		}))		
	}

	reload = (event) => {
		this.loadData();
	}

	render() {
		return (
			<div>
                <Header className='nav-extended' name='React Users' handleClick={this.handleClick} reload={this.reload} users={this.state.users} />
			    <Main showGrid={this.state.active} users={this.state.users} /> 	
		        <Footer className='page-footer' name='© 2014 Copyright Text' />
            </div>
		);
	}
}

export default App;