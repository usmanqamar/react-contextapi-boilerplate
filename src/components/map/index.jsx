import React from 'react';
import PropTypes from 'prop-types';
import {
  Map as LeafletMap, TileLayer, Marker, Popup,
} from 'react-leaflet';

// @Todo: This css import doesn't work now
// @Todo: Need to take a look in webpack config
import './map.css';

const Map = ({ position }) => (
  <LeafletMap center={position} zoom={13}>
    <TileLayer
      attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
    <Marker position={position}>
      <Popup>
        A pretty CSS3 popup.
        {' '}
        <br />
        {' '}
        Easily customizable.
      </Popup>
    </Marker>
  </LeafletMap>
);

Map.propTypes = {
  position: PropTypes.arrayOf(PropTypes.number),
};

Map.defaultProps = {
  position: [51.505, -0.09],
};

export default Map;
