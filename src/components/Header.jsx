/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react';
import { stack as Menu } from 'react-burger-menu';
import { DefaultUi, Player, Video } from '@vime/react';
import ActiveScroll from '../functions/main';
import logoGustaFilms from '../assets/images/logoGustaFilms.png';
import ScrollReveal from '../functions/scrollReveal';
import video from '../assets/video_audio_visual.mp4';

import '@vime/core/themes/default.css';
import '../styles/Header.css';

function Header() {
  const screenWidth = window.innerWidth;

  useEffect(() => {
    if (screenWidth >= 950) {
      ActiveScroll();
    }
    ScrollReveal();
  }, []);

  return (
    <div className="header-contain">
      <header className="header-container">
        <div className="header-sub-container">
          <a href="#">
            <img src={logoGustaFilms} alt="logotipo-Gusta-Films" className="logoGusta" />
          </a>
          <nav className="nav-container">
            <a href="#sobre">SOBRE NÓS</a>
            <a href="#comeceseupodcast">COMECE SEU PODCAST</a>
            <a href="#servico">SERVIÇOS</a>
            <a href="#portfolio">PORTFÓLIO</a>
            <a href="#contato">CONTATO</a>
          </nav>
        </div>
      </header>
      <div className="container-hamburger">
        <Menu right>
          <a className="menu-item" href="#sobre">SOBRE NÓS</a>
          <a className="menu-item" href="#comeceseupodcast">COMECE SEU PODCAST</a>
          <a className="menu-item" href="#servico">SERVIÇOS</a>
          <a className="menu-item" href="#portfolio">PORTFÓLIO</a>
          <a className="menu-item" href="#contato">CONTATO</a>
          <a href="#contato" className="btn-contact">PEDIR ORÇAMENTO</a>
        </Menu>
        <div className="container-sub-hamburger">
          <a href="#">
            <img src={logoGustaFilms} alt="logotipo-Gusta-Films" className="logoGusta" />
          </a>
        </div>
      </div>
      <div className="video-header">
        <video autoPlay muted loop>
          <source src={video} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

export default Header;
