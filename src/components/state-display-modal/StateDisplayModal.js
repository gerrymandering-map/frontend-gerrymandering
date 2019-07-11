import React from 'react';
import PropTypes from 'prop-types';

import MapDistrictViewContainer from '../MapDistrictView/MapDistrictViewContainer';
import './StateDisplayModal.css';

const StateDisplayModal = ({ stateName, handleClose, show }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';
  return (
    <div className={showHideClassName}>
      <section className='modal-main'>
        <h1>{stateName}</h1>
        {stateName === 'Washington' && <MapDistrictViewContainer />}
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <button onClick={handleClose}>close</button>
      </section>
    </div>
  );
};

StateDisplayModal.propTypes = {
  stateName: PropTypes.string,
  handleClose: PropTypes.func,
  show: PropTypes.bool,
};

export default StateDisplayModal;
