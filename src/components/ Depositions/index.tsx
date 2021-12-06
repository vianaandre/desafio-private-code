import React from 'react';
import { DepositionsContainer, CarouselDepostions } from './styled';
import { CarouselDesktop } from './CarouselDesktop';
import { ReactComponent as ArrowCarousel } from '../../assets/arrowCarousel.svg';
import { CarouselMobile } from './CarouselMobile';
import { CarouselTablet } from './CarouselTablet';

export const Depositions: React.FC = () => {
  return (
    <DepositionsContainer>
      <div className="depositions-title">
        <span>Depoimentos</span>
        <h2>
          Recomendados por
          {' '}
          <br />
          quem é expert no assunto
        </h2>
      </div>
      <CarouselDepostions>
        <button type="button" className="prev">
          <ArrowCarousel />
        </button>
        <div className="carouselDesktop">
          <CarouselDesktop />
        </div>
        <div className="carouselTablet">
          <CarouselTablet />
        </div>
        <div className="carouselMobile">
          <CarouselMobile />
        </div>
        <button type="button" className="next">
          <ArrowCarousel />
        </button>
      </CarouselDepostions>
    </DepositionsContainer>
  );
};
