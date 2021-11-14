import React from 'react';
import { MethodsStudiesContainer } from './styled';
import { CardMethods } from './CardMethods';
import { informationPlans } from './data';
import Student from '../../assets/aluna.jpg';
import { ReactComponent as Arrow } from '../../assets/arrow.svg';

export const MethodsStudies: React.FC = () => {
  return (
    <MethodsStudiesContainer>
      <div className="methodsStudies-content-information">
        {informationPlans.map(({ title, explication, pathImage }) => {
          return (
            <CardMethods textPrincipla={title} textExplication={explication} Image={pathImage} />
          );
        })}
        <a href="https://andreviana.vercel.app">
          Quero ser aprovado
          <Arrow />
        </a>
      </div>
      <img src={Student} alt="" className="methodsStudies-student" />
    </MethodsStudiesContainer>
  );
};
