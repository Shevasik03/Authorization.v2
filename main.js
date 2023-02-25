'use strict'

const signIN = document.querySelector('#form__sign-in');
const signUP = document.querySelector('#form__sign-up');
const buttonSignIn = document.querySelector('.button__sign-in');
const buttonSignUp = document.querySelector('.button__sign-up');
const bodyBackground = document.body;


buttonSignIn.addEventListener('click', transitionForm);
buttonSignUp.addEventListener('click', transitionForm);

function transitionForm (event) {
    let elemButton = event.target;

    signIN.classList.toggle('transition__form-right');
    signUP.classList.toggle('transition__form-left');

    if (elemButton === buttonSignIn) {
        bodyBackground.style.backgroundImage = "url(./img/background__sign-up.jpg)";
    } else {
        bodyBackground.style.backgroundImage = "url(./img/background__sign-in.jpg)";
    }
    
    changeButton();
}

function signInForm () {
    signIN.classList.add('transition__form-right');
    signUP.classList.add('transition__form-left');
    bodyBackground.style.backgroundImage = "url(./img/background__sign-up.jpg)";
    changeButton();
}

function changeButton () {
    buttonSignIn.classList.toggle('displayNone');
    buttonSignUp.classList.toggle('displayNone');
}

const btnReg = document.querySelector('#submitReg');
const nameReg = document.querySelector('#inputNameReg');
const emailReg = document.querySelector('#inputEmailReg');
const passwordReg = document.querySelector('#inputPasswordReg');
const checkboxReg = document.querySelector("#checkboxReg");

const arrInputReg = [nameReg, emailReg, passwordReg];
let usersData = [];

btnReg.addEventListener('click', submissionForm);

function submissionForm (event) {
    for (let i = 0 ; i < 3; i++) {
        event.preventDefault();
        if (arrInputReg[i].value === "") return;
    }

    if (!checkboxReg.checked) return;

    registerUser();

    document.querySelector(".form__inputReg").reset();

    signInForm();
}

function registerUser() {
    let userData = {
        name: nameReg.value,
        email: emailReg.value,
        password:passwordReg.value,
    };
    
    usersData.push(userData);

    console.log(usersData);
}

const btnLogin = document.querySelector('#submitEnter');
const inputEmail = document.querySelector('#inputEmailEnter');
const inputPassword = document.querySelector('#inputPasswordEnter');

function findUser(event, users) {
    event.preventDefault();
    for (let i = 0; i < users.length; i++) {
      if (users[i].email === inputEmail.value && users[i].password === inputPassword.value) {
        console.log('User found:', users[i]);
        location.replace("https://music.youtube.com/");
      }
    }
}
  
btnLogin.addEventListener('click', function(event) {
findUser(event, usersData);
});
