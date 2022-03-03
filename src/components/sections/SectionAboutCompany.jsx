import React from 'react';

import logoGustaFilms from '../../assets/images/logoGustaFilms.png';

import '../../styles/SectionAboutCompany.css';

function SectionAboutCompany() {
  return (
    <section className="section-about">
      <div className="contente-about">
        <div className="cont-title">
          <h1>A EMPRESA</h1>
        </div>
        <div className="cont-text">
          <p>
            Os clientes pediram e então surgiu o Gusta FIlm’s!
            Com toda a bagagem do seu fundador, Gustavo Nascimento,
            a empresa se consolidou na baixada santista como uma das maiores
            produtoras de audiovisual e hoje é uma referência em Podcast.
            Fazemos que a sua voz seja ouvida pelo maior número de pessoas.
            <br />
            <br />
            Somos referência na área e fundamentais também para o mix de marketing da sua empresa.
          </p>
        </div>
        <div className="cont-img">
          <img src={logoGustaFilms} alt="gusta-films-logo" />
        </div>
      </div>
    </section>
  );
}

export default SectionAboutCompany;
