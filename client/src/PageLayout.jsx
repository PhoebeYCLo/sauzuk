import React, { Component } from 'react';
import Header from './components/Header/Header';

class PageLayout extends Component {
    render() {
        return (
            <div>
                <Header />
                <main>
                    {this.props.children}
                </main>
            </div>
        )
    }
}

export default PageLayout;