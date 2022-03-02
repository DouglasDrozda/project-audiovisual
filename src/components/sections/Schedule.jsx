import React from 'react';
import '../../styles/Schedule.css';
// import ScheduleInfo from './ScheduleInfo';

function Schedule() {
  return (
    <section className="schedule-container">
      <div className="schedule-title">
        <hr />
        <h2>CRONOGRAMA DO PROJETO</h2>
        <hr />
      </div>
      <div className="row mt-4">
        <div className="col-md-10 mx-auto">
          {/* <!-- Timeline --> */}
          <div className="timeline timeline-one">
            {/* <!-- Timeline Item 1 --> */}
            <div className="timeline-item">
              <h5 className="my-3 planejamento">PLANEJAMENTO</h5>
              <p className="description">
                O planejamento é a espinha dorsal do seu podcast. Por essa
                razão a GustaFilms lhe ajudará a definir temática geral do
                projeto, a dinâmica de gravação e o tom de voz para seu show.
              </p>
            </div>
            {/* <!-- Timeline Item 2 --> */}
            <div className="timeline-item">
              <h5 className="my-3 producao">PRODUÇÃO</h5>
              <p className="description">
                Antes de apertar o REC, temos muito trabalho: definição da
                pauta do episódio, estruturação do roteiro, preparação do
                equipamento e local de gravação. Além de treinamentos e
                consultorias.
              </p>
            </div>
            {/* <!-- Timeline Item 3 --> */}
            <div className="timeline-item">
              <h5 className="my-3 edicao">EDIÇÃO</h5>
              <p className="description">
                Imagens captadas? Vamos à edição: cuidamos da equalização
                do áudio, removemos trechos desnecessários, adicionamos trilha
                e efeitos sonoros. Criamos também as vinhetas e assinatura
                sonora do seu podcast e o adicionamos ao episódio finalizado.
              </p>
            </div>
            {/* <!-- Timeline Item 4 --> */}
            <div className="timeline-item">
              <h5 className="my-3 distribuicao">DISTRIBUIÇÃO</h5>
              <p className="description">
                Programa pronto? Então nós te ajudaremos a divulgar seu show
                nas principais plataformas de podcast disponíveis atualmente.
                Além disso te mostraremos como acompanhar as métricas de
                audiência e tirar o máximo de informação do seu novo projeto.
              </p>
            </div>
          </div>
          {/* <!--End of Timeline--> */}
        </div>
      </div>
    </section>
  );
}

export default Schedule;
