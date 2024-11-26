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

/*=========== SELECT IMAGES ===========*/

const productImg = document.getElementById("ProductImg");
const smallImg = document.getElementsByClassName("small_img")

for (let i = 0; i < smallImg.length; i++) {
    smallImg[i].onclick = function () {
        productImg.src = smallImg[i].src;
    };
}

