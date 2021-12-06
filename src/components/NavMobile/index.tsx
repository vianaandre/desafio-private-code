import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { NavMobileContainer } from './styled';

type NavProps = {
    menuActive: boolean;
    setActive: (menuActive: boolean) => void;
}

export const NavMobile: React.FC<NavProps> = ({ menuActive, setActive }) => {
  const [location, setLocation] = useState<string>('/');

  useEffect(() => {
    const windowLocation = window.location.pathname;

    setLocation(windowLocation);
  });

  const handleLinkActive = () => {
    setActive(!menuActive);
  };

  return (
    <NavMobileContainer>
      <ul>
        <li>
          <Link to="header" onClick={handleLinkActive} delay={300}>
            <a className={location === '/' ? 'active' : ''}>
              Home
            </a>
          </Link>
        </li>
        <li>
          <Link to="methods" smooth onClick={handleLinkActive} delay={300}>
            <a className={location === '/somos' ? 'active' : ''}>
              Quem somos
            </a>
          </Link>
        </li>
        <li>
          <Link to="plans" smooth offset={125} onClick={handleLinkActive} delay={300}>
            <a className={location === '/planos' ? 'active' : ''}>
              Planos
            </a>
          </Link>
        </li>
        <li>
          <Link to="speak" smooth onClick={handleLinkActive} delay={300}>
            <a className={location === '/fale' ? 'active' : ''}>
              Fale conosco
            </a>
          </Link>
        </li>
        <li className="nav-actionEntrar">
          <a href="/entrar">
            Entrar
          </a>
        </li>
      </ul>
    </NavMobileContainer>
  );
};
