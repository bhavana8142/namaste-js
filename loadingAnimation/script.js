const percent = document.querySelector('.percent');
const progress = document.querySelector('.progress');
const text = document.querySelector('.text');

let count = 4;
let per = 16;
let loading = setInterval(animate, 50);

function animate() {
    if (count === 100 && per === 400) {
        clearInterval(loading);
        percent.classList.add('text-blink');
        text.style.display = `block`;


    }
    else {
        per = per + 4;
        count = count + 1;
        progress.style.width = per + `px`;
        percent.textContent = count + '%'

    }

}