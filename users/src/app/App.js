import React, { Component } from 'react';
import Header from './partials/header.js';
import Footer from './partials/footer.js';
import usersData from './users/usersData.js';
import Main from './users/main.js';
import About from './users/About.js';
import { userService } from '../services/UserService.js';
import { Switch, Route, Redirect } from "react-router-dom";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			users: [],
			active: true,
			showLoader: true,
			currentTime: localStorage.getItem('currentTime') || Date.now(),
			countTime: localStorage.getItem('countTime') || 0
		}
		this.users = []
	}

	loadData() {
		userService.fetchUsers()
			.then((usersData) => {
				this.setState({
					users: usersData,
					showLoader: false
				})
				this.users = usersData
			})
	}

	timer() {
		setInterval(() => {		
			let	refreshTime = Date.now()
			let countTime;
			this.setState({
				countTime: (refreshTime - this.state.currentTime)
			})
			localStorage.setItem('countTime', this.state.countTime)
		}, 1000)		
	}

	componentDidMount() {
		if (localStorage.getItem('page')) {
			this.setState({
				active: JSON.parse(localStorage.getItem('page'))
			})
		}

		this.loadData();
		this.timer();
	}

	handleClick = (event) => {
		localStorage.setItem('page', !this.state.active)
		this.setState((prevState, props) => ({
			active: !this.state.active
		}))
	}

	handleSearch = (event) => {
		let inputVal = event.target.value;

		let filteredUsers = this.users.filter((user) => {
			let filterItem = user.fullName().includes(inputVal.toLowerCase());
			return filterItem;
		})

		this.setState({
			users: filteredUsers
		})
	}

	reload = (event) => {
		this.loadData();

		this.setState({
			currentTime: Date.now()
		})
		localStorage.setItem('currentTime', this.state.currentTime);
	}

	render() {
		return (
			<div className='app-wrapper'>
				<Header className='nav-extended' handleSearch={this.handleSearch} name='React Users' handleClick={this.handleClick} reload={this.reload} users={this.state.users} showLoader={this.state.showLoader} />
				<Switch>
					<Route path='/home' render={() => <Main showGrid={this.state.active} users={this.state.users} showLoader={this.state.showLoader} />} />
					<Route path='/about' render={() => <About />} />
					<Redirect from='/' to='/home' />
				</Switch>
				<Footer className='page-footer' countTime={this.state.countTime} name='© 2014 Copyright Text' />
			</div>
		);

	}
}

export default App;