import React from 'react';
import { PlanSixMonthsContainer } from './styled';
import CheckBlue from '../../../assets/checkBlue.svg';

export const PlanSixMonths: React.FC = () => {
  return (
    <PlanSixMonthsContainer>
      <div className="plans-plansSixMonths-boxHeader">
        <span>6 meses de acesso</span>
        <h2>Plano Aprovado</h2>
      </div>
      <div className="plans-plansSixMonths-benefits">
        <h4>vantagens</h4>
        <ul>
          <li>
            <img src={CheckBlue} alt="" />
            <p>
              Acesso a todos as videoaulas
            </p>
          </li>
          <li>
            <img src={CheckBlue} alt="" />
            <p>
              Ganhe pontos resolvendo questões e troque por
              prêmios
            </p>
          </li>
          <li>
            <img src={CheckBlue} alt="" />
            <p>
              3.000 exercícios com resolucão em vídeo
            </p>
          </li>
          <li>
            <img src={CheckBlue} alt="" />
            <p>
              4 apostilas com todo o conteúdo de Matemática
            </p>
          </li>
          <li>
            <img src={CheckBlue} alt="" />
            <p>
              Reforço para FUVEST, Unicamp e Vestibulares de Medicina
            </p>
          </li>
        </ul>
      </div>
      <div className="ourPlans-plansSixMonths-prices">
        <div>
          <span>R$</span>
          <h4>
            39,90
            <span>/semestre</span>
          </h4>
        </div>
        <a href="planos">
          Eu quero!
        </a>
      </div>
    </PlanSixMonthsContainer>
  );
};
