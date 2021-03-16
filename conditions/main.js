//homework
// 1 zadacha
let finger = prompt('Введите число')
let nums = Math.floor(Math.random() * 100) 

if (finger == 1) {
   document.write('<hr><p>Большой палец</p>')
} else if (finger == 2) {
document.write('<p>Указательный палец</p>')
} else if (finger == 2) {
    document.write('<p>Указательный палец</p>')
} else if (finger == 3) {
    document.write('<p>Средний палец</p>')
} else if (finger == 4) {
    document.write('<p>Безымянный палец</p>')
} else if (finger == 5) {
    document.write('<p>Мизинец </p>')
} else if (finger = nums) {
    document.write('<p>Нет соответствий</p>')
}



//2 zadacha
var num1 = Math.floor(Math.random() * 100)
var num2 = Math.floor(Math.random() * 100)

document.write(`<hr><h3>Рандомный цифр: ${num1}</h3>`)
document.write(`<h3>Рандомный цифр: ${num2}</h3>`)


if (num1 % num2 == 0) {
    document.write(`<h3>${num1} делиться на ${num2}</h3> <hr>`)
} else {
    document.write(`<h3>${num1} не делиться ${num2}: остаток: ${num1 % num2}</h3>`)
}



//3 zadacha
let int1 = +(prompt('Первое число: '))
let int2 = +(prompt('Второе число '))

document.write(`<hr><h3>Первое число: ${int1}, Второе число: ${int2}</h3>`)

if (int1 > 0 && int2 > 0) { 
    document.write(`<h3>Cумма: ${int1 + int2} </h3>`)
} else if (int1 < 0 && int2 < 0) {
    document.write(`<h3>Условие не выполняется</h3>`)
} else if (int1 > 0 && int2 < 0) {
    document.write(`<h3>Условие не выполняется</h3>`)
} else if (int1 < 0 && int2 > 0) {
    document.write(`<h3>Условие не выполняется</h3>`)
}

//4 zadacha
let number1 = +(prompt('Введите 1 число: '))
let number2 = +(prompt('Введите 2 число: '))
let number3 = +(prompt('Введите 3 число: '))

document.write(`<hr><h3>1 число: ${number1}, 2 число: ${number2}, 3 число: ${number3}</h3>`)

if (number1 / 5 == 0 || number2 / 5 == 0 || number3 / 5 == 0) {
    document.write(`<h3>${number1}, ${number2}, ${number3} деляться на 5</h3>`)
} else {
document.write(`<h3>${number1}, ${number2}, ${number3} не деляться на 5</h3>`)
}
