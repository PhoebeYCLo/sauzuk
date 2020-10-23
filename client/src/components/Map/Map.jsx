import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Map extends Component {
    constructor(props) {
        super(props);
    }

    static defaultProps = {
        // center: {
        //   lat: 59.955413,
        //   lng: 30.337844
        // },
        zoom: 15
    };

    render() {
        return (
            <div className="map">
                <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyCKdFxYbZPigze--jzTghtolfcvKlYQDTI' }}
                // defaultCenter={this.props.center}
                center={ {lat: this.props.lat, lng: this.props.lng }}
                // lat={this.props.lat}
                // lng={this.props.lng}
                defaultZoom={this.props.zoom}
                >
                <AnyReactComponent
                    lat={59.955413}
                    lng={30.337844}
                    text="My Marker"
                />
                </GoogleMapReact>
            </div>
        )
    }
}

export default Map;