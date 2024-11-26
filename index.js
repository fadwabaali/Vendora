/*=========== MENU__TOGGLER ===========*/
const nav = document.querySelector('nav');
const menuToggler = document.querySelector('.menu__toggler');

menuToggler.addEventListener('click', () => {
    nav.classList.toggle('open__menu');
});

/*=========== DARK__MODE ===========*/

const darkMode = document.querySelector('.dark__mode'),
    body = document.querySelector('body');

  darkMode.addEventListener('click', () => {
    body.classList.toggle('dark');
  });