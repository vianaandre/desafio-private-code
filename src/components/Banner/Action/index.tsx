import React from 'react';
import { ActionContainer } from './styled';

import { ReactComponent as Robo } from '../../../assets/robo.svg';
import { ReactComponent as Arrow } from '../../../assets/arrow.svg';

export const Action: React.FC = () => {
  return (
    <ActionContainer>
      <div className="bannerContaienr-content-callEnem">
        <Robo />
        <p>
          Seja aprovado no Enem e Vestibulares :)
        </p>
      </div>
      <div className="bannerContaienr-content-action">
        <h2>
          <span className="bannerContaienr-content-action-mobile">Você escolhe</span>
          o que aprender
          <span>.</span>
        </h2>
        <p>
          Aqui você terá toda assistência que precisa
          com materiais desenvolvido por
          {' '}
          <span>mestres e doutores em matemática</span>
        </p>
        <button type="button">
          <a href="#planos">
            Veja nossos planos
            <Arrow />
          </a>
        </button>
      </div>
    </ActionContainer>
  );
};
