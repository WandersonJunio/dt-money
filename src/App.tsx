import { GlobalStyle } from "./styles/global";
import { Header } from './components/Header/index';
import { Dashboard } from './components/Dashboard/index';
import Modal from 'react-modal';
import { useState } from "react";
import { NewTransactionModal } from "./components/NewTransactionModal";


Modal.setAppElement('#root')

function App() {

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true)

  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false )
  }


  return (
    <>
      <Header hadleOpenModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <GlobalStyle />
      <NewTransactionModal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransactionModal} />
    </>
  )
}

export default App;
