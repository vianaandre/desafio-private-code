import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
  Keyboard,
  Mousewheel,
  Navigation,
  Pagination,
} from 'swiper';
import { CarouselMobileContainer } from './styled';
import { CardDeposition } from '../CardDeposition';
import Amanda from '../../../assets/amanda.jpg';
import Lucas from '../../../assets/lucas.jpg';
import Rodrigo from '../../../assets/rodrigo.jpg';
import 'swiper/swiper-bundle.min.css';

// swiper core styles
import 'swiper/swiper.min.css';

// modules styles
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';

SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard]);

export const CarouselMobile: React.FC = () => {
  return (
    <CarouselMobileContainer>
      <Swiper
        cssMode
        navigation
        pagination
        mousewheel
        className=""
      >
        <SwiperSlide>
          <CardDeposition testimonial="Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Ultrices blandit pelle ntesque nibh arcu elementum odio justo. Rhoncus." photo={Amanda} name="Amanda Merien" office="Analista junior" />
        </SwiperSlide>
        <SwiperSlide>
          <CardDeposition testimonial="Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Ultrices blandit pelle ntesque nibh arcu elementum odio justo. Rhoncus." photo={Lucas} name="Amanda Merien" office="Analista junior" />
        </SwiperSlide>
        <SwiperSlide>
          <CardDeposition testimonial="Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Ultrices blandit pelle ntesque nibh arcu elementum odio justo. Rhoncus." photo={Rodrigo} name="Amanda Merien" office="Analista junior" />
        </SwiperSlide>
        <SwiperSlide>
          <CardDeposition testimonial="Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Ultrices blandit pelle ntesque nibh arcu elementum odio justo. Rhoncus." photo={Amanda} name="Amanda Merien" office="Analista junior" />
        </SwiperSlide>
        <SwiperSlide>
          <CardDeposition testimonial="Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Ultrices blandit pelle ntesque nibh arcu elementum odio justo. Rhoncus." photo={Lucas} name="Amanda Merien" office="Analista junior" />
        </SwiperSlide>
        <SwiperSlide>
          <CardDeposition testimonial="Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Ultrices blandit pelle ntesque nibh arcu elementum odio justo. Rhoncus." photo={Rodrigo} name="Amanda Merien" office="Analista junior" />
        </SwiperSlide>
      </Swiper>
    </CarouselMobileContainer>
  );
};
