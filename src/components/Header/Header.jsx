import React, { Component } from 'react'

class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="header__content container">
                    <div className="header__left">
                        <div className="header__logo">SauZuk</div>
                    </div>

                    <div className="header__right">
                        <div className="header__nav-item">Protests</div>
                        <div className="header__nav-item">Create</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;