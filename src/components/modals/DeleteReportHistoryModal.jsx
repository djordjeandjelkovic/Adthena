import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ListWithOverflow } from '@components/styled-components/Task';
import ActionModal from './ActionModal';

const DeleteReportHistoryModal = (props) => {
  const { open, setOpen, confirmAction } = props;
  const [confirmText, setConfirmText] = useState('');

  const handleChangeConfirmText = (e) => {
    setConfirmText(e.target.value);
  };

  const onConfirm = () => {
    if (confirmText === 'Delete') {
      confirmAction();
    } else {
      console.error('Please, enter Delete in related input to confirm deleting');
    }
  };

  return (
    <ActionModal
      open={open}
      setOpen={setOpen}
      title="Are you sure you want to delete this report and its history?"
      confirmButtonText="Delete all"
      cancelButtonText="Cancel"
      confirmAction={onConfirm}
    >
      <p>
        If you delete the
        <strong> Executive metrics </strong>
        report,
        you will also delete the associated history:
      </p>

      <br />

      <ListWithOverflow>
        <li>January 2020</li>
        <li>February  2020</li>
        <li>March 2020</li>
        <li>April 2020</li>
        <li>May 2020</li>
        <li>June 2020</li>
        <li>July 2020</li>
        <li>August 2020</li>
        <li>Septembar 2020</li>
        <li>October 2020</li>
        <li>November 2020</li>
        <li>December 2020</li>
      </ListWithOverflow>

      <p>
        Please, type the word
        &apos;Delete&apos;
        to remove the
        <strong> Executive metrics </strong>
        report and its associated history:
      </p>

      <input
        value={confirmText}
        onChange={handleChangeConfirmText}
        data-testid="confirm-action"
      />
    </ActionModal>
  );
};

DeleteReportHistoryModal.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  confirmAction: PropTypes.func.isRequired,
};

export default DeleteReportHistoryModal;
