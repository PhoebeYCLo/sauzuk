import React from 'react';
import {Link} from 'react-router-dom';

const ProtestCard = (props) => {
    return (
        <div className="protest__card-container">
            <Link to={`/protest/${props.id}`}>
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
            </Link>
        </div>
    )
}

export default ProtestCard;