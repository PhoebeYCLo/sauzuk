import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="header__content container">
                    <div className="header__left">
                        <Link to="/">
                            <div className="header__logo">SauZuk</div>
                        </Link>
                    </div>

                    <div className="header__right">
                        <Link to="/">
                            <div className="header__nav-item">Protests</div>
                        </Link>
                        <Link to="/create">
                            <div className="header__nav-item">Create</div>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;