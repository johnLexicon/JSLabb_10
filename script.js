const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.minute-hand');
const secondHand = document.querySelector('.second-hand');

function calcHandPosition(value) {
  const degrees = value * 360 + 90;
  return degrees;
}

function renderTime() {
  const now = new Date();
  const secondsDegrees = calcHandPosition(now.getSeconds() / 60);
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  const minutesDegrees = calcHandPosition(now.getMinutes() / 60);
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
  const hoursDegrees = calcHandPosition(now.getHours() / 12);
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

  setTimeout(renderTime, 1000);
}

renderTime();
