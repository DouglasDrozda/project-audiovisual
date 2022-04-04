import React from 'react';

import Swiper from '../SwiperIndication';

import '../../styles/SectionIndications.css';

function SectionIndications() {
  return (
    <section className="section-indication">
      <div className="cont-indication">
        <div>
          <hr />
          <h2>A ESCOLHA É SUA...</h2>
        </div>
        <hr />
      </div>
      <div className="contente-indication">
        <Swiper />
      </div>
    </section>
  );
}

export default SectionIndications;
