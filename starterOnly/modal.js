function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const accueilOpen = document.querySelector(".accueil-open")
// input
const prenomInput = document.querySelector("#first");
const nameInput = document.querySelector("#last");
const emailInput = document.querySelector("#email");
const dateNaissance = document.querySelector("#birthdate");
const tournois = document.querySelector("#quantity");
// message error
const messageError = document.querySelector(".style-error");
const nameErorr = document.querySelector(".name-error");
const emailErorr = document.querySelector(".message-adresse");
const dateErorr = document.querySelector(".Date-Birth");
const gameError = document.querySelector(".game-error");
const radioError = document.querySelector(".city-error");
const conditionError = document.querySelector(".condition-error");
const formValidation = document.querySelector("#formvalidation");
// message validation
const submitValidation = document.querySelector(".open-validation");
const messageValidation = document.querySelector(".content-validation");
const boutonValidation = document.querySelector(".bouton-fermer");
const closeValidation = document.querySelector(".closevalidation");

// close validation
const closeform = document.querySelector(".close");
// mobile topnav
const iconTopNavMobile = document.querySelector("#icon-mobile");
const aTopNavMobile = document.querySelectorAll(".lien-mobile");
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
// regexmail
let regexmail = /^[a-zA-Z][a-zA-Z0-9\-\_\.]+@[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}$/;
// form validation
formValidation.addEventListener("submit", (e) => {
  // all radio
  let radiochecked = document.querySelector('input[name = "location"]:checked');

  if (prenomInput.value.length <= 1) {
    e.preventDefault();
    messageError.classList.add("display-block");
    prenomInput.classList.remove("bordergreen");
  }
  if (prenomInput.value.length >= 2) {
    prenomInput.classList.add("bordergreen");
    messageError.classList.remove("display-block");
  }

  if (nameInput.value.length <= 1) {
    e.preventDefault();
    nameErorr.classList.add("display-block");
    nameInput.classList.remove("bordergreen");
  }

  if (nameInput.value.length >= 2) {
    nameErorr.classList.remove("display-block");
    nameInput.classList.add("bordergreen");
  }

  if (emailInput.value.match(regexmail)) {
    emailErorr.classList.remove("display-block");
    emailInput.classList.add("bordergreen");
  } else {
    e.preventDefault();
    emailErorr.classList.add("display-block");
    emailInput.classList.remove("bordergreen");
  }

  if (tournois.value.length >= 0) {
    gameError.style.display = "none";
    tournois.classList.add("bordergreen");
  }

  if (tournois.value.length == "") {
    e.preventDefault();
    gameError.style.display = "block";
    tournois.classList.remove("bordergreen");
  }

  if (
    dateNaissance.value === "" ||
    dateNaissance.value === null ||
    dateNaissance.value === 0
  ) {
    e.preventDefault();
    dateErorr.classList.add("display-block");
    dateNaissance.classList.remove("bordergreen");
  }
  if (dateNaissance.value.length >= 1) {
    dateErorr.classList.remove("display-block");
    dateNaissance.classList.add("bordergreen");
  }

  if (radiochecked != null) {
    radioError.classList.remove("display-block");
  } else {
    e.preventDefault();
    radioError.classList.add("display-block");
  }
  if (checkbox1.checked) {
    conditionError.classList.remove("display-block");
  } else {
    e.preventDefault();
    conditionError.classList.add("display-block");
  }

  if (
    prenomInput.value.length >= 2 &&
    nameInput.value.length >= 2 &&
    emailInput.value.match(regexmail) &&
    (tournois.value === 0 || tournois.value.length >= 1) &&
    dateNaissance.value.length >= 1 &&
    checkbox1.checked &&
    radiochecked != null
  ) {
    messageValidation.classList.add("display-block");
    e.preventDefault();
  }
});
// fermeture de l inscription
closeform.addEventListener("click", () => {
  modalbg.style.display = "none";
});
// fermeture de la validation
boutonValidation.addEventListener("click", () => {
  modalbg.classList.add("display-none");
  messageValidation.classList.add("display-none");
  location.reload();
});
closeValidation.addEventListener("click", () => {
  modalbg.style.display = "none";
  messageValidation.style.display = "none";
  location.reload();
});

aTopNavMobile.forEach((lien) => {
  iconTopNavMobile.addEventListener("click", () => {
    lien.classList.toggle("display-block");
  });
});
accueilOpen.addEventListener("click" , () => {
  location.reload();
})
