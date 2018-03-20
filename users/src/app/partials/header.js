import React, { Component } from 'react';

class Header extends Component {
    constructor(props) {
        super(props);
    }

    handleClick = () => {
        this.props.handleClick();
    }

    render() {
        // console.log(this.state.active);
        
        return (
            <nav className="nav-extended">
            <div className="nav-wrapper">
                <a href="#" className="brand-logo center">{this.props.name}</a>
                <ul className="right hide-on-med-and-down">
                    <li><a href="#"><i className="material-icons">refresh</i></a></li>
                    <li onClick={this.handleClick}><a href="#"><i className="material-icons">list</i></a></li>
                </ul> 
            </div>
        </nav>
    );
    }
}

export default Header;