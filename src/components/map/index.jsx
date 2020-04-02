import React from 'react';
import PropTypes from 'prop-types';
import {
  TileLayer, Marker, Popup,
} from 'react-leaflet';

import { LeafletMap } from './css';

const Map = ({
  position, zoom,
}) => (
  <LeafletMap center={position} zoom={zoom}>
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
  zoom: PropTypes.number,
};

Map.defaultProps = {
  position: [51.505, -0.09],
  zoom: 13,
};

export default Map;
