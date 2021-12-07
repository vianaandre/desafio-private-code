import React from 'react';
import DepartmentsImage from '../../assets/departamentos.png';
import { DepartmentsContainer } from './styled';
import { Container } from '../../styles/container';

export const Departments: React.FC = () => {
  return (
    <Container>
      <DepartmentsContainer>
        <img src={DepartmentsImage} alt="Departamentos" />
      </DepartmentsContainer>
    </Container>
  );
};
