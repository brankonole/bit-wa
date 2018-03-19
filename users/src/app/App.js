import React, { Component } from 'react';
import '../App.css';
import Header from './partials/header.js';
import Footer from './partials/footer.js';
import usersData from './users/usersData.js';
import Main from './users/main.js'

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {}
	}
	render() {
		return (
			<div>
                <Header className='nav-extended' name='React Users'/>
			    <Main /> 	
		        <Footer className='page-footer' name='© 2014 Copyright Text'/>
            </div>
		);
	}
}

export default App;
