import React from 'react';
import { FooterContainer } from './styled';
import { ReactComponent as Logo } from '../../assets/logoipsum.svg';
import Mobile from '../../assets/mobile.jpg';
import { ReactComponent as Copyright } from '../../assets/copyright.svg';
import { ReactComponent as Facebook } from '../../assets/face.svg';
import { ReactComponent as Twitter } from '../../assets/twitter.svg';
import { ReactComponent as Instagram } from '../../assets/instagram.svg';
import App from '../../assets/app.jpg';

export const Footer: React.FC = () => {
  return (
    <FooterContainer id="speak">
      <div className="footer-information">
        <div className="footer-information-app">
          <Logo />
          <img src={Mobile} alt="" />
        </div>
        <div>
          <h4>Localização</h4>
          <ul>
            <li>Av. Brg. Faria Lima , 1422 </li>
            <li>São Paulo - SP </li>
          </ul>
        </div>
        <div>
          <h4>Fale conosco</h4>
          <ul>
            <li>(22) 4442-0126</li>
            <li>info@digihouse.com</li>
          </ul>
        </div>
        <div>
          <h4>Políticas</h4>
          <ul>
            <li>Direitos autorais</li>
            <li>Termos de uso</li>
            <li>Políticas de Privacidade</li>
          </ul>
        </div>
        <img className="img-mobile" src={App} alt="" />
      </div>
      <div className="footer-direitos">
        <div className="footer-direitos-copy">
          <Copyright />
          <p>Copyright 2021. All Right Reserved </p>
        </div>
        <div className="footer-direitos-social">
          <ul>
            <li>
              <a href="">
                <Facebook />
              </a>
            </li>
            <li>
              <a href="">
                <Twitter />
              </a>
            </li>
            <li>
              <a href="">
                <Instagram />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </FooterContainer>
  );
};
