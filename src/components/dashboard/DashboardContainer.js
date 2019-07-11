import React, { Component } from 'react';

import Dashboard from './Dashboard';
import StateDisplayModalContainer from '../state-display-modal/StateDisplayModalContainer';

import unitedStatesMap from '../../public/world-50m.json';

class DashboardContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedState: '',
      selectedStateModalOpen: false,
    };

    this.openStateModal = this.openStateModal.bind(this);
    this.closeStateModal = this.closeStateModal.bind(this);
    this.selectState = this.selectState.bind(this);
  }

  selectState(selectedState) {
    this.setState({ selectedState }, () => this.openStateModal());
  }

  openStateModal() {
    this.setState({ selectedStateModalOpen: true });
  }

  closeStateModal() {
    this.setState({ selectedStateModalOpen: false });
  }

  render() {
    return (
      <div>
        {unitedStatesMap && <Dashboard 
          map={unitedStatesMap} 
          selectState={this.selectState} />}
        <StateDisplayModalContainer 
          stateName={this.state.selectedState}
          show={this.state.selectedStateModalOpen} 
          handleClose={this.closeStateModal} />
      </div>
    );
  }
}


export default DashboardContainer;
