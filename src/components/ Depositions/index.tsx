import React from 'react';
import { DepositionsContainer } from './styled';
import { CardDeposition } from './CardDeposition';
import Amanda from '../../assets/amanda.jpg';
import Lucas from '../../assets/lucas.jpg';
import Rodrigo from '../../assets/rodrigo.jpg';

export const Depositions: React.FC = () => {
  return (
    <DepositionsContainer>
      <span>Depoimentos</span>
      <h2>
        Recomendados por
        {' '}
        <br />
        quem é expert no assunto
      </h2>
      <ul>
        <CardDeposition testimonial="Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Ultrices blandit pelle ntesque nibh arcu elementum odio justo. Rhoncus." photo={Amanda} name="Amanda Merien" office="Analista junior" />
        <CardDeposition testimonial="Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Ultrices blandit pelle ntesque nibh arcu elementum odio justo. Rhoncus." photo={Lucas} name="Lucas Correia" office="CEO / Creative IT" />
        <CardDeposition testimonial="Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Ultrices blandit pelle ntesque nibh arcu elementum odio justo. Rhoncus." photo={Rodrigo} name="Rodrigo Godoy" office="Presidente / Amazon" />
        <CardDeposition testimonial="Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Ultrices blandit pelle ntesque nibh arcu elementum odio justo. Rhoncus." photo={Amanda} name="Amanda Merien" office="Analista junior" />
        <CardDeposition testimonial="Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Ultrices blandit pelle ntesque nibh arcu elementum odio justo. Rhoncus." photo={Lucas} name="Lucas Correia" office="CEO / Creative IT" />
        <CardDeposition testimonial="Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Ultrices blandit pelle ntesque nibh arcu elementum odio justo. Rhoncus." photo={Rodrigo} name="Rodrigo Godoy" office="Presidente / Amazon" />
      </ul>
    </DepositionsContainer>
  );
};
