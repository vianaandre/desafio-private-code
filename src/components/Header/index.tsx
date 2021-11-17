import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { HeaderContainer } from './styled';
import { ReactComponent as Logo } from '../../assets/logoipsum.svg';
import { Nav } from '../Nav';
import { ReactComponent as Hamburguer } from '../../assets/hamburguer.svg';

export const Header: React.FC = () => {
  return (
    <HeaderContainer id="header">
      <Logo />
      <div className="header-desktop">
        <Nav />
      </div>
      <div className="header-mobile">
        <Hamburguer />
        <Menu right>
          <Nav />
        </Menu>
      </div>
    </HeaderContainer>
  );
};
