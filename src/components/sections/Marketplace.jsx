/* eslint-disable max-len */
import React from 'react';
import '../../styles/Marketplace.css';
import leftQuotes from '../../assets/icons/leftQuotes.png';

function Marketplace() {
  return (
    <section className="marketplace-container">
      <div className="marketplace-sub-container">
        <h2>MERCADO AUDIOVISUAL</h2>
        <div className="marketplace-text">
          <p>
            <img src={leftQuotes} alt="icon-aspas" />
            Vivemos uma avalanche de imagens e sons, onde nunca se consumiu nem se produziu tanto vídeo na história. Consumimos diariamente uma média de duas horas de vídeo, seja um filme, uma série ou um comercial. Com imagens de qualidade, estilos e técnicas diferentes, agregado a um bom plano de comunicação, a sua empresa consegue ir muito mais longe.
          </p>
          <p className="name">GUSTAVO NASCIMENTO</p>
        </div>
      </div>
    </section>
  );
}

export default Marketplace;
