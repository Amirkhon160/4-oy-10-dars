// // declaration 
// function abdusattor() {
//     console.log('hello world');
// }

// abdusattor()


// //expression

// let num = function plus() {
//     console.log(5+5);
// }
// num()


// //arrow function 
// let sum = () => 10 + 40

// console.log(sum());



// let num1 = +prompt("Birinchi son kirgizing")
// let num2 = +prompt("Ikkinchi son kirgizing")

// function abdusattor(num, num2) {
//     if (num > num2) {
//         alert(`${num} soni  ${num2} sonidan katta`)
//     } else if (num === num2) {
//         alert(`${num} ${num2} bilan bir xil`)
//     } else if (num < num2) {
//         alert(`${num2} ${num}dan katta`)
//     }
// }

// let num3 = +prompt("Birinchi son kirgizing");
// let num4 = +prompt("Ikkinchi son kirgizing");

// const abdusattor = function(num, num2) {
//     if (num > num2) {
//         alert(`${num} soni ${num2} sonidan katta`);
//     } else if (num === num2) {
//         alert(`${num} ${num2} bilan bir xil`);
//     } else if (num < num2) {
//         alert(`${num2} ${num}dan katta`);
//     }
// };

// abdusattor(num1, num2);


function getAndShowLargestNumber() {
    let num1 = +prompt("Введите первое число:");
    let num2 = +prompt("Введите второе число:");

    if (isNaN(num1) || isNaN(num2)) {
        alert("Пожалуйста, введите допустимые числа.");
        return;
    }

    let largest = num1 > num2 ? num1 : num2;

    alert(`Наибольшее число: ${largest}`);
}

getAndShowLargestNumber();