import React, { Component } from 'react';
import hkprotest from '../../assets/images/hkprotest.jpeg';

class ProtestCard extends Component {
    render() {
        return (
            <div className="protest__list-container">
                <div className="protest__card-container">
                    <div className="protest__card-image-container">
                        <img src={hkprotest} alt="protest image" />
                    </div>
                    <div className="protest__card-info-container">
                        <div className="protest__card-info-date">Sunday, 9 June 2020</div>
                        <div className="protest__card-info-title">Hong Kong anti-extradition bill protest</div>
                        <div className="protest__card-info-description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Pellentesque id nibh tortor id aliquet lectus. Felis imperdiet proin fermentum leo vel orci porta. In eu mi bibendum neque 
                        egestas congue quisque. Morbi tempus iaculis urna id volutpat lacus. Eu nisl nunc mi ipsum faucibus vitae aliquet nec. Curabitur 
                        vitae nunc sed velit dignissim sodales ut. Nec nam aliquam sem et tortor consequat id. 
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProtestCard;