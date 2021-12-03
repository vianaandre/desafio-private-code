import React from 'react';
import SVG from 'react-inlinesvg';
import { ActionContainer } from './styled';
import robo from '../../../assets/robo.svg';
import arrow from '../../../assets/arrow.svg';

export const Action: React.FC = () => {
  return (
    <ActionContainer>
      <div className="bannerContaienr-content-callEnem">
        <SVG src={robo} />
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
            <SVG src={arrow} />
          </a>
        </button>
      </div>
    </ActionContainer>
  );
};
