let time = document.querySelector(".time-display");
let startbtn = document.getElementById("start-btn");
let stopbtn = document.getElementById("stop-btn");
let resetbtn = document.getElementById("reset-btn");
let lapbtn = document.getElementById("lap-btn");
let laps = document.querySelector(".lap-times");
let laptopic = document.querySelector(".lap-topic");
let stopmsg = document.querySelector(".stop-msg");

let laptimes = [];

let hr = 0;
let msec = 0;
let sec = 0;
let min = 0;

let timerID = null;

function startTimer() {
  msec++;
  if (msec === 100) {
    msec = 0;
    sec++;
  }

  if (sec === 60) {
    sec = 0;
    min++;
  }
  if (min === 60) {
    min = 0;
    hr++;
  }

  let hrStr = hr >= 10 ? hr : `0${hr}`;
  let msecStr = msec >= 10 ? msec : `0${msec}`;
  let secStr = sec >= 10 ? sec : `0${sec}`;
  let minStr = min >= 10 ? min : `0${min}`;

  time.innerHTML = `${hrStr} Hour ${minStr} Min ${secStr} Sec  ${msecStr} ms`;
}

startbtn.addEventListener("click", () => {
  if (timerID !== null) {
    clearInterval(timerID);
  }
  timerID = setInterval(startTimer, 10);
});

stopbtn.addEventListener("click", () => {
  clearInterval(timerID);
});

lapbtn.addEventListener("click", () => {
  const temp = time.innerHTML;
  laptimes.push(temp);
  laptopic.innerHTML = laptimes.length === 0 ? "" : "RECORDED LAP TIMES";
  laps.innerHTML = laptimes.map((value, i) => `<li>🏁 ${value}</li>`).join("");
});

resetbtn.addEventListener("click", () => {
  clearInterval(timerID);
  time.innerHTML = "00 Hour 00 Min 00 Sec 00 ms";
  min = sec = msec = 0;
  laps.innerHTML = "";
  laptimes = [];
  laptopic.innerHTML = laptimes.length === 0 ? "" : "RECORDED LAP TIMES";
});

stopbtn.addEventListener("mouseover", () => {
  stopmsg.style.display = "block";
  stopmsg.textContent = "Hello! This is the message.";
  stopmsg.innerHTML = "Stop";
});

stopbtn.addEventListener("mouseout", () => {
  stopmsg.style.display = "none";
});
