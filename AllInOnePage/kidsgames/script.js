const iButton = document.getElementById("increment");
const dbutton = document.getElementById("decrement");
const d5button = document.getElementById("inecrementBy5");
const reset = document.getElementById("reset");
const resEle = document.getElementById("res");
let count = 0;
iButton.addEventListener("click", function () {
    count += 1;

    resEle.textContent = count;
});
dbutton.addEventListener("click", function () {
    if (count > 0) {
        count -= 1;
    }
    resEle.textContent = count;
});

d5button.addEventListener('click', function () {
    count += 5;
    resEle.textContent = count;
})

reset.addEventListener(" ", function () {
    count = 0;
    resEle.textContent = count;
})

console.log("all other works");
