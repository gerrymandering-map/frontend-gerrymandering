import React from 'react';
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
} from 'react-simple-maps';

const TopoJSONComposableMap = ( geographyPaths ) => (
  <ComposableMap
    projectionConfig={{
      scale:1200,
      rotation: [0,0,0],
    }}
    width={980}
    height={551}
    style={{
      backgroundColor: '#000',
      width: '100%',
      height: 'auto',
    }}
    >
      <ZoomableGroup center={[ 0, 0 ]} >
      <Geographies geographyPaths disableOptimization>
        {(geographies, projection) =>
          geographies.map((geography, i) =>
            geography.properties.admin === 'United States of America' && <Geography
              key={`${geography.properties.ADM0_A3}-${i}`}
              cacheId={`path-${geography.properties.ADM0_A3}-${i}`}
              round
              geography={geography}
              projection={projection}
              onClick={this.handleClick}
              style={{
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
                  fill: '#FF5722',
                  stroke: '#607D8B',
                  strokeWidth: 0.75,
                  outline: 'none',
                },
              }}
            />
        )}
      </Geographies>
      </ZoomableGroup>
  </ComposableMap>
);

export default TopoJSONComposableMap;