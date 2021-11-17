import React from 'react';
import DepartmentsImage from '../../assets/departamentos.png';
import { DepartmentsContainer } from './styled';

export const Departments: React.FC = () => {
  return (
    <DepartmentsContainer>
      <img src={DepartmentsImage} alt="Departamentos" />
    </DepartmentsContainer>
  );
};
