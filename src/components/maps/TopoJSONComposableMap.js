import React from 'react';
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
} from 'react-simple-maps';
import PropTypes from 'prop-types';

const TopoJSONComposableMap = ({ 
  scale, style, center, disablePanning, paths, handleClick, svgStyle, 
}) => (
  <ComposableMap
    projectionConfig={{
      scale,
      rotation: [0, 0, 0],
    }}
    style={style}
    >
    <ZoomableGroup center={center} disablePanning={disablePanning}>
      <Geographies geography={paths} disableOptimization>
        {(geographies, projection) =>
          geographies.map((geography, i) =>
            geography.properties.admin === 'United States of America' && <Geography
              key={`${geography.properties.ADM0_A3}-${i}`}
              cacheId={`path-${geography.properties.ADM0_A3}-${i}`}
              round
              geography={geography}
              projection={projection}
              onClick={handleClick}
              style={svgStyle} />,
        )}
      </Geographies>
    </ZoomableGroup>
  </ComposableMap>
);

TopoJSONComposableMap.propTypes = {
  scale: PropTypes.number,
  style: PropTypes.object,
  center: PropTypes.array,
  disablePanning: PropTypes.bool,
  paths: PropTypes.array,
  handleClick: PropTypes.func,
  svgStyle: PropTypes.object,
};

export default TopoJSONComposableMap;
