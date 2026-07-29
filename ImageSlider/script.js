const images = document.querySelector(".images");
const buttons = document.querySelectorAll(".buttons a");

buttons.forEach((button, index) => {
    button.addEventListener("click", (e) => {
        e.preventDefault();
        buttons.forEach((btn) => {
            btn.style.backgroundColor = 'transparent';
        })
        button.style.backgroundColor = 'white';



        images.style.transform = `translateX(-${index * 20}% )`;

    });


});
