import React from 'react';
import PropTypes from 'prop-types';
import ActionModal from './ActionModal';

const DeleteFilesModal = (props) => {
  const { open, setOpen, confirmAction } = props;

  return (
    <ActionModal
      open={open}
      setOpen={setOpen}
      title="Are you sure you want to delete all your files?"
      confirmButtonText="Yes"
      cancelButtonText="No"
      confirmAction={confirmAction}
    >
      <p>This action can&apos;t be undone.</p>
    </ActionModal>
  );
};

DeleteFilesModal.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  confirmAction: PropTypes.func.isRequired,
};

export default DeleteFilesModal;
