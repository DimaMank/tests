/**
 * Created by Dima on 30.03.2016.
 */
///**
// * Created by Dima on 16.03.2016.
//*/
// (function () {
//
//    var perms = ['+','-','/', '*' ],
//        calc = document.getElementById('calc'),
//        calc_res = document.getElementById('calculation'),
//        res = document.getElementById('res');
//
//
//    if (typeof calc.value == 'number'){
//    calc_res.onclick = function () {
//
//        {
//            res.innerHTML = eval(calc.value);
//        }
//    }
//    }
//        else {
//            res.innerHTML = 'ERROR';
//        }
// Решение через Eval


var calc = '8+43x6';
var arrMath = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '+', '-', ':', 'x', '(', ')'];

isMathExpression();

// PRIVATE

function isMathExpression() {
    var index;
    var quest;
    var resultat;

    for (index = 0; index < calc.length; index++) {
        console.log(calc[index]);
        quest = calc[index];

        if (arrMath.indexOf(quest) >= 0) {
            resultat = 'True, это мат выражение!';

        } else {
            resultat = 'False, это не мат выражение!';
            break
        }
    }
    alert(resultat);
}

function calculat() {
    var parent, index;

    for (index = 0; index < calc.length; index++) {
        var elem = calc[index];
        var mult, sum, res, deg;

        console.log(calc[index]);

        if (elem === 'x') {
            mult = calc[index - 1] * calc[index + 1];

        } else if (elem === '+') {
            sum = calc[index - 1] + calc[index + 1];

        } else if (elem === '-') {
            res = calc[index - 1] - calc[index + 1];

        } else if (elem === ':') {
            deg = calc[index - 1] / calc[index + 1];

        } else if (elem === '(') {
            parenthesis();

        } else {
            console.log('Ready');
        }

        if ((index + 1) > calc.length) {
            break

        } else if (index < 0) {
            break

        } else {
            console.log('Продолжаем')
        }

    }

    parent = parenthesis();

    function parenthesis() {
        var index, elem, mult, sum, res, deg;

        for (index = 0; index < calc.length; index++) {
            console.log(calc[index]);
            elem = calc[index];

            if (elem === 'x') {
                mult = calc[index - 1] * calc[index + 1]

            } else if (elem === '+') {
                sum = calc[index - 1] + calc[index + 1]

            } else if (elem === '-') {
                res = calc[index - 1] - calc[index + 1]

            } else if (elem === ':') {
                deg = calc[index - 1] / calc[index + 1]

            } else if (elem === ')') {
                break

            }
            else {
                console.log('Error')
            }

        }
    }
}