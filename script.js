const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.mins-hand');
const hourHand = document.querySelector('.hour-hand');
const imgBox = document.querySelector('.clock-face');
const bg = document.querySelector('body');
const digit = document.querySelector('.digit');
const rezult = document.querySelector('.rezult')
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
const mc=()=>{
const d = new Date();
mies=( monthNames[d.getMonth()]);
return mies
}
const week = new Date()
day = week.getDay();
month  = week.getMonth()
year = week.getFullYear();

var dayOfTheWeek = function (day, month, year) {
    const days = [ "Saturday","Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]

    return days[(new Date(year, month - 1, day)).getDay()]
};
let addZero = (i) => {
    return (i < 10) ? "0" + i : i;
}
let dzien = new Date();
function receive() {
    
    rezult.innerHTML = `${addZero(dzien.getDate())}-${mc()}-${dzien.getFullYear()}  ` + dayOfTheWeek(day, month, year);
}

function setDate() {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    secondHand.style.backgroundColor = 'red';

    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + 90;
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;
    minsHand.style.height = `5px`;

    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + 90 + mins * 0.5;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    hourHand.style.height = `8px`;
    hourHand.style.backgroundColor = '#008acc';
    digit.innerHTML = `${hour}:${addZero(mins)}    `
}
setInterval(setDate, 1000)

const img = ['clock1.png', 'clock2.png']
let i = 0

function changeFace() {

    if (i >= 2) {
        i = 0
    }
    imgBox.style.background = `url(${img[i]})`
    imgBox.style.backgroundSize = `cover`;
    i++
}

function darkChange() {
    bg.classList.toggle('active')
    imgBox.classList.toggle('active1')
}
receive()