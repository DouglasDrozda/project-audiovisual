/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react';
import { stack as Menu } from 'react-burger-menu';
import ActiveScroll from '../functions/main';
import '../styles/Header.css';
import logoGustaFilms from '../assets/images/logoGustaFilms.png';

function Header() {
  useEffect(() => {
    ActiveScroll();
  }, []);
  const screenWidth = window.innerWidth;

  return (
    <div>
      {
        screenWidth >= 950 ? (
          <header className="header-container">
            <div className="header-sub-container">
              <a href="#">
                <img src={logoGustaFilms} alt="logotipo-Gusta-Films" className="logoGusta" />
              </a>
              <nav className="nav-container">
                <a href="#sobre">SOBRE NÓS</a>
                <a href="#comeceseupodcast">COMECE SEU PODCAST</a>
                <a href="#">SERVIÇOS</a>
                <a href="#">PORTFÓLIO</a>
                <a href="#">CONTATO</a>
              </nav>
            </div>
          </header>
        ) : (
          <div className="container-hamburger">
            <Menu right>
              <a className="menu-item" href="#sobre">SOBRE NÓS</a>
              <a className="menu-item" href="#comeceseupodcast">COMECE SEU PODCAST</a>
              <a className="menu-item" href="#">SERVIÇOS</a>
              <a className="menu-item" href="#">PORTFOLIO</a>
              <a className="menu-item" href="#">CONTATO</a>
              <a href="#" target="_blank" className="btn-contact">PEDIR ORÇAMENTO</a>
            </Menu>
            <div className="container-sub-hamburger">
              <a href="#">
                <img src={logoGustaFilms} alt="logotipo-Gusta-Films" className="logoGusta" />
              </a>
            </div>
          </div>
        )
      }
      <video loop muted autoPlay className="video-header">
        <source src="https://cdn-prod-ccv.adobe.com/-BPyu3eZxyS/rend/-BPyu3eZxyS_576.mp4?hdnts=st%3D1646086968%7Eexp%3D1646346168%7Eacl%3D%2Fshared_assets%2Fimage%2F*%21%2Fz%2F-BPyu3eZxyS%2Frend%2F*%21%2Fi%2F-BPyu3eZxyS%2Frend%2F*%21%2F-BPyu3eZxyS%2Frend%2F*%21%2F-BPyu3eZxyS%2Fimage%2F*%7Ehmac%3D50191da5b188b3de9e5e15e96ebb0cb1cb674471d07d04906e561d8d2dad1ee9" type="video/mp4" />
        <source src="media/Cover - A Thousand Years.ogg" type="video/ogg" />
        <source src="media/Cover - A Thousand Years.webm" type="video/webm" />
        Formato de vídeo não suportado
      </video>
    </div>
  );
}

export default Header;
