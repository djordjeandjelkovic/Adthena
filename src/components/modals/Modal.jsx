import React, {
  useRef, useCallback, useEffect
} from 'react';
import {
  ModalBackground,
  ModalWrapper
} from '@components/styled-components/Task';
import PropTypes from 'prop-types';

const Modal = (props) => {
  const { open, setOpen, children } = props;
  const modalRef = useRef();

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setOpen(false);
    }
  };

  const keyPress = useCallback((e) => {
    if (e.key === 'Escape' && open) {
      setOpen(false);
    }
  }, [open, setOpen]);

  useEffect(() => {
    document.addEventListener('keydown', keyPress);
    return () => document.removeEventListener('keydown', keyPress);
  }, [keyPress]);

  if (!open) {
    return null;
  }

  return (
    <ModalBackground ref={modalRef} onClick={closeModal}>
      <ModalWrapper>
        { children }
      </ModalWrapper>
    </ModalBackground>
  );
};

Modal.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
};

export default Modal;
