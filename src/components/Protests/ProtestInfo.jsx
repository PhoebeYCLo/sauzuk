import React, { Component } from 'react';
import Map from '../Map/Map';
import hkprotest from '../../assets/images/hkprotest.jpeg';
import IconDate from '../Icons/IconDate';
import IconPlace from '../Icons/IconPlace';
import IconTime from '../Icons/IconTime';
import IconPeople from '../Icons/IconPeople';
import IconView from '../Icons/IconView';

class ProtestInfo extends Component {
    render() {
        return (
            <div className="info">
                <div className="info__content container">
                    <div className="info__left">
                        <div className="info-image-container">
                            <img src={hkprotest} alt="Protest" />
                        </div>
                        <div className="info-map">
                            {/* <Map /> */}
                        </div>
                    </div>

                    <div className="info__right">
                        <div className="info__right-top">
                            <div className="info__title">Hong Kong anti-extradition bill protest</div>
                            <div className="info__details">
                                <IconDate /> Sunday, 9 June 2020
                            </div>
                            <div className="info__details">
                                <IconPlace /> Victoria Park
                            </div>
                            <div className="info__details">
                                <IconTime /> 3:00 pm
                            </div>
                            <div className="info__details">
                                <IconPeople /> 1,080 joined
                            </div>
                        </div>
                        
                        <div className="info__right-bottom">
                            <div className="info__description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Pellentesque id nibh tortor id aliquet lectus. Felis imperdiet proin fermentum leo vel orci porta. In eu mi bibendum neque 
                        egestas congue quisque. Morbi tempus iaculis urna id volutpat lacus. Eu nisl nunc mi ipsum faucibus vitae aliquet nec. Curabitur 
                        vitae nunc sed velit dignissim sodales ut. Nec nam aliquam sem et tortor consequat id. 

                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Pellentesque id nibh tortor id aliquet lectus. Felis imperdiet proin fermentum leo vel orci porta. In eu mi bibendum neque 
                        egestas congue quisque. Morbi tempus iaculis urna id volutpat lacus. Eu nisl nunc mi ipsum faucibus vitae aliquet nec. Curabitur 
                        vitae nunc sed velit dignissim sodales ut. Nec nam aliquam sem et tortor consequat id. 

                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Pellentesque id nibh tortor id aliquet lectus. Felis imperdiet proin fermentum leo vel orci porta. In eu mi bibendum neque 
                        egestas congue quisque. Morbi tempus iaculis urna id volutpat lacus. Eu nisl nunc mi ipsum faucibus vitae aliquet nec. Curabitur 
                        vitae nunc sed velit dignissim sodales ut. Nec nam aliquam sem et tortor consequat id. 
                            </div>

                            <div className="info__panel">
                                <div className="info__button info__button--join">
                                    Join
                                </div>
                                <div className="info__button info__button--live">
                                    <IconView /> Live Mode
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProtestInfo;