import React, { Component } from 'react'
import { feature } from 'topojson-client'
import TopoJSONComposableMap from '../../../src/components/maps/TopoJSONComposableMap';
import map from '../../../src/assets/world-50m.json';

const wrapperStyles = {
  width: '100%',
  maxWidth: 980,
  margin: '0 auto',
  fontFamily: 'Roboto, sans-serif',
}

class DashboardContainer extends Component {
  constructor() {
    super()
    this.state = {
      unitedStatesPaths: [],
    }
    this.loadPaths = this.loadPaths.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.loadPaths();
  }

  loadPaths() {
    // transforms your json paths with topojson
    const world = map;
    const countries = feature(world, world.objects[Object.keys(world.objects)[0]]).features;
    this.setState({ unitedStatesPaths: countries });
  }

  handleClick(e) {
    console.log('event target', e.properties.gn_name);
  }

  render() {
    console.log(this.state.unitedStatesPaths);
    return (
      <div style={wrapperStyles}>
        <TopoJSONComposableMap geographyPaths={this.state.unitedStatesPaths} />
      </div>
    )
  }
}

export default DashboardContainer;
