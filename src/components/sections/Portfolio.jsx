/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/media-has-caption */
import React, { useState } from 'react';
import '../../styles/Portfolio.css';
import { Modal } from 'react-bootstrap';
import data from '../../services/data';
import play from '../../assets/icons/play.png';

function Portfolio() {
  const [urlVideo, setUrlVideo] = useState('');
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(!show);

  const handleClick = (url) => {
    setUrlVideo(url);
  };

  return (
    <section className="section-portfolio" id="portfolio">
      <div className="title-portfolio">
        <hr />
        <h2>PORTFÓLIO</h2>
        <hr />
      </div>
      <div className="portfolio-sub-container">
        <div className="video-maker">
          <div className="row1">
            <Modal
              show={show}
              backdrop="static"
              keyboard={false}
            >
              <Modal.Header closeButton onClick={handleShow}>
                <iframe
                  src={urlVideo}
                  title="video"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  frameBorder="0"
                  className="play-on"
                />
              </Modal.Header>
            </Modal>
            <div className="description-video-container">
              {
                Object.values(data).map((video) => (
                  <div className="description-video" key={video.id}>
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
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
