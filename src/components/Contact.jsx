import { InstagramLogo, WhatsappLogo } from 'phosphor-react';
import React from 'react';
import '../styles/Contact.css';

function Contact() {
  return (
    <section className="contact-container" id="contato">
      <div className="contact-sub-container">
        <hr />
        <h2>CONTATO</h2>
        <hr />
      </div>
      <div className="contact-form-container">
        <div className="contact-text">
          <div className="contact-orcamento">
            <span>Solicite seu orçamento sem compromisso.</span>
            <p>É só preencher o formulário a seguir com a sua demanda.</p>
          </div>
          <div className="contact">
            <p><b>Telefone</b>: (13) 99158-2789</p>
            <p><b>E-mail</b>: gustavonascimento@gustafilms.com.br</p>
          </div>
          <div className="contact-icons">
            <a href="https://wa.me/5513991582789?text=Desejo%20fazer%20um%20orçamento" target="_blank" rel="noreferrer">
              <WhatsappLogo size={40} color="#e8e8e8" />
            </a>
            <a href="https://www.instagram.com/ggustaaa/" target="_blank" rel="noreferrer">
              <InstagramLogo size={40} color="#e8e8e8" />
            </a>
          </div>
        </div>
        <form action="https://formsubmit.co/gustavonascimento@gustafilms.com.br" method="POST">
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value="http://localhost:3000/" />
          <div className="form-item">
            <label htmlFor="name">
              Nome*
              <input type="text" id="name" name="name" required placeholder="Digite seu nome" />
            </label>
          </div>
          <div className="form-item">
            <label htmlFor="email">
              Email*
              <input type="text" id="email" name="email" required placeholder="Digite seu email" />
            </label>
          </div>
          <div className="form-item">
            <label htmlFor="tel">
              Telefone / WhatsApp*
              <input type="tel" id="tel" name="tel" required placeholder="Digite seu telefone" />
            </label>
          </div>
          <div className="form-item">
            <label htmlFor="project">
              Conte-nos sobre seu projeto*
              <textarea id="project" name="project" required rows="8" cols="50" placeholder="Digite sobre seu projeto" />
            </label>
          </div>
          <button type="submit" className="btn-submit">ENVIAR</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
