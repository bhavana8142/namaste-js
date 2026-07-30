const checkbox = document.querySelector('.checkbox');
const body = document.querySelector('body');
const button = document.querySelector('.button')
checkbox.addEventListener('click', active);

function active() {
    if (this.checked) {
        body.style.background = 'black',
            body.style.color = 'white'
        button.classList.add('dark')



    }
    else {
        body.style.background = 'white',
            body.style.color = 'black'
        button.classList.remove('dark')


    }


}