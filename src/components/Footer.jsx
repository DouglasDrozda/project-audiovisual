import React from 'react';
import { InstagramLogo, WhatsappLogo } from 'phosphor-react';
import logoGustaFilms from '../assets/images/logoGustaFilms.png';
import logoDouglas from '../assets/images/logoDouglas.svg';

import '../styles/Footer.css';

function Footer() {
  const getYear = () => {
    const date = new Date

    return date.getFullYear()
  }

  return (
    <section className="footer-container">
      <div className="footer-sub-container">
        <div className="footer-logo">
          <a href="#">
            <img src={logoGustaFilms} alt="logotipo-Gusta-Films" className="logoGusta" />
          </a>
        </div>
        <div className="footer-copy">
          <div className="contact-icons">
            <a href="https://www.instagram.com/ggustaaa/" target="_blank" rel="noreferrer">
              <InstagramLogo size={40} color="#e8e8e8" />
            </a>
            <a href="https://wa.me/5513991582789?text=Desejo%20fazer%20um%20orçamento" target="_blank" rel="noreferrer">
              <WhatsappLogo size={40} color="#e8e8e8" />
            </a>
          </div>
          <div>
            <p>Gusta Film{"'"}s &copy; {getYear()} Todos os direitos Reservados.</p>
          </div>
          <div className="footer-development">
            <p>
              Desenvolvido por
              <img src={logoDouglas} alt="logotipo-Douglas" />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
