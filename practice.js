//1. Simple Variable Declaration
let myAge = 25;
myAge = 50;
console.log(myAge)

const age = 20;
//age = 30;  // Not Working Show Error
console.log(age)

//2. Six Basic Condition
let a = 10;
let b = 15;

console.log(a > b);
console.log(a >= b);
console.log(a < b);
console.log(a <= b);
console.log(a === b);
console.log(a !== b);

//3. && Operator
let num = 25;
let student = true;
let value = 50;

if (num === 25 && student && value === 40) {
    console.log('This Code is Correct');
} else {
    console.log('This Code is Incorrect')
}

//4. || Operator
let num1 = 40;
let student1 = true;
let value1 = 60;

if (num1 === 30 || student1 || value1 === 50) {
    console.log('This code is Correct');
} else {
    console.log('This code is Incorrect')
}