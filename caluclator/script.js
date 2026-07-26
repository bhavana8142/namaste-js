let seven = document.querySelector('#seven');
let eight = document.querySelector('#eight');
let nine = document.querySelector('#nine');
let divison = document.querySelector('#divison');
let four = document.querySelector('#four');
let five = document.querySelector('#five');
let six = document.querySelector('#six');
let multiply = document.querySelector('#multiply');
let one = document.querySelector('#one');
let two = document.querySelector('#two');
let three = document.querySelector('#three');
let minus = document.querySelector('#minus');
let dot = document.querySelector('#dot');
let zero = document.querySelector('#zero');
let plus = document.querySelector('#plus');
let clear = document.querySelector('#clear');
let equal = document.querySelector('#equal');

let display = document.getElementById('display');

seven.addEventListener('click', () => {
    diplayvalue(seven.value);



})
eight.addEventListener('click', () => {
    diplayvalue(eight.value);



})
nine.addEventListener('click', () => {
    diplayvalue(nine.value);



})
four.addEventListener('click', () => {
    diplayvalue(four.value);



})
five.addEventListener('click', () => {
    diplayvalue(five.value);



})
six.addEventListener('click', () => {
    diplayvalue(six.value);



})

one.addEventListener('click', () => {
    diplayvalue(one.value);




})
two.addEventListener('click', () => {
    diplayvalue(two.value);



})
three.addEventListener('click', () => {
    diplayvalue(three.value);



})
dot.addEventListener('click', () => {
    diplayvalue(dot.value);



})
zero.addEventListener('click', () => {
    diplayvalue(zero.value);



})


plus.addEventListener('click', () => {
    diplayvalue(plus.value);
});
minus.addEventListener('click', () => {
    diplayvalue(minus.value);
});
multiply.addEventListener('click', () => {
    diplayvalue(multiply.value);
});
divison.addEventListener('click', () => {
    diplayvalue(divison.value);
});
clear.addEventListener('click', () => {
    display.value = ''

})


function diplayvalue(value) {
    display.value += value


}
equal.addEventListener('click', () => {
    let expression = display.value;

    let number = expression.split(/[+*/-]/).map(Number);

    let operators = expression.match(/[+*/-]/g) || [];

    for (let i = 0; i < operators.length; i++) {
        if (operators[i] === '*' || operators[i] === '/') {
            let result;
            if (operators[i] === "*") {
                result = number[i] * number[i + 1]
            }
            else {
                result = number[i] / number[i + 1]
            }
            number.splice(i, 2, result);
            operators.splice(i, 1);
            i--;

        }
    }
    let result = number[0];
    for (let i = 0; i < operators.length; i++) {
        if (operators[i] === "+") {
            result += number[i + 1]
        }
        else if (operators[i] === "-") {
            result -= number[i + 1]
        }
    }
    display.value = result;
});






