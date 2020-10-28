import React from 'react'

const LiveCard = (props) => {
    return (
        <div className="livemode__card">
            {/* safety status backgound color change by the props value */}
            {props.safety === "danger" ? (
                <div className="livemode__card--left livemode__card--danger"></div>
            ) : props.safety === "risk" ? (
                <div className="livemode__card--left livemode__card--risk"></div>
            ) : (
                <div className="livemode__card--left livemode__card--safe"></div>
            )}

            <div className="livemode__card--right">
                <div className="livemode__card-time">{props.time}</div>
                <div className="livemode__card-message">{props.message}</div>
            </div>
        </div>
    )
}

export default LiveCard;