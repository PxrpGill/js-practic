const buttonDigit = document.querySelectorAll(".button-spot__button");
const operationButton = document.querySelectorAll(".operation-button-spot__button");
const result = document.querySelector(".calc-window__calc-result");

let massiveItems = [];
let massiveOperations = [];
let element = ''

function isNumeric(str) {
    return !isNaN(str) && !isNaN(parseFloat(str));
}


buttonDigit.forEach(button => {
    button.addEventListener('click', function () {
        if (button.textContent === 'AC') {
            result.textContent = '0';
            massiveItems = [];
            element = '';
            massiveOperations = [];
        } else {
            element += button.textContent;
            result.textContent = element;
        }
    })
})

operationButton.forEach(button => {
    button.addEventListener('click', function () {
        if (button.textContent !== '=') {
            massiveItems.push(element);
            massiveOperations.push(button.textContent);
            element = '';
        } else {
            massiveItems.push(element);
            console.log(massiveItems);
            console.log(massiveOperations);

            let res = Number(massiveItems[0]);
            for (let i = 1; i < massiveItems.length; i++) {
                switch (massiveOperations[i - 1]) {
                    case "+":
                        res += Number(massiveItems[i]);
                        break;
                    case "-":
                        res -= Number(massiveItems[i]);
                        break;
                    case "*":
                        res = res * Number(massiveItems[i]);
                        break;
                    case "/":
                        res /= Number(massiveItems[i]);
                        break;
                }
            }
            result.textContent = String(res);
            element = '';
            massiveItems = [];
            massiveOperations = [];
        }
    })
})
