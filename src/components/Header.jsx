import React, { useEffect } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import ActiveScroll from '../functions/main';
import logoGustaFilms from '../images/logoGustaFilms.png';
import '../styles/Header.css';

function Header() {
  useEffect(() => {
    ActiveScroll();
  }, []);

  return (
    <header id="home">
      <video loop muted autoPlay className="video-header">
        <source src="https://www.w3schools.com/howto/rain.mp4" type="video/mp4" />
        <source src="media/Cover - A Thousand Years.ogg" type="video/ogg" />
        <source src="media/Cover - A Thousand Years.webm" type="video/webm" />
        Formato de vídeo não suportado
      </video>
      <Navbar variant="light" expand="lg" className="nav-bar">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logoGustaFilms} alt="logoGustaFilms" className="logoGustaFilms" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">SOBRE NÓS</Nav.Link>
              <Nav.Link href="#sobre">COMECE SEU PODCAST</Nav.Link>
              <Nav.Link href="#sevicos">SERVIÇOS</Nav.Link>
              <Nav.Link href="#portfolio">PORTFÓLIO</Nav.Link>
              <Nav.Link href="#contato">CONTATO</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
