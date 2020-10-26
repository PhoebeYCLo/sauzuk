import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from '../Map/Marker';

class LiveMap extends Component {
    static defaultProps = {
        center: {
          lat: 59.95,
          lng: 30.33
        },
        zoom: 11
      };
     
      render() {
        return (
          // Important! Always set the container height explicitly
          <div style={{ height: '100vh', width: '100%' }}>
            <GoogleMapReact
              bootstrapURLKeys={{ key: 'AIzaSyCKdFxYbZPigze--jzTghtolfcvKlYQDTI' }}
              defaultCenter={this.props.center}
              defaultZoom={this.props.zoom}
            >
            </GoogleMapReact>
          </div>
        );
      }
}

export default LiveMap;