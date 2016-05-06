'use strict';

const ID_EXPRESSION = 'expression';
const ID_MESSAGE = 'message';
const TYPE_ERROR = 20;
const TYPE_SUCCESS = 10;

var arrMath = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '+', '-', ':', 'x', '(', ')'];

// PRIVATE
function getInputExpression() {
    // УДАЛИТЬ ИЗ СТРОКИ value пробелы String.trim()
    return document.getElementById(ID_EXPRESSION).value.replace(/ /g, "");
}

function isMathExpression(str) {
    var index;
    var quest;
    var result;

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
    var message = getMessageNode();
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
    var expresstion = getInputExpression();
    var isValidExpression = isMathExpression(expresstion);

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
    var expresstion = getInputExpression();
    var calculationResult = calculate(expresstion);
    showResult(calculationResult);
    //Это все буду исправлять когда будем дальше продвигаться, пока оно просто выводит то что ты сказал.
}

document.getElementById('buttonCalculate').addEventListener('click', onCalculate);
function calculate(str) {
    var index;
    var resultArray = [];
    for (index = 0; index < str.length; index++) {
        var elem = str[index];


        console.log(str[index]);

        if (elem === 'x') {
            var arrayMult = str.split('x');
            resultArray.push(arrayMult[0] * arrayMult[1])

        } else if (elem === '+') {
            var arraySum = str.split('+');
            resultArray.push(arraySum[0] + arraySum[1])

        } else if (elem === '-') {
            var arrayDeg = str.split('x');
            resultArray.push(arrayDeg[0] * arrayDeg[1])

        } else if (elem === ':') {
            var arrayRes = str.split('x');
            resultArray.push(arrayRes[0] * arrayRes[1])

        } else if (elem === '(') {
            resultArray.push = parenthesis();

        } else {
            console.log("Next")
        }
    }
    return resultArray;
}
//

//     function parenthesis() {
//         var index, elem, mult, sum, res, deg;
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
//                 throw new Error('Unknow variable')
//             }
//             result = mult + sum + res + deg + brackets;
//             return result
//
//         }
//     }
// }
