import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => {
        return (
            <nav className="nav-extended">
            <div className="nav-wrapper">
                <a href="#" className="brand-logo center">{props.name}</a>
            </div>
        </nav>
    );
}

Header.propTypes = {
    name: PropTypes.string.isRequired
}

Header.defaultProps = {
    name: 'cvrcc'
}

export default Header;