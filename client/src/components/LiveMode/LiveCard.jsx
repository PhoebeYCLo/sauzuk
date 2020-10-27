import React from 'react'

const LiveCard = (props) => {
    return (
        <div className="livemode__card">
            <div className="livemode__card--left"></div>
            <div className="livemode__card--right">
                <div className="livemode__card-time">5:30pm</div>
                <div className="livemode__card-message">Tear gas used in Hennessy Road</div>
            </div>
        </div>
    )
}

export default LiveCard;