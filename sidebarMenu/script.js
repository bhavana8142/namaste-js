const icon = document.getElementById('icon');
const listItems = document.querySelector('#list');
const sectioncon = document.querySelector('#sectioncon');
const scrollup = document.querySelector('#scrollup');

icon.addEventListener('click', () => {
    listItems.classList.toggle('ul_show');
    sectioncon.classList.toggle('sideImage');


});

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 500) {
        scrollup.classList.add('scrollup1')

    }
    else {
        scrollup.classList.remove('scrollup1')

    }
})
scrollup.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'

    })

})
