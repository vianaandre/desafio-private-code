import React from 'react';
import { HeaderContainer } from './styled';
import { ReactComponent as Logo } from '../../assets/logoipsum.svg';
import { Nav } from '../Nav';

export const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Logo />
      <Nav />
    </HeaderContainer>
  );
};
