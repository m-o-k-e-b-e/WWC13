//hamburger

const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const hamburgerMenu = document.querySelector('.menu--hamburger');
const more = document.querySelector('.hamburger__more');
const active = 'is-active'

function toggleClass(e) {
  e.stopPropagation();
  hamburger.classList.toggle(active);
  hamburgerMenu.classList.toggle(active);
  menu.classList.toggle(active);
}

hamburger.addEventListener('click', toggleClass);
more.addEventListener('click', toggleClass);

document.body.addEventListener('click', () => {
  if(hamburger.classList.contains(active)) {
    hamburger.classList.remove(active);
    hamburgerMenu.classList.remove(active);
    menu.classList.remove(active);
  } else {
    return
  }
})

// smooth scroll

const menuEl = document.querySelectorAll('.menu__el');
const footMenuEl = document.querySelectorAll('.footer__menu__el') ;
const sections = document.querySelectorAll('.section');
const logo = document.querySelectorAll('.logo');

function scrollTo(element, e) {
  e.preventDefault();
  window.scroll({
    behavior: 'smooth',
    left: 0,
    top: element.getBoundingClientRect().top - 64 + window.scrollY
  });
}

for(let i = 0; i < sections.length; i++) {
    menuEl[i].addEventListener('click', (e) => {scrollTo(sections[i], e)});
    footMenuEl[i].addEventListener('click', (e) => {scrollTo(sections[i], e)});
}

logo.forEach((el) => {
  el.addEventListener('click', (e) => scrollTo(sections[0], e));
})

// sticky menu

const header = document.querySelector('.nav');
const headerHeight = header.offsetHeight;

window.onscroll = () => header.classList.toggle('scrolled', window.pageYOffset > headerHeight);