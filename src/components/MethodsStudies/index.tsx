import React from 'react';
import { MethodsStudiesContainer } from './styled';
import { CardMethods } from './CardMethods';
import Student from '../../assets/aluna.jpg';
import { ReactComponent as Arrow } from '../../assets/arrow.svg';
import Raiz from '../../assets/raiz.svg';
import Follow from '../../assets/follow.svg';
import Mathemaics from '../../assets/case_mathematics.svg';

export const MethodsStudies: React.FC = () => {
  return (
    <MethodsStudiesContainer id="methods">
      <div className="methodsStudies-content-information">
        <CardMethods textPrincipla="100% focado na Matemática" textExplication="Todo material é construído por profissionais especializados e com foco no perfil de cada vestibular." Image={Raiz} />
        <CardMethods textPrincipla="Acompanhamento de perto" textExplication="Todo o suporte que você precisa para aprender o conteúdo dos principais vestibulares!" Image={Follow} />
        <CardMethods textPrincipla="Matemática de um jeito fácil!" textExplication="Resolução instantânea de qualquer equação algébrica na plataforma, além de vídeos, apostilas, simulados e central de dúvidas 24h!" Image={Mathemaics} />
        <a href="https://andreviana.vercel.app">
          Quero ser aprovado
          <Arrow />
        </a>
      </div>
      <img src={Student} alt="" className="methodsStudies-student" />
    </MethodsStudiesContainer>
  );
};
