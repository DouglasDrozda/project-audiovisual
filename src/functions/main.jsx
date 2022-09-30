export default function ActiveScroll() {
  window.addEventListener('scroll', () => {
    const navBar = document.querySelector('.header-container');
    navBar.classList.toggle('ActiveScroll', window.scrollY > 0);
  });
}
