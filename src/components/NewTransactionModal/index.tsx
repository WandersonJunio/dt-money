import React, { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import { Container, TransactionButton, TransactionTypeContainer } from './styles';
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { api } from '../../services/api';


interface INewTransactionModal {
    isOpen: boolean;
    onRequestClose: () => void;
}


export function NewTransactionModal({ isOpen, onRequestClose }: INewTransactionModal) {
    const [title, setTitle] = useState('');
    const [value, setValue] = useState<any>(0);
    const [category, setCategory] = useState('');
    const [type, setType ] = useState('deposit');

    function handleCreateNewTransaction(event: FormEvent) {
        event.preventDefault();

        const data = {
            title, 
            value,
            category,
            type
        }

        api.post('/transaction', data);
    }

    return (
    <Modal 
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName='react-modal-overlay'
        className='react-modal-content'
    >
        <button type='button' onClick={onRequestClose} className='react-modal-close'>
            <img src={closeImg} alt="Fechar modal" />
        </button>
        <Container
            onSubmit={handleCreateNewTransaction}
        >
            <h2> Cadastrar operações </h2>
            <input 
                placeholder='Titulo'
                value={title}
                onChange={event => setTitle(event.target.value)}
            />
            <input 
                placeholder='Valor'
                type='number'
                value={value}
                onClick={event => setValue('')}
                onChange={event => setValue(event.target.value)}
            />

            <TransactionTypeContainer>
                <TransactionButton
                    type='button'
                    onClick={() => { setType('deposit') }}
                    isActive={ type === 'deposit' }
                    activeColors={'green'}
                >
                    <img src={incomeImg} alt="" />
                    <span> Entrada </span>
                </TransactionButton>

                <TransactionButton
                    type='button'
                    onClick={() => { setType('withdraw') }}
                    isActive={ type === 'withdraw' }
                    activeColors={'red'}
                >
                    <img src={outcomeImg} alt="" />
                    <span> saida </span>
                </TransactionButton>
            </TransactionTypeContainer>

            <input 
                placeholder='Categoria'
                value={category}
                onChange={event => setCategory(event.target.value)}
            />
            <button
                type='submit'
            >
                Cadastrar
            </button>
        </Container>
    </Modal>
    )
}