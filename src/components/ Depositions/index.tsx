import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
  Keyboard,
  Mousewheel,
  Navigation,
  Pagination,
} from 'swiper';
import { DepositionsContainer, CarouselDepostions } from './styled';
import { CardDeposition } from './CardDeposition';
import Amanda from '../../assets/amanda.jpg';
import Lucas from '../../assets/lucas.jpg';
import Rodrigo from '../../assets/rodrigo.jpg';
import { ReactComponent as ArrowCarousel } from '../../assets/arrowCarousel.svg';
import 'swiper/swiper-bundle.min.css';

// swiper core styles
import 'swiper/swiper.min.css';

// modules styles
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';

// import Swiper core and required modules

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard]);

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
        <Swiper
          cssMode
          navigation
          pagination
          mousewheel
          className=""
        >
          <SwiperSlide>
            <CardDeposition testimonial="Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Ultrices blandit pelle ntesque nibh arcu elementum odio justo. Rhoncus." photo={Amanda} name="Amanda Merien" office="Analista junior" />
            <CardDeposition testimonial="Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Ultrices blandit pelle ntesque nibh arcu elementum odio justo. Rhoncus." photo={Amanda} name="Amanda Merien" office="Analista junior" />
            <CardDeposition testimonial="Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Ultrices blandit pelle ntesque nibh arcu elementum odio justo. Rhoncus." photo={Amanda} name="Amanda Merien" office="Analista junior" />
          </SwiperSlide>
          <SwiperSlide>
            <CardDeposition testimonial="Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Ultrices blandit pelle ntesque nibh arcu elementum odio justo. Rhoncus." photo={Amanda} name="Amanda Merien" office="Analista junior" />
            <CardDeposition testimonial="Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Ultrices blandit pelle ntesque nibh arcu elementum odio justo. Rhoncus." photo={Amanda} name="Amanda Merien" office="Analista junior" />
            <CardDeposition testimonial="Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Ultrices blandit pelle ntesque nibh arcu elementum odio justo. Rhoncus." photo={Amanda} name="Amanda Merien" office="Analista junior" />
          </SwiperSlide>
        </Swiper>
        <button type="button" className="next">
          <ArrowCarousel />
        </button>
      </CarouselDepostions>
    </DepositionsContainer>
  );
};
