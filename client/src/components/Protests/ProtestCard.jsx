import React from 'react';

const ProtestCard = (props) => {
    return (
        <div className="protest__card-container">
            <div className="protest__card-image-container">
                <img src={props.image} alt="protest image" />
            </div>
            <div className="protest__card-info-container">
                <div className="protest__card-info-date">{props.date}</div>
                <div className="protest__card-info-title">{props.name}</div>
                <div className="protest__card-info-description">
                {props.description}
                </div>
            </div>
        </div>
    )
}

export default ProtestCard;