import React, { createContext, useState, useContext } from 'react';
import { useError } from './useError';

// TypeScript interfaces & definitions
interface props {
  children: React.ReactNode;
}

interface ContextProps {
  isOpen: boolean;
  modalBody: React.ReactNode;
  modalTitle: string;
  openModal: (elements: React.ReactNode, title: string) => void;
  closeModal: () => void;
}

const ModalContext = createContext<Partial<ContextProps>>({});

const ModalProvider = ({ children }: props): JSX.Element => {
  // Global states & variables
  const [isOpen, setOpenState] = useState<boolean>(false);
  const [modalBody, setModalBody] = useState<React.ReactNode | null>(<p>Hello world</p>);
  const [modalTitle, setModalTitle] = useState<string | null>('Hello world!');

  // Modal control methods
  const openModal = (elements: React.ReactNode, title: string): void => {
    setModalTitle(title);
    setModalBody(elements);
    setOpenState(true);
  };

  const closeModal = () => {
    setModalTitle(null);
    setModalBody(null);
    setOpenState(false);
  };

  const value = {
    isOpen,
    modalBody,
    modalTitle,
    openModal,
    closeModal
  };

  return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>;
};

export const useModal = (): Partial<ContextProps> => {
  const { dispatchError } = useError();

  const modal = useContext<Partial<ContextProps>>(ModalContext);
  if (!modal) return dispatchError('Modal is not in a context! Please, contact with support.');
  return modal;
};

export default ModalProvider;
