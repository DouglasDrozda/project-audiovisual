import React from 'react';

import data from '../../../posdcast';

import '../../styles/StartYourPodcast.css';

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
        <div className="cont-podcast-card">
          {
            data.map((item) => (
              <div key={item.title} className="card-podcast">
                <img src={item.img} alt={item.title} width="52px" />
                <h3>{ item.title }</h3>
                <div className="cont-description">
                  <p>{ item.description }</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  );
}

export default StartYourPodcast;
