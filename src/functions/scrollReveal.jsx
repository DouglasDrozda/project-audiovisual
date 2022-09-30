import ScrollReveal from 'scrollreveal';

function animateScroll() {
  const scroll = ScrollReveal({
    origin: 'top',
    distance: '100px',
    duration: 3000,
    reset: false,
  });
  scroll.reveal('.cont-img', { delay: 200 });
  scroll.reveal('.video-service-sub-container h2', { delay: 200 });
  scroll.reveal('.cont-podcast-header h2', { delay: 200 });

  const scroll1 = ScrollReveal({
    origin: 'left',
    distance: '80px',
    duration: 3000,
  });
  scroll1.reveal('.cont-title', { delay: 200 });
  scroll1.reveal('.cont-indication h2', { delay: 200 });
  scroll1.reveal('.title-portfolio h2', { delay: 200 });
  scroll1.reveal('.edicao', { delay: 200 });
  scroll1.reveal('.contact-text', { delay: 200 });
  scroll1.reveal('.video-service-text', { delay: 200 });
  scroll1.reveal('.cont-podcast-text h5', { delay: 200 });

  const scroll3 = ScrollReveal({
    origin: 'rigth',
    distance: '80px',
    duration: 3000,
  });
  scroll3.reveal('.producao', { delay: 200 });
  scroll3.reveal('.distribuicao', { delay: 200 });
  scroll3.reveal('.contact-form-container form', { delay: 200 });

  const scroll4 = ScrollReveal({
    origin: 'rigth',
    distance: '80px',
    duration: 3000,
  });
  scroll4.reveal('.cont-market-1', { delay: 200 });

  const scroll5 = ScrollReveal({
    origin: 'left',
    distance: '80px',
    duration: 3000,
  });
  scroll5.reveal('.cont-market-2', { delay: 200 });
}

export default animateScroll;
