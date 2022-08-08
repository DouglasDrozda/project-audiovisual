import ScrollReveal from 'scrollreveal';

function animateScroll() {
  const scroll = ScrollReveal({
    origin: 'top',
    distance: '100px',
    duration: 3000,
    reset: false,
  });
  scroll.reveal('.cont-img', { delay: 200 });
  scroll.reveal('.description-video', { rotate: { x: 180, y: 0, z: 80 } }, { delay: 200 });

  const scroll1 = ScrollReveal({
    origin: 'left',
    distance: '80px',
    duration: 3000,
  });
  scroll1.reveal('.cont-title', { delay: 200 });
  scroll1.reveal('.cont-title-img h3', { delay: 200 });
  scroll1.reveal('.cont-indication h2', { delay: 200 });
  scroll1.reveal('.planejamento', { delay: 200 });
  scroll1.reveal('.edicao', { delay: 200 });

  const scroll2 = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 3000,
  });
  scroll2.reveal('.cont-title-img img', { delay: 200 });

  const scroll3 = ScrollReveal({
    origin: 'rigth',
    distance: '80px',
    duration: 3000,
  });
  scroll3.reveal('.producao', { delay: 200 });
  scroll3.reveal('.distribuicao', { delay: 200 });
}

export default animateScroll;
