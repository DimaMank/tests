var calc = '2+58x4';
var arrMath = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '+', '-', ':', 'x', '(', ')'];

// PRIVATE

function isMathExpression(str) {
    var index;
    var quest;

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
//Проверка

function calculat(str) {
    var index, mult, sum, res, deg, brackets;

    for (index = 0; index < str.length; index++) {
        var elem = str[index];


        console.log(str[index]);

        if (elem === 'x') {
            mult = str[index - 1] * str[index + 1];

        } else if (elem === '+') {
            sum = str[index - 1] + str[index + 1];

        } else if (elem === '-') {
            res = str[index - 1] - str[index + 1];

        } else if (elem === ':') {
            deg = str[index - 1] / str[index + 1];

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

        for (index = 0; index < str.length; index++) {
            console.log(str[index]);
            elem = str[index];

            if (elem === 'x') {
                mult = str[index - 1] * str[index + 1]

            } else if (elem === '+') {
                sum = str[index - 1] + str[index + 1]

            } else if (elem === '-') {
                res = str[index - 1] - str[index + 1]

            } else if (elem === ':') {
                deg = str[index - 1] / str[index + 1]

            } else if (elem === ')') {
                break

            }
            else {
                console.log('Error')
            }

        }
    }
}
