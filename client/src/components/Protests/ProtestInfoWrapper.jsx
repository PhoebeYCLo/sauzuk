import React from 'react';
import {Link} from 'react-router-dom';
import Map from '../Map/Map';
import hkprotest from '../../assets/images/hkprotest.jpeg';
import IconDate from '../Icons/IconDate';
import IconPlace from '../Icons/IconPlace';
import IconTime from '../Icons/IconTime';
import IconPeople from '../Icons/IconPeople';
import IconView from '../Icons/IconView';

 const ProtestInfoWrapper = (props) => {
    return (
        <div className="info__content container">
            <div className="info__left">
                <div className="info-image-container">
                    <img src={props.image} alt="Protest" />
                </div>
                <div className="info__map">
                    <Map lat={props.lat} lng={props.lng} />
                </div>
            </div>

            <div className="info__right">
                <div className="info__right-top">
                    <div className="info__title">{props.name}</div>
                    <div className="info__details">
                        <IconDate /> {props.date}
                    </div>
                    {/* <div className="info__details">
                        <IconPlace /> Victoria Park
                    </div> */}
                    <div className="info__details">
                        <IconTime /> {props.time}
                    </div>
                    <div className="info__details">
                        <IconPeople /> {props.people}
                    </div>
                </div>
                
                <div className="info__right-bottom">
                    <div className="info__description">
                        {props.description}
                    </div>

                    <div className="info__panel">
                        <button className="info__button info__button--join">
                            Join
                        </button>

                        <Link to={`/livemode/${props.id}`}>
                            <button className="info__button info__button--live">
                                <IconView /> Live Mode
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProtestInfoWrapper;