const hamburgerBtn = document.querySelector('#hamburger-button');
const mobileMenu = document.querySelector('#mobile-menu');
const mobileLnk = mobileMenu.querySelectorAll("li a");
hamburgerBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hide-all');
  hamburgerBtn.classList.toggle('close-button');
});
mobileLnk.forEach((link) => {
  link.addEventListener('click', () => {
    mobileMenu.classList.toggle('hide-all');
    hamburgerBtn.classList.toggle('close-button');
  });
});