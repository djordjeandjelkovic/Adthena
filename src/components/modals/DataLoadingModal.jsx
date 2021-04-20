import React from 'react';
import PropTypes from 'prop-types';
import Modal from './Modal';

const DataLoadingModal = (props) => {
  const { open, setOpen } = props;

  return (
    <Modal open={open} setOpen={setOpen}>
      <img src="images/loading.gif" width="200" alt="loading" />
      <p style={{ marginTop: -20, color: '#2D6589' }}>Data is loading</p>
    </Modal>
  );
};

DataLoadingModal.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};

export default DataLoadingModal;
