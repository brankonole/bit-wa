import React, { Component } from 'react';
import Search from '../users/Search';

class Header extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <nav className="nav-extended">
            <div className="nav-wrapper">
                <a href="#" className="brand-logo center">{this.props.name}</a>
                <ul className="right hide-on-med-and-down">
                    <li onClick={this.props.reload}><a href="#"><i className="material-icons">refresh</i></a></li>
                    <li onClick={this.props.handleClick}><a href="#"><i className="material-icons">list</i></a></li>
                </ul> 
            </div>
            <Search handleSearch={this.props.handleSearch} />
        </nav>
    );
    }
}

export default Header;