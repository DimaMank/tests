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
var arrMath = ['1','2','3','4','5','6','7','8','9','0','+','-',':','x','(',')']
function isMathExpretion(){
    var index;
    for (index = 0; index < calc.length; index++) {
        console.log(calc[index]);
        var quest = calc[index];
        if (quest in arrMath) {console.log("True, это мат выражение!");}
        else {alert('false, это не мат выражение!');
            }

    }
}
isMathExpretion();


    function calculat(){

        for (index = 0; index < calc.length; index++) {
            console.log(calc[index]);
            var elem = calc[index];
            if (elem === "x") {var mult = calc[index-1] * calc[index + 1]}
            else if (elem === "+") {var sum = calc[index-1] + calc[index + 1]}
            else if (elem === "-") {var res = calc[index-1] - calc[index + 1]}
            else if (elem === ":") {var deg = calc[index-1] / calc[index + 1]}
            else if (elem === "(") {parenthesis()}
            else {console.log("Ready")}
            if ((index + 1) > calc.length ) {break}
            else if (index < 0) {break}
            else {console.log("Продолжаем")
            }

        }
        var parent = parenthesis();
        function parenthesis(){
            for (index = 0; index < calc.length; index++) {
                console.log(calc[index]);
                var elem = calc[index];
                if (elem === "x") {var mult = calc[index-1] * calc[index + 1]}
                else if (elem === "+") {var sum = calc[index-1] + calc[index + 1]}
                else if (elem === "-") {var res = calc[index-1] - calc[index + 1]}
                else if (elem === ":") {var deg = calc[index-1] / calc[index + 1]}
                else if (elem === ")") {break}
                else {console.log("Error")}

            }}
        var parent = parenthesis();
    }