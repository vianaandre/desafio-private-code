import React from 'react';
import { Link } from 'react-scroll';
import { FloatButtonUpContainer } from './styled';
import { ReactComponent as ArrowUp } from '../../assets/arrowUp.svg';

export const FloatButtonUp: React.FC = () => {
  return (
    <Link to="header" smooth>
      <FloatButtonUpContainer>
        <ArrowUp />
      </FloatButtonUpContainer>
    </Link>
  );
};
