import React, { Component } from 'react';

import MapDistrictView from './MapDistrictView';

class DistrictView extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <MapDistrictView 
        scale={3000}
        center={[-120, 47]}
        />
    );
  }
}

export default DistrictView;
