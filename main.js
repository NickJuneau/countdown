//DECLARING VARIABLES
const countdown = document.querySelector("#countdown");
const createButton = document.querySelector("#create-button");
const createContainer = document.querySelector(".create-date-container");
const createTitleContainer = document.querySelector('.title-input-container')
const createDateContainer = document.querySelector('.date-input-container');
const customImageContainer = document.querySelector('.custom-image-container');

//COUNTDOWN LOGIC
let countDownDate = new Date("2024-10-03T14:54:00").getTime();

let updateTime = setInterval(function() {
    let now = new Date().getTime();
    let distance = countDownDate-now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdown.textContent = days+" Days - "+hours+" Hours - "+minutes+" Minutes - "+seconds+" Seconds";

    if(distance < 0){
        clearInterval(updateTime);
        countdown.textContent = "Date Reached!";
    }
}, 1000);

//So you can't press create more than once at a time
let canCreate = true;

createButton.addEventListener('click', () => {
    if(canCreate){
        createCountdown();
    }
});


//CREATING ELEMENTS FOR THE CREATION OF A NEW COUNTDOWN
//TITLE INPUT SECTION
const titleInputLabel = document.createElement('div');
titleInputLabel.classList.add('input-context');
titleInputLabel.textContent = "Enter Countdown Title Below";

const titleInput = document.createElement('input');
titleInput.classList.add('create-input');

//DATE INPUT SECTION
const dateInputLabel = document.createElement('div');
dateInputLabel.classList.add('input-context');
dateInputLabel.textContent = "Date Format: 'YYYY-MM-DDTHH:mm:ss' (Leave the  'T' between the DD and HH)";

const dateInput = document.createElement('input');
dateInput.classList.add('create-input');

//CUSTOM IMAGE (Not Working)
// const checkboxContainer = document.querySelector('.checkbox-container');

// const imgCheck = document.createElement('input');
// imgCheck.setAttribute('type', 'checkbox');

// const imgCheckLabel = document.createElement('div');
// imgCheckLabel.textContent = 'Custom Image?';
// imgCheckLabel.classList.add('input-context');

// const imageInput = document.createElement('input');
// imageInput.setAttribute('type', 'file');
// imageInput.classList.add('input-context');

// imgCheck.addEventListener('click', () =>{
//     customImageContainer.appendChild(imageInput);

// });

//SUBMIT BUTTON
const submitButton = document.createElement('button');
submitButton.classList.add('button-theme')
submitButton.textContent = 'Submit';


//VAIABLES FOR PAGE ELEMENTS
const pageTitle = document.querySelector('#header-text');
const pageImage = document.querySelector('#main-img');

submitButton.addEventListener('click', () => {
    pageTitle.textContent = titleInput.value;
    // pageImage.setAttribute('src', imageInput.value);
    countDownDate = new Date(dateInput.value).getTime();
    createContainer.remove();
});

function createCountdown(){

    //ADDING ELEMENTS INTO DOM
    createTitleContainer.appendChild(titleInputLabel);
    createTitleContainer.appendChild(titleInput);
    createDateContainer.appendChild(dateInputLabel);
    createDateContainer.appendChild(dateInput);
    // checkboxContainer.appendChild(imgCheck);
    // checkboxContainer.appendChild(imgCheckLabel);
    createContainer.appendChild(submitButton);

    canCreate = !canCreate;
}