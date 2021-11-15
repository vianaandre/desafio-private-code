import React from 'react';
import { ActionMobileContainer } from './styled';
import Phone from '../../assets/phone.svg';
import { ReactComponent as Robo } from '../../assets/robo.svg';
import { ReactComponent as Arrrow } from '../../assets/arrow.svg';

export const ActionMobile: React.FC = () => {
  return (
    <ActionMobileContainer>
      <div className="actionMobile-content">
        <img src={Phone} alt="" />
        <div className="actionMobile-content-action">
          <div>
            <Robo />
            <h4>
              Baixe aulas no app e estude offline
            </h4>
          </div>
          <p>
            Receba lembretes no seu celular e tenha a facilidade de estudar a qualquer hora e de qualquer lugar.
            Baixe nosso app e confira.
          </p>
          <a href="#">
            Conheça nosso aplicativo
            <Arrrow />
          </a>
        </div>
      </div>
    </ActionMobileContainer>
  );
};
