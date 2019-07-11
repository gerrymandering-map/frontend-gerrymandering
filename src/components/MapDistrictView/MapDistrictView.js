import React from 'react';
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
} from 'react-simple-maps';
import PropTypes from 'prop-types';

import unitedStatesMap from '../../public/districts115-washington.json';

const svgStyle1 = {
  default: {
    fill: '#ECEFF1',
    stroke: '#607D8B',
    strokeWidth: 0.75,
    outline: 'none',
  },
  hover: {
    fill: '#607D8B',
    stroke: '#607D8B',
    strokeWidth: 0.75,
    outline: 'none',
  },
  pressed: {
    fill: '#000',
    stroke: '#607D8B',
    strokeWidth: 0.75,
    outline: 'none',
  },
};

const svgStyle2 = {
  default: {
    fill: '#000',
    stroke: '#607D8B',
    strokeWidth: 0.75,
    outline: 'none',
  },
  hover: {
    fill: '#607D8B',
    stroke: '#607D8B',
    strokeWidth: 0.75,
    outline: 'none',
  },
  pressed: {
    fill: '#000',
    stroke: '#607D8B',
    strokeWidth: 0.75,
    outline: 'none',
  },
};


const MapDistrictView = ({ scale, center }) => {
  console.log('scale', scale);
  return (
    <div>
      <ComposableMap
        projectionConfig={{
          scale: scale,
        }}
        width={500}
        height={300}
        style={{
          backgroundColor: '#FFF',
        }}
        >
        <ZoomableGroup center={center}>
          <Geographies geography={unitedStatesMap}>
            {(geographies, projection) => geographies.map((geography, i) => {
              const style = geography.properties.DISTRICT === '8' ? svgStyle1 : svgStyle2;
              return (<Geography
                key={i}
                geography={geography}
                projection={projection}
                style={style}
                />
              );
            })}
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
    </div>
  );
};

MapDistrictView.propTypes = {
  scale: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
  center: PropTypes.array,
};

export default MapDistrictView;
