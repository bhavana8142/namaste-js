const pickNumberBtn = document.getElementById("number");
const resv = document.getElementById("res");
const loteryContainer = document.getElementById("loteryCon");
const tick = new Audio('tap.wav');
const completelevel = new Audio('completegame.wav')
const gifts = [
    "100 RS chash back",
    "diary milk",
    "soap box",
    "lemons",
    "apple",
    "plate",
    "mug",
    "pencil",
    "pen",
    "powder",
    "book",
    "rubber",
    "food",
    "100 RS chash back",
    "diary milk",
    "soap box",
    "lemons",
    "apple",
    "plate",
    "mug",
    "pencil",
    "pen",
    "powder",
    "book",
    "rubber",
    "food",
    "100 RS chash back",
    "diary milk",
    "soap box",
    "lemons",
    "apple",
    "plate",
    "mug",
    "pencil",
    "pen",
    "powder",
    "book",
    "rubber",
    "food",
    "100 RS chash back",
    "diary milk",
    "soap box",
    "lemons",
    "apple",
    "plate",
    "mug",
    "pencil",
    "pen",
    "powder",
    "book",
];

pickNumberBtn.addEventListener("click", function () {
    for (let i = 1; i <= 50; i++) {
        document.getElementById(i).classList.remove("winningBox");
    }
    resv.textContent = "please wait.....";
    let secondCount = 0;
    const IntervalId = setInterval(function () {
        tick.pause();
        tick.currentTime = 0;
        tick.play();
        secondCount = secondCount + 1;
        const randomBoxv = Math.floor(Math.random() * 50) + 1;
        for (let i = 1; i <= 50; i++) {
            if (i === randomBoxv) {
                document.getElementById(i).classList.add("highlitedBox");
            }
            else {
                document.getElementById(i).classList.remove("highlitedBox");
            }
        }








        if (secondCount === 5) {
            document.getElementById(randomBoxv).classList.remove("highlitedBox");

            let ranvalue = Math.random() * 50;
            let fvals = Math.floor(ranvalue) + 1;
            const drawNumber = gifts[fvals - 1];
            resv.textContent = `you have got ${fvals}, and you won ${drawNumber} `;



            document.getElementById(fvals).classList.add("winningBox");
            completelevel.pause();
            completelevel.currentTime = 0;
            completelevel.play();

            clearInterval(IntervalId);
        }
    }, 1000);
});
gifts.forEach(function (value, i) {
    //<div class="box">100 Rs cash back</div>
    const boxElement = `<div class="box" id =${i + 1}>${i + 1}. ${value} </div>`;
    // console.log(boxElement);
    loteryContainer.insertAdjacentHTML("beforeend", boxElement);
});
