import React from 'react';
import ReactDOM from 'react-dom';
import { Wrapper, Title, Body, Background, CloseButton } from './Modal.styles';
import { useModal } from 'hooks/useModal';

const Modal = (): JSX.Element => {
  const { isOpen, closeModal, modalBody, modalTitle } = useModal();
  return ReactDOM.createPortal(
    <>
      {isOpen ? (
        <>
          <Background />
          <Wrapper>
            <Title>{modalTitle}</Title>
            <Body>{modalBody}</Body>
            <CloseButton onClick={closeModal}>Zamknij</CloseButton>
          </Wrapper>
        </>
      ) : null}
    </>,
    document.querySelector('#modal')
  );
};

export default Modal;
