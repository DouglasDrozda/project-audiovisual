import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import SwiperCore, { Pagination } from 'swiper';
import data from '../../posdcast';

import 'swiper/css';
import 'swiper/css/pagination';
import '../styles/Swiper.css';

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
    <div id="swiper-app">
      <Swiper
        pagination={{ dynamicBullets: true }}
        allowSlideNext={ activeTouch }
        allowSlidePrev={ activeTouch }
        className="mySwiper main-swiper"
      >
        <div className="cont-podcast-card">
          {
          data.map((item) => (
            <SwiperSlide key={item.title}>
              <div className="card-podcast">
                <img src={item.img} alt={item.title} width="52px" />
                <h3>{ item.title }</h3>
                <div className="cont-description">
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
