import React from 'react';
import { CardDepositionContainer } from './styled';
import { ReactComponent as Star } from '../../../assets/star.svg';
import { ReactComponent as Aspas } from '../../../assets/aspas.svg';

type CardDepositionProps = {
    testimonial: string;
    photo: string;
    name: string;
    office: string
}

export const CardDeposition: React.FC<CardDepositionProps> = ({
  testimonial, photo, name, office,
}) => {
  return (
    <CardDepositionContainer>
      <div className="depositions-cardDepositions-stars">
        <Star />
        <Star />
        <Star />
        <Star />
        <Star />
      </div>
      <p>{testimonial}</p>
      <div className="depositions-cardDepositions-intentification">
        <img src={photo} alt="" />
        <div>
          <h4>{name}</h4>
          <span>{office}</span>
        </div>
        <Aspas />
      </div>
    </CardDepositionContainer>
  );
};
