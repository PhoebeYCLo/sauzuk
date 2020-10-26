import React, { Component } from 'react';
import LiveMap from './LiveMap';

class LiveMode extends Component {
    // state = { isShown: false };

    render() {
        return (
            <div className="livemode">
                <div className="livemode__content">
                    <div className="livemode__left">
                        <LiveMap />
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
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LiveMode;