import React from 'react';
import PropTypes from 'prop-types';
import TopoJSONComposableMapContainer from '../maps/TopoJSONComposableMapContainer';

const mainlandStyles = {
  backgroundColor: '#000',
  width: '70%',
  height: 'auto',
};

// const hawaiiStyles = {
//   backgroundColor: '#FFF',
//   width: '20%',
//   height: 'auto',
// };

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

const Dashboard = ({ map, handleClick, selectState }) => (
  <div>
    <TopoJSONComposableMapContainer
      map={map}
      selectState={selectState}
      handleClick={handleClick}
      disablePanning={true}
      svgStyle={svgStyle}
      center={[-95, 398]}
      scale={1000}
      style={mainlandStyles}
      />
  </div>
);

Dashboard.propTypes = {
  map: PropTypes.object,
  handleClick: PropTypes.func,
  selectState: PropTypes.func,
};

export default Dashboard;
