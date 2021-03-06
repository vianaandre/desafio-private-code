import React from 'react';
import { ExplicationContainer } from './styled';
import Rock from '../../assets/rock.png';
import Personal from '../../assets/personal.png';
import { Container } from '../../styles/container';

export const Explcation: React.FC = () => {
  return (
    <ExplicationContainer>
      <Container>
        <div className="explication-content">
          <div className="explication-content-block">
            <img src={Rock} alt="" />
            <div>
              <span>100% MATEMÁTICA</span>
              <h2>Matemática para quem quer entrar na facul.</h2>
              <p>Somos um cursinho online especialista em ensinar matemática. Temos os melhores professores mestres e doutores para tirar suas dúvidas e te ensinar matemática desde a teoria até a resolução de exercícios de todos os níveis.</p>
            </div>
          </div>
          <div className="explication-content-block">
            <div>
              <span>QUER SER APR OVADO?</span>
              <h2>Se seu foco é ser aprovado, nós estamos aqui por você.</h2>
              <p>Somos um cursinho online especialista em ensinar matemática. Temos os melhores professores mestres e doutores para tirar suas dúvidas e te ensinar matemática desde a teoria até a resolução de exercícios de todos os níveis.</p>
            </div>
            <div className="explication-content-img-shadow">
              <img src={Personal} className="explication-content-block-two-img" alt="" />
              <div />
            </div>
          </div>
        </div>
      </Container>
    </ExplicationContainer>
  );
};
