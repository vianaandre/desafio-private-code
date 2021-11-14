import React from 'react';
import { CardMethodsContainer } from './styled';

type CardMethodsProps = {
    textPrincipla: string;
    textExplication: string;
    Image: string;
}

export const CardMethods: React.FC<CardMethodsProps> = ({ textPrincipla, textExplication, Image }) => {
  return (
    <CardMethodsContainer>
      <div className="informationPlans-content-cardMethods-icon">
        <img src={`/assets/${Image}`} alt="" />
        <div className="informationPlans-content-cardMethods-icon-effect">
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
        </div>
      </div>
      <div className="informationPlans-content-cardMethods-explication">
        <h3>{textPrincipla}</h3>
        <p>{textExplication}</p>
      </div>
    </CardMethodsContainer>
  );
};
