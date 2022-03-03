import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import SwiperCore, { Pagination } from 'swiper';
import data from '../../indications';

import 'swiper/css';
import 'swiper/css/pagination';
import '../styles/SwiperIndication.css';

SwiperCore.use([Pagination]);

function SwiperApp() {
  const [ activeTouch, setActiveTouch ] = useState();

  const displayVerify = () => {
    let screenWidth = window.innerWidth;

    if (screenWidth >= 972) {
      setActiveTouch(false);
      return;
    }

    setActiveTouch(true);
    return;
  }

  window.addEventListener('resize', () => {
    displayVerify();
  });

  useEffect(() => {
    displayVerify();
  }, [])

  return (
    <div id="swiper-app" className="cont-indication-card">
      <Swiper
        pagination={{ dynamicBullets: true }}
        allowSlideNext={ activeTouch }
        allowSlidePrev={ activeTouch }
        className="mySwiper main-swiper"
      >
        <div>
          {
            data.map((item) => (
              <SwiperSlide key={item.title}>
                <div className="card-indication">
                  <div className="cont-title-img">
                    <h3>{ item.title }</h3>
                    <img src={item.img} alt={item.title} width="70px" />
                  </div>
                  <div className="cont-description-indication">
                    <p>{ item.description }</p>
                  </div>
                </div>
              </SwiperSlide>
            ))
          }
        </div>
      </Swiper>
    </div>
  );
}

export default SwiperApp;
