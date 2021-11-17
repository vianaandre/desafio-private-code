import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { NavContainer } from './styled';

export const Nav: React.FC = () => {
  const [location, setLocation] = useState<string>('/');

  useEffect(() => {
    const windowLocation = window.location.pathname;

    setLocation(windowLocation);
  });

  return (
    <NavContainer>
      <ul>
        <li>
          <Link to="header">
            <a className={location === '/' ? 'active' : ''}>
              Home
            </a>
          </Link>
        </li>
        <li>
          <Link to="methods" smooth>
            <a className={location === '/somos' ? 'active' : ''}>
              Quem somos
            </a>
          </Link>
        </li>
        <li>
          <Link to="plans" smooth offset={125}>
            <a className={location === '/planos' ? 'active' : ''}>
              Planos
            </a>
          </Link>
        </li>
        <li>
          <Link to="speak" smooth>
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
    </NavContainer>
  );
};
