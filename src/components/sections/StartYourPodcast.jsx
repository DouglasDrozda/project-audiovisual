import React from 'react';

import Swiper from '../Swiper';

import '../../styles/StartYourPodcast.css';
import data from '../../../posdcast';

function StartYourPodcast() {
  return (
    <section className="section-podcast">
      <div className="cont-podcast-header">
        <hr />
        <h2>COMECE SEU PODCAST</h2>
        <hr />
      </div>
      <div className="contente-podcast">
        <div className="cont-podcast-text">
          <h5>Quer fazer seu podcast e não sabe por onde começar?</h5>
          <div className="paragraph">
            <p>
              Nós damos toda a orientação necessária para você dar o primeiro passo na podosfera.
              Consultoria para a gravação, quais equipamentos usar, como montar uma pauta,
              como gravar remotamente, tratamento de áudio, edição customizada, principais
              cortes e trilha sonora.
              Damos todas as dicas para você criar seu podcast com o máximo de qualidade
              para seus ouvintes.
            </p>
          </div>
        </div>
        <Swiper />
      </div>
    </section>
  );
}

export default StartYourPodcast;
