import React, { Component } from 'react';
import ProtestCard from './ProtestCard';

import axios from 'axios';

const URL = "http://localhost:8080";

class Protests extends Component {
    state = {
        protests: []
    }

    getProtest() {
        axios.get(`${URL}/`)
            .then(res =>
                // console.log(res.data.protests))
                this.setState({ protests: res.data.protests}))
            .catch(err => console.log(err));
    }

    componentDidMount(){
        this.getProtest();
    }

    render() {
        return (
            <div className="protest">
                <div className="protest__content container">
                    <div className="protest__search input">
                        <input type="text"
                            placeholder="Search ..."
                            className="protest__search-input" />
                    </div>
                    <div className="protest__list-container">
                        {this.state.protests.map(data => 
                            <ProtestCard 
                                image={data.image}
                                name={data.name}
                                date={data.date}
                                description={data.description}
                            />
                        )}
                    </div>
                </div>
            </div>
        )
    }
}

export default Protests;