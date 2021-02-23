const hourHand = document.querySelector(".hour");
const minuteHand = document.querySelector(".minute");
const secondHand = document.querySelector(".second");

let current = new Date();
let seconds = current.getSeconds();
let minutes = current.getMinutes();
let hours = current.getHours();

//this is for military time format
if (hours > 12) {
  hours = hours - 12;
}

let rotation = function () {

  // i only needed the initial current seconds, and the
  // incrementation of the seconds will be done by the setInterval
  seconds++;
  // every second is multiplied by 6 so 60 seconds would be a
  // 360 degree turn
  let secondDegree = seconds * 6;
  secondHand.style.transform = `rotate(${secondDegree}deg)`;

  // the rotation of minute hand is dependent on the second hand
  // once second hand reaches 360deg, the minute hand ticks
  if (secondDegree % 360 == 0) {
    minutes++;
  }
  let minuteDegree = minutes * 6;
  minuteHand.style.transform = `rotate(${minuteDegree}deg)`;

  // the hour hand fixed into the 1-12 positions
  let hourDegreeStatic = hours * 30;
  // this makes the hour hand responsive to the movement 
  // of the minute hand
  let hourDegreeDynamic = (minutes * 6) / 12;
  hourHand.style.transform = `rotate(${
    hourDegreeStatic + hourDegreeDynamic
  }deg)`;
};

setInterval(rotation, 1000);