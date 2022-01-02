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

const closeform = document.querySelector(".close")

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}



formValidation.addEventListener("submit", (e) => {
  // console.log(checkbox1.checked);

 

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
    dateErorr.style.display = "block";
    dateNaissance.classList.remove("bordergreen");
  }
  if (dateNaissance.value.length >= 1) {
    dateErorr.style.display = "none";
    dateNaissance.classList.add("bordergreen");
  }

  let radio = document.getElementById("location1");
  let radio2 = document.getElementById("location2");
  let radio3 = document.getElementById("location3");
  let radio4 = document.getElementById("location4");
  let radio5 = document.getElementById("location5");
  let radio6 = document.getElementById("location6");

  if (radio.checked != null || radio2.checked != null || radio3.checked != null || radio4.checked != null || radio5.checked != null || radio6.checked != null) {
    radioError.style.display = "block";
  }
  if (radio.checked || radio2.checked  || radio3.checked || radio4.checked  || radio5.checked  || radio6.checked ) {
    radioError.style.display = "none";
    console.log("checked");
  } 
  if (checkbox1.checked) {
    conditionError.style.display = "none";
  } else {
    conditionError.style.display = "block";
  }
});

closeform.addEventListener("click" , () =>{
  modalbg.style.display ="none"
})