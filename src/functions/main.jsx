export default function ActiveScroll() {
  const screenWidth = window.innerWidth;

  if (screenWidth >= 950) {
    window.addEventListener('scroll', () => {
      const navBar = document.querySelector('.header-container');
      navBar.classList.toggle('ActiveScroll', window.scrollY > 0);
    });
  }
}
