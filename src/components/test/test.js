import unitedStatesMap from '../../public/districts115-washington.json';
import React, { Component } from "react";
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
} from "react-simple-maps";

const svgStyle = {
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

class Test extends Component {
  render() {
    return (
      <div>
        <ComposableMap
          projectionConfig={{
            scale: 3000,
          }}
          width={980}
          height={551}
          style={{
            backgroundColor: '#000',
          }}
          >
          <ZoomableGroup center={[-120, 50]}>
          <Geographies geography={unitedStatesMap}>
            {(geographies, projection) => geographies.map(geography => (
              <Geography
                key={ geography.id }
                geography={ geography }
                projection={ projection }
                style={svgStyle}
                />
            ))}
          </Geographies>
          </ZoomableGroup>
        </ComposableMap>
      </div>
    );
  }
}

export default Test;