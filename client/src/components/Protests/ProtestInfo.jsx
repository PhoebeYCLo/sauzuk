import React, { Component } from 'react';
import ProtestInfoWrapper from './ProtestInfoWrapper';

import axios from 'axios';

const URL = "http://localhost:8080";
class ProtestInfo extends Component {
    state = {
        protestInfo: []
    }

    getInfo = () => {
        const pId = this.props.match.params.id;
        axios.get(`${URL}/protest/` + pId)
            .then(res => {
                // console.log(res.data)
                this.setState({protestInfo: res.data.protests})
            })
    }

    componentDidMount(){
        this.getInfo();
    }

    render() {
        return (
            <div className="info">
                {this.state.protestInfo.map(data =>     
                    <ProtestInfoWrapper 
                        id={data.id}
                        name={data.name}
                        date={data.date}
                        time={data.protestTime}
                        lat={data.lat}
                        lng={data.lng}
                        description={data.description}
                        people={data.people}
                        image={data.image}
                    />
                )}
            </div>
        )
    }
}

export default ProtestInfo;