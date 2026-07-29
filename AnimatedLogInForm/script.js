const show = document.querySelector('.show');
const pswrd = document.querySelector('.pswrd');

show.addEventListener('click', active);

function active() {
    if (pswrd.type === 'password') {
        pswrd.type = 'text';
        show.style.color = "#1DA1F2";
        show.textContent = "HIDE"

    }
    else {
        pswrd.type = 'password'
        show.style.color = "#111";
        show.textContent = "SHOW"

    }
}