import React, { Component } from 'react';
import Search from '../users/Search';
import { Link } from "react-router-dom";

class Header extends Component {
    constructor(props) {
        super(props);
    }

    headerWithStuff() {
        return (<nav className="nav-extended">
            <div className="nav-wrapper">
            <div className="brand-logo center"><Link to= "/">{this.props.name}</Link></div>
                <ul className="right hide-on-med-and-down">
                    <li onClick={this.props.about}><Link to='/about'>About</Link></li>
                    <li onClick={this.props.reload}><a href="#"><i className="material-icons">refresh</i></a></li>
                    <li onClick={this.props.handleClick}><a href="#"><i className="material-icons">list</i></a></li>
                </ul> 
            </div>
            <Search handleSearch={this.props.handleSearch} />
        </nav>);
    }
    headerWithoutStuff() {
        return (<nav className="nav-extended">
        <div className="nav-wrapper">
            <div className="brand-logo center"><Link to= "#/home">{this.props.name}</Link></div>
            <ul className="right hide-on-med-and-down">
                <li onClick={this.props.about}><Link to='/about'>About</Link></li>
                <li onClick={this.props.reload}><a href="#"><i className="material-icons">refresh</i></a></li>
                <li onClick={this.props.handleClick}><a href="#"><i className="material-icons">list</i></a></li>
            </ul> 
        </div>
    </nav>)
    }
    render() {
        return(
        <React.Fragment>
            {(this.props.showLoader == true) ? this.headerWithoutStuff() : this.headerWithStuff()} 
        </React.Fragment>
    )}
}

export default Header;