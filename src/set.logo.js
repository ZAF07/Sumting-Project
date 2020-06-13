import img from './Logo.png';


const head = document.querySelector('header');
const l = document.createElement('img');
l.src = img;
head.appendChild(l);
l.classList.add('logo');
