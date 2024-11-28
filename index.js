/*=========== MENU__TOGGLER ===========*/
const nav = document.querySelector('nav');
const menuToggler = document.querySelector('.menu__toggler');


menuToggler.addEventListener('click', () => {
    nav.classList.toggle('open__menu');
});

/*=========== DARK__MODE ===========*/

const body =document.querySelector('body');
const darkMode = document.querySelector('.dark__mode');

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
 
/*=========== FORM ===========*/

const form = document.querySelector("form");
const quantitySelector = document.getElementById("viewSelector");
const totalDisplay = document.getElementById("total");

// Prix unitaire du produit
const unitPrice = 699; 

function updateTotal() {
  const quantity = parseInt(quantitySelector.value, 10);
  const total = quantity * unitPrice;
  totalDisplay.textContent = `${total} €`;
}

quantitySelector.addEventListener("change", updateTotal);

// const regexValidation = {
//   Nom: /^[a-zA-Z]{2,}$/, 
//   Prenom: /^[a-zA-Z]{2,}$/, 
//   Adresse: /^.{5,}$/, 
//   tele: /^\+?[0-9]{10,15}$/, 
//   Codepostal: /^[0-9]{5}$/ 
// };

// function validateField(input) {
//   const regex = regexValidation[input.name];
//   if (regex && !regex.test(input.value.trim())) {
//     input.style.borderColor = "red";
//     return false;
//   }
//     input.style.borderColor = ""; 
//     return true;
//   }

//   form.addEventListener("submit", function (e) {
//     e.preventDefault(); 
//     const inputs = form.querySelectorAll(".form_input");
//     let isValid = true;

//     inputs.forEach(input => {
//       if (!validateField(input)) {
//         isValid = false;
//         alert(`Le champ "${input.previousElementSibling.textContent}" est invalide.`);
//       }
//     });

//     if (isValid) {
//       alert("Formulaire soumis avec succès!");
//     }
//   });

// // Calculer le total initial
// updateTotal();

const regexValidation = {
  Nom: /^[a-zA-Z]{2,}$/, 
  Prenom: /^[a-zA-Z]{2,}$/, 
  Adresse: /^.{5,}$/, 
  tele: /^\+212[5-7][0-9]{8}$/, 
  Codepostal: /^[0-9]{5}$/ 
};

form.addEventListener("submit", function (e) {
  e.preventDefault(); 
  const inputs = form.querySelectorAll(".form_input");
  let isValid = true;

  inputs.forEach(input => {
    const regex = regexValidation[input.name];
    if (regex && !regex.test(input.value.trim())) {
      isValid = false;
      input.style.borderColor = "red";
      alert(`Le champ "${input.previousElementSibling.textContent}" est invalide.`);
    } else {
      input.style.borderColor = "";
    }
  });

  if (isValid) alert("Formulaire soumis avec succès!");
});
