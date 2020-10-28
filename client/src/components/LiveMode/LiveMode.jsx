import React, { Component } from 'react';
import LiveMap from './LiveMap';
import Modal from '../Modal/Modal';
import LiveCard from './LiveCard';
import axios from 'axios';

const URL = "http://localhost:8080";

class LiveMode extends Component {
    state={
        lat:null,
        lng:null,
        show: false,
        statuses: [],
        livemap: []
    }

    showModal = () => {
        this.setState({ show: true });
    };

    hideModal = () => {
        this.setState({ show: false });
    };

    updatelocation = (lat, lng) => {
        this.showModal();
        this.setState({lat: lat, lng: lng})
    }

    getLiveMap(){
        const mapId = this.props.match.params.id;
        axios.get(`${URL}/map/` + mapId)
            .then(res => 
                // console.log(res.data))
                this.setState({ livemap: res.data.maps[0] }))
            .catch(err => console.log(err));
    }

    getStatus(){
        axios.get(`${URL}/status`)
            .then(res => 
                this.setState({ statuses: res.data.statuses }))
            .catch(err => console.log(err));
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const status = e.target.statusbtn.value;
        const message = e.target.statusmessage.value;
        console.log(status + ' ' + message);
       
        axios.post(`${URL}/status`, {
            statusLat: this.state.lat,
            statusLng: this.state.lng,
            status: status,
            statusTime: Date.now(),
            statusMessage: message
        }).then(res => {
            console.log(res.data);
        });

        e.target.reset();
    }

    componentDidMount(){
        this.getLiveMap();
        this.getStatus();
    }

    render() {
        return (
            <div className="livemode">
                <div className="livemode__content">
                    <div className="livemode__left">
                        {/* <LiveMap updatelocation={this.updatelocation} lat={this.state.livemap.mapLat} /> */}
                        {/* <LiveMap updatelocation={this.updatelocation} location={this.state.livemap} lat={this.state.livemap.mapLat} /> */}
                        <LiveMap updatelocation={this.updatelocation} lat={this.state.livemap.mapLat} lng={this.state.livemap.mapLng} />
                    </div>
                    <div className="livemode__right">
                        <div className="livemode__header">Safety Status</div>
                        <div className="livemode__timeline">
                            <LiveCard />
                            <Modal show={this.state.show} handleClose={this.hideModal}>
                                <form onSubmit={this.handleSubmit} className="modal__form" action="post">
                                    <div className="modal__header">Safety Report</div>
                                    <div className="modal__subheader">Choose Area Safety Status</div>
                                    <div className="modal__status">
                                        <div className="modal__status-item">
                                            <div className="modal__circle modal__circle--danger"></div>
                                            <input type="radio" name="statusbtn" className="modal__status-radio" value="danger" />
                                            <label className="modal__status-type">Danger</label>
                                        </div>
                                        <div className="modal__status-item">
                                            <div className="modal__circle modal__circle--risk"></div>
                                            <input type="radio" name="statusbtn" className="modal__status-radio" value="risk" />
                                            <label className="modal__status-type">Risk</label>
                                        </div>
                                        <div className="modal__status-item">
                                            <div className="modal__circle modal__circle--safe"></div>
                                            <input type="radio" name="statusbtn" className="modal__status-radio" value="safe" />
                                            <label className="modal__status-type">Safe</label>
                                        </div>
                                    </div>
                                    <div className="modal__subheader">Message</div>
                                    <textarea name="statusmessage" className="modal__textarea textarea" placeholder="Status message"></textarea>
                                    <button type="submit" onClick={this.hideModal} className="modal__button">Publish</button>
                                </form>
                            </Modal>
                            {/* <button type="button" onClick={this.showModal} className="modal__button">
                                Report
                            </button> */}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LiveMode;