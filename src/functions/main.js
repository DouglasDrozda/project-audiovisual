export default function ActiveScroll() {
  window.addEventListener('scroll', () => {
    const navBar = document.querySelector('.nav-bar');
    navBar.classList.toggle('ActiveScroll', window.scrollY > 0);
  });
}
