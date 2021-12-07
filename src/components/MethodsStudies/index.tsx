import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
  Mousewheel, Pagination,
} from 'swiper';
import { MethodsStudiesContainer, CarouselImageMethodStudies } from './styled';
import { CardMethods } from './CardMethods';
import Student from '../../assets/aluna.jpg';
import { ReactComponent as Arrow } from '../../assets/arrow.svg';
import Raiz from '../../assets/raiz.svg';
import Follow from '../../assets/follow.svg';
import Mathemaics from '../../assets/case_mathematics.svg';
import happy from '../../assets/studio-happy.png';
import { Container } from '../../styles/container';

// install Swiper modules
SwiperCore.use([Mousewheel, Pagination]);

export const MethodsStudies: React.FC = () => {
  return (
    <MethodsStudiesContainer id="methods">
      <Container className="methodsStudies-content-information">
        <CardMethods textPrincipla="100% focado na Matemática" textExplication="Todo material é construído por profissionais especializados e com foco no perfil de cada vestibular." Image={Raiz} />
        <CardMethods textPrincipla="Acompanhamento de perto" textExplication="Todo o suporte que você precisa para aprender o conteúdo dos principais vestibulares!" Image={Follow} />
        <CardMethods textPrincipla="Matemática de um jeito fácil!" textExplication="Resolução instantânea de qualquer equação algébrica na plataforma, além de vídeos, apostilas, simulados e central de dúvidas 24h!" Image={Mathemaics} />
        <a href="https://andreviana.vercel.app">
          Quero ser aprovado
          <Arrow />
        </a>
      </Container>
      <CarouselImageMethodStudies className="carousel">
        <Swiper
          direction="vertical"
          slidesPerView={1}
          spaceBetween={30}
          mousewheel
          pagination={{
            clickable: true,
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={Student} alt="" className="methodsStudies-student" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={happy} alt="" />
          </SwiperSlide>
        </Swiper>
      </CarouselImageMethodStudies>
    </MethodsStudiesContainer>
  );
};
