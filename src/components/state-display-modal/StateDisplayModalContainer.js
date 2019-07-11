import React, { Component } from 'react';
import PropTypes from 'prop-types';

import StateDisplayModal from './StateDisplayModal';

class StateDisplayModalContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  componentDidMount() {
    
  }

  render() {
    return (
      <StateDisplayModal
        stateName={this.props.stateName}
        handleClick={this.handleClick} 
        handleClose={this.props.handleClose}
        show={this.props.show} />
    );
  } 
}

StateDisplayModalContainer.propTypes = {
  stateName: PropTypes.string,
  handleClose: PropTypes.func,
  show: PropTypes.bool,
};

export default StateDisplayModalContainer;
