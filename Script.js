'use strict';

const ID_EXPRESSION = 'expression';
const ID_MESSAGE = 'message';
const TYPE_ERROR = 20;
const TYPE_SUCCESS = 10;
const AVAILABLESYMBOLS = '0123456789';
const SINGS = '-+:x';
//let str = '-35+3879-sd';

let arrMath = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '+', '-', ':', 'x', '(', ')'];

// PRIVATE
function getInputExpression() {
    // УДАЛИТЬ ИЗ СТРОКИ value пробелы String.trim()
    return document.getElementById(ID_EXPRESSION).value.replace(/ /g, "");
}

function isMathExpression(str) {
    let index;
    let quest;
    let result;

    for (index = 0; index < str.length; index++) {
        console.log(str[index]);
        quest = str[index];

        if (arrMath.indexOf(quest) >= 0) {
            result = true;

        } else {
            result = false;
            break
        }
    }

    return result;
}

function getMessageNode() {
    return document.getElementById(ID_MESSAGE);
}

function showMessage(text, type) {
    let message = getMessageNode();
    type = type || TYPE_SUCCESS;
    message.innerHTML = text;

    if (type === TYPE_SUCCESS) {
        message.style.backgroundColor = 'green';
        message.style.color = 'white';

    } else if (type === TYPE_ERROR) {
        message.style.backgroundColor = 'red';
        message.style.color = 'yellow';

    } else {
        throw new Error('Unknow message type')
    }

}

function onCheckExpression() {
    let expresstion = getInputExpression();
    let isValidExpression = isMathExpression(expresstion);

    if (isValidExpression) {
        showMessage('It\'s math expression', TYPE_SUCCESS);

    } else {
        showMessage('It is not math expression', TYPE_ERROR);
    }
}

document.getElementById('buttonCheckExpression').addEventListener('click', onCheckExpression);
//Проверка

function showResult(text) {
    calculationResult.innerHTML = text;
}

function onCalculate() {
    let str = getInputExpression();
    let expressionSings = checkedSing(str);
    let parsedExpression = myParceInt(str);
//функция объеденяет числа с нужными действиями
    function makingExpression() {
        let finishExpression = [];
        for (index; index < parsedExpression.length; index++) {
            finishExpression.push(parsedExpression[index]);
        }
        for (index; index < expressionSings.length; index++) {
            finishExpression.push(expressionSings[index]);
        }
        return finishExpression;
    }

    let finalExpression = makingExpression();
    let calculationResult = calculate(finalExpression);
    showResult(calculationResult);
    //Это все буду исправлять когда будем дальше продвигаться, пока оно просто выводит то что ты сказал.
}

document.getElementById('buttonCalculate').addEventListener('click', onCalculate);

//вырезаем арифм знаки
function checkedSing(str) {
    let expressionSings = [];
    for (index; index < str.length; index++) {
        let elem = str[index];
        if (SINGS.indexOf(elem) === -1) {
            break;
        }
        expressionSings.push(elem)
    }
    return expressionSings;
}

//парсим строку
function myParceInt(str) {
    let sing = getSign(str);
    let digits = getDigits(str);
    let number = number + getNumber(digits);

    function getSign(str) {
        return str[0] === '-' ? -1 : 1;
    }

    function getDigits(str) {


        let numbers = [];
        let digitValues = {
            1: 1,
            2: 2,
            3: 3,
            4: 4,
            5: 5,
            6: 6,
            7: 7,
            8: 8,
            9: 9,
            0: 0
        };


        let index = 0;
        if (str[0] === '-' || str[0] === '+') {
            index = 1;
        }
        if (str[0] === ':' || str[0] === 'x') {
            str.replace(str[0], "");
        }
        for (index; index < str.length; index++) {
            let elem = str[index];
            if (AVAILABLESYMBOLS.indexOf(elem) === -1) {
                break;
            }
            numbers.push(digitValues[elem])
        }

        return numbers;
        str.replace(numbers, "");


    }

    function getNumber(digits) {

        if (digits.length === 0) {
            return NaN;
        }
        else if (digits.length === 1) {
            return digits[0]
        }
        else {
            let multiplier = 1;
            let sum = 0;

            for (let index = digits.length - 1; index >= 0; index--) {

                sum += digits[index] * multiplier;
                multiplier *= 10;
            }
            return sum * sing;
        }

    }

    return number
}

function calculate() {
    let arr = ["-35", "+", "38", "/", "2"];
    let symbols = ["+", "-"];
    for (let index = 0; index <= arr.length - 1; index++) {
        let elem = arr[index];
        if (elem === "/") {
            let resElem = arr[index - 1] / arr[index + 1];
            arr.splice(arr[index - 1], elem, arr[index + 1], resElem);
        }
        else if (elem === "*") {
            let multElem = arr[index - 1] * arr[index + 1];
            arr.splice(arr[index - 1], elem, arr[index + 1], multElem);
        }
        else (symbols.indexOf(elem) === -1)
        {
            continue;
        }
    }
    for (let index = 0; index <= arr.length - 1; index++) {
        let elem = arr[index];
        if (elem === "-") {
            let resElem = arr[index - 1] - arr[index + 1];
            arr.splice(arr[index - 1], elem, arr[index + 1], resElem);
        }
        else if (elem === "+") {
            let multElem = arr[index - 1] + arr[index + 1];
            arr.splice(arr[index - 1], elem, arr[index + 1], multElem);
        }
        else (symbols.indexOf(elem) === -1)
        {
            continue;
        }
    }
    return arr;
}
//function calculate(str) {
//    let index;
//    let resultArray = [];
//    for (index = 0; index < str.length; index++) {
//        let elem = str[index];
//
//
//        console.log(str[index]);
//
//        if (elem === 'x') {
//            let arrayMult = str.split('x');
//            resultArray.push(arrayMult[0] * arrayMult[1])
//
//        } else if (elem === '+') {
//            let arraySum = str.split('+');
//            resultArray.push(arraySum[0] + arraySum[1])
//
//        } else if (elem === '-') {
//            let arrayDeg = str.split('-');
//            resultArray.push(arrayDeg[0] - arrayDeg[1])
//
//        } else if (elem === ':') {
//            let arrayRes = str.split(':');
//            resultArray.push(arrayRes[0] / arrayRes[1])
//
//        } else if (elem === '(') {
//            resultArray.push = parenthesis();
//
//        } else {
//            console.log("Next")
//        }
//    }
//    return resultArray;
//}
//

//     function parenthesis() {
//         let index, elem, mult, sum, res, deg;
//
//         for (index = 0; index < str.length; index++) {
//             console.log(str[index]);
//             elem = str[index];
//
//             if (elem === 'x') {
//                 mult = str[index - 1] * str[index + 1]
//
//             } else if (elem === '+') {
//                 sum = str[index - 1] + str[index + 1]
//
//             } else if (elem === '-') {
//                 res = str[index - 1] - str[index + 1]
//
//             } else if (elem === ':') {
//                 deg = str[index - 1] / str[index + 1]
//
//             } else if (elem === ')') {
//                 break
//
//             }
//             else {
//                 throw new Error('Unknow letiable')
//             }
//             result = mult + sum + res + deg + brackets;
//             return result
//
//         }
//     }
// }
