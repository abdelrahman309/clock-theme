const hourEl = document.querySelector(".hour");
const minEl = document.querySelector(".minute");
const secEl = document.querySelector(".second");
const dateEl = document.querySelector(".date");
const timeEl = document.querySelector(".time");
const btn = document.querySelector(".mood");

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

// Dark / Light mode toggle
btn.addEventListener("click", (e) => {
  const html = document.querySelector("html");
  if (html.classList.contains("dark")) {
    html.classList.remove("dark");
    e.target.innerHTML = "Dark Mode";
  } else {
    html.classList.add("dark");
    e.target.innerHTML = "Light Mode";
  }
});

function setTime() {
  const time = new Date();
  const hour = time.getHours();
  const month = time.getMonth();
  const day = time.getDay();
  const date = time.getDate();
  const year = time.getFullYear();
  const seconds = time.getSeconds();
  const minutes = time.getMinutes();

  // أدق لحركة العقرب
  const hourForClock = (hour % 12) + minutes / 60;
  const ampm = hour >= 12 ? "PM" : "AM";

  // Rotate hands
  hourEl.style.transform = `translate(-50%,-100%) rotate(${scale(
    hourForClock,
    0,
    12,
    0,
    360
  )}deg)`;
  minEl.style.transform = `translate(-50%,-100%) rotate(${scale(
    minutes,
    0,
    60,
    0,
    360
  )}deg)`;
  secEl.style.transform = `translate(-50%,-100%) rotate(${scale(
    seconds,
    0,
    60,
    0,
    360
  )}deg)`;

  // Digital time
  timeEl.innerHTML = `${Math.floor(hourForClock)}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds} ${ampm}`;

  // Date
  dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span> ${year}`;
}

// Map function
const scale = (number, inMin, inMax, outMin, outMax) => {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
};

setTime();
setInterval(setTime, 1000);
