import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';

import { SwiperPortfolio } from '../SwiperPortfolio';

import '../../styles/Portfolio.css';

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
                  width="560"
                  height="315"
                  src={urlVideo}
                  title="video"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  frameBorder="0"
                  className="play-on"
                />
              </Modal.Header>
            </Modal>
            <SwiperPortfolio handleClick={handleClick} handleShow={handleShow} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
