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

createButton.addEventListener('click', () => {
    createCountdown();
});

function createCountdown(){
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

    //CUSTOM IMAGE
    const imgCheck = document.createElement('button');
    imgCheck.setAttribute('type', 'radio');
    imgCheck.textContent = "Custom Image";


    //ADDING INTO DOM
    createTitleContainer.appendChild(titleInputLabel);
    createTitleContainer.appendChild(titleInput);
    createDateContainer.appendChild(dateInputLabel);
    createDateContainer.appendChild(dateInput);
    customImageContainer.appendChild(imgCheck);
}