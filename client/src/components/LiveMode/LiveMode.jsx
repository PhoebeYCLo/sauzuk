import React, { Component } from 'react';
import LiveMap from './LiveMap';

class LiveMode extends Component {
    render() {
        return (
            <div className="livemode">
                <div className="livemode__content">
                    <div className="livemode__left">
                        {/* <LiveMap /> */}
                    </div>
                    <div className="livemode__right">
                        <div className="livemode__timeline">
                            Timeline
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LiveMode;