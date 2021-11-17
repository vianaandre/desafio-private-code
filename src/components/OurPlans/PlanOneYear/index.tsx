import React from 'react';
import { PlanOneYearContainer } from './styled';
import Check from '../../../assets/check.svg';
import { ReactComponent as Offer } from '../../../assets/offer.svg';

export const PlanOneYear: React.FC = () => {
  return (
    <PlanOneYearContainer>
      <div className="ourPlans-plansOneYear-boxHeader">
        <div>
          <span>1 ano de acesso</span>
          <h2>Plano recomendado</h2>
        </div>
        <Offer />
      </div>
      <div className="ourPlans-plansOneYear-benefits">
        <h4>vantagens</h4>
        <ul>
          <li>
            <img src={Check} alt="" />
            <p>
              Acesso a todos os benefícios da Plataforma
              (Videoaulas, Exercícios, Apostilas e muito mais)

            </p>
          </li>
          <li>
            <img src={Check} alt="" />
            <p>36 aulas ao vivo</p>
          </li>
          <li>
            <img src={Check} alt="" />
            <p>Revisão para o ENEM</p>
          </li>
          <li>
            <img src={Check} alt="" />
            <p>Grupo no Whatsapp com professores e alunos</p>
          </li>
          <li>
            <img src={Check} alt="" />
            <p>Reforço para FUVEST, Unicamp e Vestibulares de Medicina</p>
          </li>
        </ul>
      </div>
      <div className="ourPlans-plansOneYear-prices">
        <div className="ourPlans-plansOneYear-prices-valuePlan">
          <span className="ourPlans-plansOneYear-prices-valuePlan-de">de R$178,80</span>
          <div className="ourPlans-plansOneYear-prices-valuePlan-value">
            <span>R$</span>
            <h4>
              49,90
              <span> /ano</span>
            </h4>
          </div>
          <span>Menos de 5 reais por mês :)</span>
        </div>
        <a href="#planos">
          Eu quero!
        </a>
      </div>
    </PlanOneYearContainer>
  );
};
