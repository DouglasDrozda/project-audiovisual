import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import SwiperCore, { Pagination } from 'swiper';
import data from '../services/data';

import play from '../assets/icons/play.png';

import 'swiper/css';
import 'swiper/css/pagination';
import '../styles/Swiper.css';

SwiperCore.use([Pagination]);

function SwiperPortfolio({ handleClick, handleShow }) {
  const [activeTouch, setActiveTouch] = useState();
  const [videoQuantity, setVideoQuantity] = useState(6);

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

  const cardsVideoDefault = data.slice(0, videoQuantity)

  function showCardVideo() {
    if (videoQuantity === 6) {
      return setVideoQuantity(15)
    }
    return setVideoQuantity(6)
  }

  return (
    <div id="swiper-app">
      <Swiper
        pagination={{ dynamicBullets: true }}
        allowSlideNext={activeTouch}
        allowSlidePrev={activeTouch}
        className="mySwiper main-swiper portfolio-swiper"
      >
        <div className="description-video-container">
          {
            cardsVideoDefault.map((video) => (
              <SwiperSlide key={video.id}>
                <div className="description-video">
                  <video
                    poster={video.poster}
                    className="video_play"
                    onClick={
                      () => {
                        handleClick(video.url);
                        handleShow();
                      }
                    }
                  />
                  <div
                    className="on_play"
                    onClick={
                      () => {
                        handleClick(video.url);
                        handleShow();
                      }
                    }
                  >
                    <img src={play} alt="play" />
                  </div>
                </div>
              </SwiperSlide>
            ))
          }
        </div>
        <div className="btn-portfolio">
          <button type="button" onClick={() => showCardVideo()}>{videoQuantity === 6 ? 'Ver mais' : 'Ver menos'}</button>
        </div>
      </Swiper>
    </div>
  );
}

export { SwiperPortfolio };
