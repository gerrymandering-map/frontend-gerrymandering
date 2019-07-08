import React, { Component } from 'react'
import { feature } from 'topojson-client'
import map from '../../../src/assets/world-50m.json';

import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
} from 'react-simple-maps';

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
      geographyPaths: [],
    }
    this.loadPaths = this.loadPaths.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.loadPaths()
  }

  loadPaths() {
    const world = map;
    // Transform your paths with topojson however you want...
    const countries = feature(world, world.objects[Object.keys(world.objects)[0]]).features
    this.setState({ geographyPaths: countries })
  }

  handleClick(e) {
    console.log('event target', e.properties.gn_name);
  }

  render() {
    return (
      <div style={wrapperStyles}>
        <ComposableMap
          projectionConfig={{
            scale:1200,
            rotation: [0,0,0],
          }}
          width={980}
          height={551}
          style={{
            backgroundColor: '#000',
            width: '75%',
            height: 'auto',
          }}
          >
            <ZoomableGroup center={[ -70, 388 ]} disablePanning>
            <Geographies geography={this.state.geographyPaths} disableOptimization>
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
      </div>
    )
  }
}

export default DashboardContainer;
