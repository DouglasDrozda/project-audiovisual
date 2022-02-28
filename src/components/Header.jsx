import React, { useEffect } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import ActiveScroll from '../functions/main';
import '../styles/Header.css';
import logoGustaFilms from '../assets/images/logoGustaFilms.png';

function Header() {
  useEffect(() => {
    ActiveScroll();
  }, []);

  return (
    <div>
      <header id="home">
        <Navbar variant="light" expand="lg" className="nav-bar">
          <Container>
            <Navbar.Brand href="#home">
              <img src={logoGustaFilms} alt="logotipo-Gusta-Films" className="logoGusta" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav>
                <Nav.Link className="navLink" href="#home">SOBRE NÓS</Nav.Link>
                <Nav.Link className="navLink" href="#sobre">COMECE SEU PODCAST</Nav.Link>
                <Nav.Link className="navLink" href="#sevicos">SERVIÇOS</Nav.Link>
                <Nav.Link className="navLink" href="#portfolio">PORTFÓLIO</Nav.Link>
                <Nav.Link className="navLink" href="#contato">CONTATO</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      <video loop muted autoPlay className="video-header">
        <source src="https://cdn-prod-ccv.adobe.com/-BPyu3eZxyS/rend/-BPyu3eZxyS_576.mp4?hdnts=st%3D1646086968%7Eexp%3D1646346168%7Eacl%3D%2Fshared_assets%2Fimage%2F*%21%2Fz%2F-BPyu3eZxyS%2Frend%2F*%21%2Fi%2F-BPyu3eZxyS%2Frend%2F*%21%2F-BPyu3eZxyS%2Frend%2F*%21%2F-BPyu3eZxyS%2Fimage%2F*%7Ehmac%3D50191da5b188b3de9e5e15e96ebb0cb1cb674471d07d04906e561d8d2dad1ee9" type="video/mp4" />
        <source src="media/Cover - A Thousand Years.ogg" type="video/ogg" />
        <source src="media/Cover - A Thousand Years.webm" type="video/webm" />
        Formato de vídeo não suportado
      </video>
    </div>
  );
}

export default Header;
