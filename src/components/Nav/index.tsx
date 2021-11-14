import React, { useEffect, useState } from 'react';
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
          <a href="/" className={location === '/' ? 'active' : ''}>
            Home
          </a>
        </li>
        <li>
          <a href="/somos" className={location === '/somos' ? 'active' : ''}>
            Quem somos
          </a>
        </li>
        <li>
          <a href="/planos" className={location === '/planos' ? 'active' : ''}>
            Planos
          </a>
        </li>
        <li>
          <a href="/fale" className={location === '/fale' ? 'active' : ''}>
            Fale conosco
          </a>
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
