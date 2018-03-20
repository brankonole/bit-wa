import React, { Component } from 'react';
import Header from './partials/header.js';
import Footer from './partials/footer.js';
import usersData from './users/usersData.js';
import Main from './users/main.js';
import { userService } from '../services/UserService.js';
import User from '../entities/User.js';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			users: [],
			active: true
		}
		console.log(typeof this.setState);
	}

	componentDidMount() {
		userService.fetchUsers()
			.then((usersData) => {
				this.setState = ({
					users: usersData
				})
				const bla = usersData.map((user, i) => {
					return new User(user)
				})
				// console.log(bla);
			})
	}

	handleClick = (event) => {
		console.log(this);
		
		this.setState({
            active: !this.state.active
        })
	}

	render() {
		return (
			<div>
                <Header className='nav-extended' name='React Users' handleClick={this.handleClick.bind(this)}/>
			    <Main showGrid={this.state.active} /> 	
		        <Footer className='page-footer' name='© 2014 Copyright Text'/>
            </div>
		);
	}
}

export default App;