import React, { useEffect, useState } from 'react';
import { stack as Menu } from 'react-burger-menu';
import ActiveScroll from '../functions/main';
import logoGustaFilms from '../assets/images/logoGustaFilms.png';
import '../styles/Header.css';

function Header() {
  const screenWidth = window.innerWidth;
  const [resolution, setResolution] = useState(screenWidth)
  const [activeButton, setActiveButton] = useState();
  console.log(resolution);


  const displayVerify = () => {
    setResolution(screenWidth)

    if (resolution >= 950) {
      setActiveButton(false);
      return;
    }

    setActiveButton(true);
  };

  // window.addEventListener('resize', () => {
  //   displayVerify()
  // });

  useEffect(() => {
    if (screenWidth >= 950) {
      ActiveScroll(screenWidth);
      setActiveButton(false);
      return;
    }

    setActiveButton(true)
  }, []);

  return (
    <div className="header-contain">
      {
        !activeButton ? (
          <header className="header-container">
            <div className="header-sub-container">
              <a href="#">
                <img src={logoGustaFilms} alt="logotipo-Gusta-Films" className="logoGusta" />
              </a>
              <nav className="nav-container">
                <a href="#sobre">SOBRE NÓS</a>
                <a href="#comeceseupodcast">COMECE SEU PODCAST</a>
                <a href="#">SERVIÇOS</a>
                <a href="#portfolio">PORTFÓLIO</a>
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
              <a className="menu-item" href="#portfolio">PORTFÓLIO</a>
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
        <source src="https://cdn-prod-ccv.adobe.com/LeaeEVK-_E4/rend/master.m3u8?hdnts=st%3D1646697123%7Eexp%3D1646956323%7Eacl%3D%2Fshared_assets%2Fimage%2F*%21%2Fz%2FLeaeEVK-_E4%2Frend%2F*%21%2Fi%2FLeaeEVK-_E4%2Frend%2F*%21%2FLeaeEVK-_E4%2Frend%2F*%21%2FLeaeEVK-_E4%2Fimage%2F*%7Ehmac%3Dbc4066b3a7e5e9373fcbecc6a5e61ae0d5e4d9ed8fb6b9f7c9f25fae6fed7e04" type="application/x-mpegURL" />
        <source src="https://cdn-prod-ccv.adobe.com/LeaeEVK-_E4/rend/LeaeEVK-_E4_576.mp4?hdnts=st%3D1646697123%7Eexp%3D1646956323%7Eacl%3D%2Fshared_assets%2Fimage%2F*%21%2Fz%2FLeaeEVK-_E4%2Frend%2F*%21%2Fi%2FLeaeEVK-_E4%2Frend%2F*%21%2FLeaeEVK-_E4%2Frend%2F*%21%2FLeaeEVK-_E4%2Fimage%2F*%7Ehmac%3Dbc4066b3a7e5e9373fcbecc6a5e61ae0d5e4d9ed8fb6b9f7c9f25fae6fed7e04" type="video/mp4" />
      </video>
    </div>
  );
}

export default Header;
