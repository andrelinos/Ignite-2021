import { useState } from 'react';
import Modal from 'react-modal';

import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";

Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handelOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handelCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <>
      <Header onOpenNewTransactionModal={handelOpenNewTransactionModal} />
      <Dashboard />

      <Modal
          isOpen={isNewTransactionModalOpen}
          onRequestClose={handelCloseNewTransactionModal}
        >
          <h2>Cadastrar transação</h2>
        </Modal>

      <GlobalStyle />
    </>
  );
}
