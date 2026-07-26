let icon = document.querySelector('#icon');
let toggles = document.querySelector('.toggle')

let scroll1 = window.pageYOffset;
window.onscroll = function () {
    let scroll2 = window.pageYOffset;
    if (scroll1 > scroll2) {
        document.querySelector('nav').style.top = '0';

    }
    else {
        document.querySelector('nav').style.top = "-100px";
    }
    scroll1 = scroll2;

}
icon.addEventListener('click', () => {
    toggles.classList.toggle('show');

})