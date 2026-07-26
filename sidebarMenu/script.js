const icon = document.getElementById('icon');
const listItems = document.querySelector('#list');
const sectioncon = document.querySelector('#sectioncon')

icon.addEventListener('click', () => {
    listItems.classList.toggle('ul_show');
    sectioncon.classList.toggle('sideImage');


})
