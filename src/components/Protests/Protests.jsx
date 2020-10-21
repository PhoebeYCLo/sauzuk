import React, { Component } from 'react';
import ProtestCard from './ProtestCard';

class Protests extends Component {
    render() {
        return (
            <div className="protest">
                <div className="protest__content container">
                    <div className="protest__search input">
                        <input type="text"
                            placeholder="Search ..."
                            className="protest__search-input" />
                    </div>
                    <ProtestCard />
                </div>
            </div>
        )
    }
}

export default Protests;