'use strict'

//ПЕРВОЕ
//пример 1
/*
В данном примере мы задали переменную a и присвоили ей значение 1, переменная c
не указана, далее значение переменной c вычисляется при помощи инкремента увеличиваем
a на 1, таким образом c = 2 
 */

let a = 1, b = 1, c, d;
c = ++a;
alert(c); // ответ: 2

//пример 2
/*
В данном примере мы имеем переменную b со значением 1, d не задана, переменной d
присваивается значение b, то есть 1, так как используется постфиксная форма инкремента,
мы возвращаем старое значение, а значение b становится 2
*/
d = b++;
alert(d); //ответ: 1

//пример 3
/*
Мы уже знаем, что значение a теперь 2, поэтому при помощи инкремента увеличиваем его
значение на 1, прлучаем 3, и прибавляем к этому 2, таким образом c будет со значением 5
*/
c = 2 + ++a;
alert(c); //ответ: 5

//пример 4
/*
Здесь мы прибавляем к b, у которого значение 2 ещё 2, получается, что d будет со значением 4,
после этого благодаря постфиксной форме инкремента значение b устанавливается на 3, ну а значение переменной
a нам уже было известно ранее, оно равно 3 
*/

d = 2 + b++;
alert(d); //ответ: 4
alert(a); //3
alert(b); //3

//ВТОРОЕ

/*
 *Изначально переменной a задается значение 2, далее высчитываем x, сначала в скобках a * 2, получаем 4 и присваиваем
ей получившееся значение, далее  прибавляем к этому 1, получается что значение x равно 5, значение a равно 4
 */

let a = 2;
let x = 1 + (a *= 2);

// ТРЕТЬЕ

let a = Number(prompt ("введите 1 число"));
let b = Number(prompt ("введите 2 число"));

if (a >= 0 && b >= 0) {
    alert (a - b);
}
else if (a < 0 && b < 0) {
    alert (a * b);
}
else if (a >= 0 && b < 0 || a < 0 && b >= 0) {
    alert (a + b);
}

// ЧЕТВЕРТОЕ И ПЯТОЕ

function sum(a, b) {
    let sum = a + b;
    return alert(sum);
}

function subtraction(a, b) {
    let subt = a - b;
    return alert(subt);
}

function division(a, b) {
    let difference = a / b;
    return alert(difference);
}

function multiplication(a, b) {
    let multi = a * b;
    return alert(multi); 
}

function mathOperation(arg1, arg2, operation) {
    switch(operation) {
        case "+":
            return sum(arg1, arg2);
        case "-":
            return subtraction(arg1, arg2);
        case "/":
            return division(arg1, arg2);
        case "*":
            return multiplication(arg1, arg2);
    }
}

mathOperation(9, 3, "*");

// ШЕСТОЕ

let topup = parseInt(prompt("Введите, сколько денег положить на счет"));
let last = topup.toString().slice(-1);
let prelast = topup.toString().slice(-2);
let lastfirst = prelast.toString().substr(0, 1);
if (last == 0 || last == 5 || last == 6 || last == 7 || last == 8 || last == 9 || lastfirst == 1) {
    alert (`Ваша сумма в ${topup} рублей успешно зачислена.`);
}
else if (last == 1) {
    alert (`Ваша сумма в ${topup} рубль успешно зачислена.`);
} 
else if (last == 2 || last == 3 || last == 4) {
    alert (`Ваша сумма в ${topup} рубля успешно зачислена.`);
} 
