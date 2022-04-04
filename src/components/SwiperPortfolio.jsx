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
       <div className="description-video-container">
          {
            Object.values(data).map((video) => (
              <SwiperSlide key={video.id}>
                <div className="description-video">
                  <video
                    poster={video.poster}
                    className="video_play"
                    onClick={
                      () => {
                        console.log(video.url);
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
      </Swiper>
    </div>
  );
}

export { SwiperPortfolio };
