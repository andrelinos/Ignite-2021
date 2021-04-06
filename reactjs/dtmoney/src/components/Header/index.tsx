import { useState } from 'react';
import Modal from 'react-modal';
import logo from '../../assets/logo.svg';
import { Container, Content } from './styles';

export function Header() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handelOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handelCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <Container>
      <Content>
        <img src={logo} alt="dt money" />
        <button type="button" onClick={handelOpenNewTransactionModal}>
          Nova transação
      </button>

        <Modal
          isOpen={isNewTransactionModalOpen}
          onRequestClose={handelCloseNewTransactionModal}
        >
          <h2>Cadastrar transação</h2>
        </Modal>
      </Content>
    </Container>
  )
}
