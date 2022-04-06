import { useState } from 'react';
import Modal from 'react-modal';
import logoImg from '../../assets/logo.svg';
import { Container, Content } from './styles'

export function Header(props: any) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <button type="button" onClick={props.hadleOpenModal}> Nova transação </button>

      </Content>
    </Container>
  )
}
