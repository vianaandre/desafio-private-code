import React, { useEffect, useState } from 'react';
import { HeaderContainer } from './styled';
import { ReactComponent as Logo } from '../../assets/logoipsum.svg';
import { Nav } from '../Nav';
import { Container } from '../../styles/container';

export const Header: React.FC = () => {
  const [menuActive, setMenuActive] = useState<boolean>(false);

  const handleMenu = () => {
    setMenuActive(!menuActive);
  };

  useEffect(() => {
    const elementBody = document.querySelector('body');

    if (elementBody) {
      if (menuActive) {
        elementBody.style.height = '100vh';
        elementBody.style.overflow = 'hidden';
      } else {
        elementBody.style.height = 'fit-content';
        elementBody.style.overflowY = 'visible';
      }
    }
  });

  return (
    <Container>
      <HeaderContainer id="header" active={menuActive}>
        <Logo />
        <div className="header-desktop">
          <Nav />
        </div>
        <div className={`${menuActive ? 'active' : ''} header-mobile`}>
          <div className="header-hamburguer" onClick={handleMenu}>
            <div className={menuActive ? 'activeTop' : ''} />
            <div className={menuActive ? 'activeMidlle' : ''} />
            <div className={menuActive ? 'activeBottom' : ''} />
          </div>
          <Nav />
        </div>
      </HeaderContainer>
    </Container>
  );
};
