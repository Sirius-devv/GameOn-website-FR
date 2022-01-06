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
//
const prenomInput = document.querySelector("#first");
const nameInput = document.querySelector("#last");
const emailInput = document.querySelector("#email");
const dateNaissance = document.querySelector("#birthdate");
const tournois = document.querySelector("#quantity");

const messageError = document.querySelector(".style-error");
const nameErorr = document.querySelector(".name-error");
const emailErorr = document.querySelector(".message-adresse");
const dateErorr = document.querySelector(".Date-Birth");
const gameError = document.querySelector(".game-error");
const radioError = document.querySelector(".city-error");
const conditionError = document.querySelector(".condition-error");
const formValidation = document.querySelector("#formvalidation");

const submitValidation = document.querySelector(".open-validation");
const messageValidation = document.querySelector(".content-validation");
const boutonValidation = document.querySelector(".bouton-fermer");
const closeValidation = document.querySelector(".closevalidation")

const radio = document.getElementById("location1");
const radio2 = document.getElementById("location2");
const radio3 = document.getElementById("location3");
const radio4 = document.getElementById("location4");
const radio5 = document.getElementById("location5");
const radio6 = document.getElementById("location6");

const closeform = document.querySelector(".close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

formValidation.addEventListener("submit", (e) => {
  if (prenomInput.value.length <= 1) {
    e.preventDefault();
    messageError.style.display = "block";
    prenomInput.classList.remove("bordergreen");
  }
  if (prenomInput.value.length >= 2) {
    prenomInput.classList.add("bordergreen");

    messageError.style.display = "none";
  }

  if (nameInput.value.length <= 1) {
    e.preventDefault();
    nameErorr.style.display = "block";
    nameInput.classList.remove("bordergreen");
  }

  if (nameInput.value.length >= 2) {
    nameErorr.style.display = "none";
    nameInput.classList.add("bordergreen");
  }

  if (emailInput.value.length >= 5) {
    emailErorr.style.display = "none";
    emailInput.classList.add("bordergreen");
  }
  if (emailInput.value.length <= 5) {
    e.preventDefault();
    emailErorr.style.display = "block";
    emailInput.classList.remove("bordergreen");
  }

  if (tournois.value.length >= 0) {
    gameError.style.display = "none";
    tournois.classList.add("bordergreen");
  }

  if (tournois.value === "") {
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
    dateErorr.style.display = "block";
    dateNaissance.classList.remove("bordergreen");
  }
  if (dateNaissance.value.length >= 1) {
    dateErorr.style.display = "none";
    dateNaissance.classList.add("bordergreen");
  }

  if (
    radio.checked ||
    radio2.checked ||
    radio3.checked ||
    radio4.checked ||
    radio5.checked ||
    radio6.checked
  ) {
    radioError.style.display = "none";
    console.log("checked ville");
  } else {
    e.preventDefault();
    radioError.style.display = "block";
    console.log("pas check ville");
  }
  if (checkbox1.checked) {
    conditionError.style.display = "none";
  } else {
    e.preventDefault();
    conditionError.style.display = "block";
    console.log("faux");
  }

  if (
    prenomInput.value.length >= 2 &&
    nameInput.value.length >= 2 &&
    emailInput.value.length >= 5 &&
    tournois.value.length >= 0 &&
    dateNaissance.value.length >= 1 &&
    checkbox1.checked &&
    (radio.checked ||
      radio2.checked ||
      radio3.checked ||
      radio4.checked ||
      radio5.checked ||
      radio6.checked)
  ) {
    messageValidation.style.display = "block";
    console.log("validate");
    e.preventDefault();
    return true;
    
  }
 
  
});

closeform.addEventListener("click", (e) => {
  modalbg.style.display = "none";
  console.log("0");
  
});
boutonValidation.addEventListener("click" , () => {
  modalbg.style.display = "none";
  messageValidation.style.display = "none"
})
closeValidation.addEventListener("click" , () => {
  modalbg.style.display = "none";
  messageValidation.style.display = "none"
})



// submitValidation.addEventListener("click", () => {
//   if (prenomInput.value.length >= 2 && nameInput.value.length >= 2 && emailInput.value.length >= 5 && tournois.value.length >= 0  && dateNaissance.value.length >= 1 && checkbox1.checked && (radio.checked || radio2.checked || radio3.checked || radio4.checked || radio5.checked || radio6.checked)){
//     messageValidation.style.display = "block"
//     console.log("lllll");

// }
// else{
//   console.log("false");

// }
// });
