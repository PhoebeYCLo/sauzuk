import React, { Component } from 'react';
import ProtestCard from './ProtestCard';

import axios from 'axios';

const URL = "http://localhost:8080";

class Protests extends Component {
    constructor(props){
        super();
        this.state = {
            protests: []
        }
    }

    getProtest() {
        axios.get(`${URL}/`)
            .then(res =>
                // console.log(res.data))
                this.setState({ protests: res.data }))
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
                    <ProtestCard />
                </div>
            </div>
        )
    }
}

export default Protests;