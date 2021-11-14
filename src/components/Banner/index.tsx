import React from 'react';
import { BannerContainer } from './styled';
import { Action } from './Action';
import imageBackground from '../../assets/image-background.png';
import { ReactComponent as Education } from '../../assets/education.svg';

export const Banner: React.FC = () => {
  return (
    <BannerContainer>
      <div className="bannerContainer-content">
        <Action />
        <div className="bannerContainer-content-education">
          <Education />
        </div>
        <div className="bannerContainer-boxTransparent" />
      </div>
      <img src={imageBackground} alt="" />
    </BannerContainer>
  );
};
