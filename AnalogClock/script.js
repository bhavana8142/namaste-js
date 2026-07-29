const hourHand = document.querySelector('.hr-hand');
const minHand = document.querySelector('.min-hand');
const secHand = document.querySelector('.sec-hand');

function updateClock() {
    const date = new Date();
    const hours = date.getHours();
    const min = date.getMinutes();
    const sec = date.getSeconds();

    const secDegree = sec * 6;
    const minDegree = min * 6;
    const hourDegree = hours + 30 + min * 0.5;

    secHand.style.transform = `rotate(${secDegree}deg)`;
    minHand.style.transform = `rorate(${minDegree}deg)`;
    hourHand.style.transform = `rotate(${hourDegree}deg)`;

}
setInterval(updateClock, 1000);
updateClock();
