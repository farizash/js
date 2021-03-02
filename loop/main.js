//1 zadacha
let result = 1
for (let i = 10; i <= 20; i++) {
   result = i * i
   document.write(`<p>Math.pow (${i}) = ${result}</p>`)
}
document.write(`<hr>`)

//2 zadacha
let i = 0
let summa = 0
for (let i = 54; i <= 234; i++) {
    document.write(`<p>${i} + ${summa} = ${summa + i}</p>`)
    summa = summa + i
    i += 1
}
document.write(`<p>Sum: ${summa}</p> <hr>`)


//3 zadacha
let even = 0
let odd = 0

for (let a = 24; a <= 97; a++) {
    if (a % 2 == 0) {
    even++
    } else {
    odd++
    }
}

document.write(`<p>количество четных чисел: ${even}</p>`)
document.write(`<p>количество нечетных чисел: ${odd}</p>`)



//4 zadacha
var number = prompt('Enter number')
let a = 0
let b = 1
let c = 0
for (let i = 1; i <= number; i++) {
   c = a + b
   a = b
   b = c
}
document.write(`<hr><p>Фибоначчи: ${number} = ${c}</p>`)
