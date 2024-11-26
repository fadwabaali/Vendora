/*=========== MENU__TOGGLER ===========*/
const nav = document.querySelector('nav');
const menuToggler = document.querySelector('.menu__toggler');

menuToggler.addEventListener('click', () => {
    nav.classList.toggle('open__menu');
});