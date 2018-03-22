import React, { Component } from 'react';
import convertTime from '../../shared/utils/convertTime.js'

class Footer extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <footer className="page-footer">
                <div className="footer-copyright">
                    <div className="container footer-content">
                        <div>{this.props.name}</div>
                        <div>Last update: {convertTime(this.props.countTime)}</div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;