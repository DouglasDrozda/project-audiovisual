import React from 'react';
// import podcastDesk from '../../assets/images/podcast-desk.jpg';

import '../../styles/SectionSudiovisualMarket.css';

function SectionSudiovisualMarket() {
  return (
    <section className="section-market">
      <div className="contente-market">
        <div className="contente-market-text">
          <div className="cont-market-1">
            <h1>PODCAST</h1>
            <h2>APOSTE NA MÍDIA QUE NÃO PARA DE CRESCER</h2>
          </div>
          <div className="cont-market-2">
            <p>
              O Podcast pode transformar a comunicação do seu
              negócio e queremos ajudar você a oferecer
              informação, entretenimento, além de fortalecimento
              da marca; tudo ao pé do ouvido, construindo
              relacionamentos firmes através dessa mídia em
              franca ascensão.
            </p>
          </div>
          <div className="btn-about">
            <a href="#sobre">CONHEÇA A GUSTA FILMS</a>
          </div>
        </div>
        {/* <div className="market-img">
          <img src={podcastDesk} alt="backgroundPodcast" />
        </div> */}
      </div>
    </section>
  );
}

export default SectionSudiovisualMarket;
