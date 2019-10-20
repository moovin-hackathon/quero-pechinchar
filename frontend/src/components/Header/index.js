import React from 'react';

import { Link } from 'react-router-dom';
import { MdShoppingCart } from 'react-icons/md';
import logo from '../../images/logo.png';
import { Container, List, ListItem, Logo, ButtonCart, CartLogo, CartItem } from './styles';

export default function Header() {
  return (
    <Container>
      <List>
        <ListItem>Homem</ListItem>
        <ListItem>Mulher</ListItem>
      </List>
      <Link to="/">
        <Logo src={logo} />
      </Link>
      <ButtonCart>
        <MdShoppingCart size={32} />
        <CartItem>1</CartItem>
      </ButtonCart>
    </Container>
  );
}
