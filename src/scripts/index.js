import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import './script';

const navToggle = document.querySelector('.nav-toggle-label');
const nav = document.querySelector('.nav');
const body = document.querySelector('body');

navToggle.addEventListener('click', () => {
  nav.classList.toggle('nav-open');
  body.classList.toggle('nav-active');
});

// Menutup menu saat mengklik di luar menu
document.addEventListener('click', (event) => {
  const isClickInsideNav = nav.contains(event.target);
  const isClickInsideToggle = navToggle.contains(event.target);
  
  if (!isClickInsideNav && !isClickInsideToggle) {
    nav.classList.remove('nav-open');
    body.classList.remove('nav-active');
  }
});

// Mencegah menu tertutup saat mengklik di dalam menu
nav.addEventListener('click', (e) => {
  e.stopPropagation();
});
