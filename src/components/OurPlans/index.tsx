import React from 'react';
import { OurPlansContainer } from './styled';
import { PlanOneYear } from './PlanOneYear';
import { PlanSixMonths } from './PlanSixMonths';

export const OurPlans: React.FC = () => {
  return (
    <OurPlansContainer>
      <span>Nossos planos</span>
      <h2>Invista no seu futuro</h2>
      <div className="ourPlans">
        <PlanOneYear />
        <PlanSixMonths />
      </div>
    </OurPlansContainer>
  );
};
