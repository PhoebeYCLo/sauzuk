import React, { Component } from 'react';
import LiveMap from './LiveMap';
import Modal from '../Modal/Modal';

class LiveMode extends Component {
    state={
        lat:null,
        lng:null,
        show: false,
        markers: []
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

    render() {
        return (
            <div className="livemode">
                <div className="livemode__content">
                    <div className="livemode__left">
                        <LiveMap updatelocation={this.updatelocation} />
                    </div>
                    <div className="livemode__right">
                        <div className="livemode__header">Safety Status</div>
                        <div className="livemode__timeline">
                            <div className="livemode__card">
                                <div className="livemode__card--left"></div>
                                <div className="livemode__card--right">
                                    <div className="livemode__card-time">5:30pm</div>
                                    <div className="livemode__card-message">Tear gas used in Hennessy Road</div>
                                </div>
                            </div>
                            <Modal show={this.state.show} handleClose={this.hideModal}>
                                <div className="modal__header">Safety Report</div>
                                <div className="modal__subheader">Choose Area Safety Status</div>
                                <div className="modal__status">
                                    <button className="modal__status-btn modal__status--danger">Danger</button>
                                    <button className="modal__status-btn modal__status--risk">Risk</button>
                                    <button className="modal__status-btn modal__status--safe">Safe</button>
                                </div>
                                <div className="modal__subheader">Message</div>
                                    <textarea className="modal__textarea texteare" placeholder="Status message"></textarea>
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