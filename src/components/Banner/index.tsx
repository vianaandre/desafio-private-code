import React from 'react';
import SVG from 'react-inlinesvg';
import { BannerContainer } from './styled';
import { Action } from './Action';
import imageBackground from '../../assets/image-background.png';
import education from '../../assets/education.png';
import { Container } from '../../styles/container';

export const Banner: React.FC = () => {
  return (
    <BannerContainer>
      <Container>
        <div className="bannerContainer-content">
          <Action />
          <img src={education} alt="" />
          <div className="bannerContainer-boxTransparent" />
        </div>
      </Container>
      <img src={imageBackground} alt="" className="bannerContainer-img-background" />
    </BannerContainer>
  );
};
