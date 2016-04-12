var calc = '2x2+2';
var arrMath = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '+', '-', ':', 'x', '(', ')'];

// PRIVATE

function isMathExpression() {
    var index;
    var quest;

    for (index = 0; index < calc.length; index++) {
        console.log(calc[index]);
        quest = calc[index];

        if (arrMath.indexOf(quest) >= 0) {
            result = true;

        } else {
            result = false;
            break
        }
    }

    checked.innerHTML = result;
}
//Проверка

function calculat() {
    var index, mult, sum, res, deg, brackets;

    for (index = 0; index < calc.length; index++) {
        var elem = calc[index];


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
            brackets = parenthesis();

        } else {
            console.log(mult);
        }

    }

    result = mult + sum + res + deg + brackets;

    outcome.innerHTML = result;
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
