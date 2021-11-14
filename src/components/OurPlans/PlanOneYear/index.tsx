import React from 'react';
import { PlanOneYearContainer } from './styled';
import { ReactComponent as Check } from '../../../assets/check.svg';

export const PlanOneYear: React.FC = () => {
  return (
    <PlanOneYearContainer>
      <div className="ourPlans-plansOneYear-boxHeader">
        <div>
          <span>1 ano de acesso</span>
          <h2>Plano recomendado</h2>
        </div>
        <img src="/assets/promotion.svg" alt="" />
      </div>
      <div className="ourPlans-plansOneYear-benefits">
        <h4>vantagens</h4>
        <ul>
          <li>
            <img src="/assets/check.svg" alt="" />
            <p>
              Acesso a todos os benefícios da Plataforma
              (Videoaulas, Exercícios, Apostilas e muito mais)

            </p>
          </li>
          <li>
            <Check />
            <p>36 aulas ao vivo</p>
          </li>
          <li>
            <Check />
            <p>Revisão para o ENEM</p>
          </li>
          <li>
            <Check />
            <p>Grupo no Whatsapp com professores e alunos</p>
          </li>
          <li>
            <Check />
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
