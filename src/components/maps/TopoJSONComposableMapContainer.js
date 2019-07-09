import React, { Component } from 'react';
import { feature } from 'topojson-client';
import PropTypes from 'prop-types';

import TopoJSONComposableMap from './TopoJSONComposableMap';

class TopoJSONComposableMapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      unitedStatesPaths: [],
    };

    this.loadPaths = this.loadPaths.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.loadPaths();
  }

  loadPaths() {
    // transforms your json paths with topojson
    let world = this.props.map;
    world = feature(world, world.objects[Object.keys(world.objects)[0]]).features;
    this.setState({ unitedStatesPaths: world });
  }

  handleClick(e) {
    this.props.selectState(e.properties.gn_name);
  }

  render() {
    return (
      <div>
        {
          this.state.unitedStatesPaths.length && 
          <TopoJSONComposableMap
            paths={this.state.unitedStatesPaths}
            handleClick={this.handleClick}
            disablePanning
            style={this.props.style}
            svgStyle={this.props.svgStyle}
            center={this.props.center}
            scale={this.props.scale}
            />
        }
      </div>
    );
  }
}

TopoJSONComposableMapContainer.propTypes = {
  style: PropTypes.object,
  svgStyle: PropTypes.object,
  center: PropTypes.array,
  scale: PropTypes.number,
  selectState: PropTypes.func,
  map: PropTypes.object,
};

export default TopoJSONComposableMapContainer;
