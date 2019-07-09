import React from 'react';
import PropTypes from 'prop-types';
import './StateDisplayModal.css';

const StateDisplayModal = ({ stateName, handleClose, show }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';
  return (
    <div className={showHideClassName}>
      <section className='modal-main'>
        <h1>{stateName}</h1>
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
