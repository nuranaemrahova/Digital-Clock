// let clock = document.querySelector(".clock");
// let hours = document.querySelector(".hours");
// let minutes = document.querySelector(".minutes");
// let seconds = document.querySelector(".seconds");
// // let hour = new Date();
// // console.log(hour);
// setInterval(() => {
//   let hour = new Date().getHours();
//   let minute = new Date().getMinutes();
//   let second = new Date().getSeconds();
//   hours.textContent = (hour < 10 ? "0" : "") + hour;
//   minutes.textContent = (minute < 10 ? "0" : "") + minute;
//   seconds.textContent = (second < 10 ? "0" : "") + second;
// }, 1000);

const hours = document.querySelector("#hours");
const minutes = document.querySelector("#min");
const seconds = document.querySelector("#sec");

setInterval(() => {
  let currentTime = new Date();
  hours.innerHTML =
    (currentTime.getHours() < 10 ? "0" : "") + currentTime.getHours();
  minutes.innerHTML =
    (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes();
  seconds.innerHTML =
    (currentTime.getSeconds() < 10 ? "0" : "") + currentTime.getSeconds();
}, 1000);