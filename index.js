let firstList = [];
let secondList = [];
let operator = "";
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
let operators = ["+", "-", "*", "/"]

let answer = document.createElement("p");
answer.className = "answer";
answer.innerHTML = "0";
document.body.appendChild(answer);

let promtDiv = document.createElement("div");
let firstNum = document.createElement("span");
let oper = document.createElement("span");
let secondNum = document.createElement("span");

document.body.appendChild(promtDiv);
promtDiv.appendChild(firstNum);
promtDiv.appendChild(oper);
promtDiv.appendChild(secondNum);

// Calculate Functionality
const calculate = (operate) => {
    let firstNumber = parseInt(firstList.join("")); 
    let secondNumber = parseInt(secondList.join(""));

    switch(operate) {
        case "+":
            answer.innerText = `${firstNumber + secondNumber}`
            break;
        case "-":
            answer.innerText = `${firstNumber - secondNumber}`
            break;
        case "*":
            answer.innerText = `${firstNumber * secondNumber}`
            break;
        case "/":
            answer.innerText = `${firstNumber / secondNumber}`
        default:
            answer.innerText = `Invalid Operator`
    }
}

// Numbers buttons and Functionality
numbers.map(number => {
    let btnNumber = document.createElement('button')
    btnNumber.className = 'btn';
    btnNumber.innerHTML = `<span>${number}</span>`

    btnNumber.addEventListener('click', () => {
        if (operator === "") {
            firstList = [...firstList, `${number}`]
            firstNum.innerText = `${parseInt(firstList.join(""))}`
            console.log(firstList)
        } else {
            secondList = [...secondList, `${number}`]
            secondNum.innerText = `${parseInt(secondList.join(""))}`
            console.log(secondList)
        }
    })

    document.body.appendChild(btnNumber);
})

// Operators buttons and functionality
operators.map(op => {
    let operate = document.createElement('button');
    operate.className = 'btn-op';
    operate.innerHTML = `<span>${op}</span>`

    operate.addEventListener('click', () => {
        operator = op
        oper.innerText = operator;
        console.log(operator)
    })

    document.body.appendChild(operate);
})

// Equal Sign Button
let calculateButton = document.createElement('button');
calculateButton.className = 'btn-calc';
calculateButton.innerHTML = '<span>=</span>'
document.body.appendChild(calculateButton);

// Equal Sign Button Functionality
calculateButton.addEventListener('click', () => {
    if (operator != "") {
        calculate(operator);
        firstNum.innerText = "";
        oper.innerText = "";
        secondNum.innerText = "";

        while (firstList.length > 0) {
            firstList.pop();
        }
        while (secondList.length > 0) {
            secondList.pop();
        }
        operator = "";
    } else {
        alert("Enter operator or second number")
    }
})

// Clear Button
let clearAnswer = document.createElement("button");
clearAnswer.innerText = "CE";
document.body.appendChild(clearAnswer);

// Clear Button Functionality
clearAnswer.addEventListener("click", () => {
    answer.innerText = "0";
    firstNum.innerText = "";
    oper.innerText = "";
    secondNum.innerText = "";

    while (firstList.length > 0) {
        firstList.pop();
    }
    while (secondList.length > 0) {
        secondList.pop();
    }
    operator = "";
})