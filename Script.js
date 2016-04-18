var calc = "";
var arrMath = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '+', '-', ':', 'x', '(', ')'];

// PRIVATE
function getValue() {
    calc = document.getElementById("expression")
}
function isMathExpression(str) {
    var index;
    var quest;
    for (index = 0; index < str.value.length; index++) {
        console.log(str.value[index]);
        quest = str.value[index];

        if (arrMath.indexOf(quest) >= 0) {
            result = true;

        } else {
            result = false;
            break
        }
    }
    return result
}

function resOutput() {
        if (result === true) {
            document.getElementById("outcomeTrue").innerHTML = "Это математическое выражение"
        }
        else {
            document.getElementById("outcomeFalse").innerText = "Это не математическое выражение"
        }
}

function backColor() {
    if (result === true) {
        document.getElementById("outcomeTrue").backgroundColor = "green";
    }
    else {
        document.getElementById("outcomeFalse").backgroundColor = "red";
    }
}
//Проверка

// function calculat(str) {
//     var index, mult, sum, res, deg, brackets;
//
//     for (index = 0; index < str.length; index++) {
//         var elem = str[index];
//
//
//         console.log(str[index]);
//
//         if (elem === 'x') {
//             mult = str[index - 1] * str[index + 1];
//
//         } else if (elem === '+') {
//             sum = str[index - 1] + str[index + 1];
//
//         } else if (elem === '-') {
//             res = str[index - 1] - str[index + 1];
//
//         } else if (elem === ':') {
//             deg = str[index - 1] / str[index + 1];
//
//         } else if (elem === '(') {
//             brackets = parenthesis();
//
//         } else {
//             console.log('Next')
//         }
//
//     }
//
//     result = mult + sum + res + deg + brackets;
//
//     outcome.innerHTML = result;
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
//                 console.log('Error')
//             }
//
//         }
//     }
// }
