import React, { Component } from 'react';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <footer className="page-footer">
                <div className="footer-copyright">
                    <div className="container">
                        {this.props.name} 
                    </div>
                </div>
          </footer>
    );
    }
}

export default Footer;