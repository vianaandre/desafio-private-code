import React from 'react';
import { ExplicationContainer } from './styled';
import { ReactComponent as Rocket } from '../../../public/assets/mathematics.svg';

export const Explcation: React.FC = () => {
  return (
    <ExplicationContainer>
      <div className="explication-content">
        <div className="explication-content-block">
          <img src="/assets/mathematics.svg" alt="" />
          <div>
            <span>100% MATEMÁTICA</span>
            <h2>Matemática para quem quer entrar na facul.</h2>
            <p>Somos um cursinho online especialista em ensinar matemática. Temos os melhores professores mestres e doutores para tirar suas dúvidas e te ensinar matemática desde a teoria até a resolução de exercícios de todos os níveis.</p>
          </div>
        </div>
        <div className="explication-content-block">
          <div>
            <span>100% MATEMÁTICA</span>
            <h2>Matemática para quem quer entrar na facul.</h2>
            <p>Somos um cursinho online especialista em ensinar matemática. Temos os melhores professores mestres e doutores para tirar suas dúvidas e te ensinar matemática desde a teoria até a resolução de exercícios de todos os níveis.</p>
          </div>
          <img src="/assets/personal.svg" className="explication-content-block-two-img" alt="" />
        </div>
      </div>
    </ExplicationContainer>
  );
};