import React from 'react';
import { OurPlansContainer } from './styled';
import { PlanOneYear } from './PlanOneYear';
import { PlanSixMonths } from './PlanSixMonths';
import { Container } from '../../styles/container';

export const OurPlans: React.FC = () => {
  return (
    <Container>
      <OurPlansContainer id="plans">
        <span>Nossos planos</span>
        <h2>Invista no seu futuro</h2>
        <div className="ourPlans">
          <PlanOneYear />
          <PlanSixMonths />
        </div>
      </OurPlansContainer>
    </Container>
  );
};
