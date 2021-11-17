import React, { useEffect, useRef, useState } from 'react';
import { DepositionsContainer } from './styled';
import { CardDeposition } from './CardDeposition';
import Amanda from '../../assets/amanda.jpg';
import Lucas from '../../assets/lucas.jpg';
import Rodrigo from '../../assets/rodrigo.jpg';
import { ReactComponent as ArrowCarousel } from '../../assets/arrowCarousel.svg';

export const Depositions: React.FC = () => {
  const element = useRef<HTMLDivElement>(null);
  const [widthDocument, setWidthDocument] = useState<number | null>();

  const handleClickRigth = () => {
    if (widthDocument) {
      if (widthDocument > 767) {
        element.current?.scroll(1220, 0);
      } if (widthDocument <= 767) {
        element.current?.scroll((320), 0);
      }
    }
  };

  const handleClickLeft = () => {
    if (widthDocument) {
      if (widthDocument > 767) {
        element.current?.scroll(-1220, 0);
        console.log('grande', widthDocument);
      } if (widthDocument <= 767) {
        console.log('pequeno', widthDocument);
        element.current?.scroll(-100, 0);
      }
    }
  };

  useEffect(() => {
    const elementDocument = document.querySelector('body')?.offsetWidth;

    setWidthDocument(elementDocument);
  });

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
      <div className="depositions-carousel">
        <button type="button" className="left" onClick={handleClickLeft}>
          <ArrowCarousel />
        </button>
        <div className="depositions-carousel-items" ref={element}>
          <ul>
            <CardDeposition testimonial="Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Ultrices blandit pelle ntesque nibh arcu elementum odio justo. Rhoncus." photo={Amanda} name="Amanda Merien" office="Analista junior" />
            <CardDeposition testimonial="Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Ultrices blandit pelle ntesque nibh arcu elementum odio justo. Rhoncus." photo={Lucas} name="Lucas Correia" office="CEO / Creative IT" />
            <CardDeposition testimonial="Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Ultrices blandit pelle ntesque nibh arcu elementum odio justo. Rhoncus." photo={Rodrigo} name="Rodrigo Godoy" office="Presidente / Amazon" />
            <CardDeposition testimonial="Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Ultrices blandit pelle ntesque nibh arcu elementum odio justo. Rhoncus." photo={Amanda} name="Amanda Merien" office="Analista junior" />
            <CardDeposition testimonial="Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Ultrices blandit pelle ntesque nibh arcu elementum odio justo. Rhoncus." photo={Lucas} name="Lucas Correia" office="CEO / Creative IT" />
            <CardDeposition testimonial="Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Ultrices blandit pelle ntesque nibh arcu elementum odio justo. Rhoncus." photo={Rodrigo} name="Rodrigo Godoy" office="Presidente / Amazon" />
          </ul>
        </div>
        <button type="button" className="right" onClick={handleClickRigth}>
          <ArrowCarousel />
        </button>
      </div>
    </DepositionsContainer>
  );
};
