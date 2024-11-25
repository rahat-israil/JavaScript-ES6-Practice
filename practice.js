//1. Simple Variable Declaration
//  let myAge = 25;
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
let num1 = 50;
let student1 = true;
let value1 = 60;

if (num1 === 30 || student1 || value1 === 50) {
    console.log('This code is Correct');
} else {
    console.log('This code is Incorrect')
}

//5. Array Declare
const number = [10, 20, 30, 40, 50];
console.log(number[1])
number[1] = 100;
console.log(number)
// Length
console.log(number.length);
// Push
number.push(60);
console.log(number);
number.push(70);
console.log(number);
//Pop
number.pop();
console.log(number);

// for Loop
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

const fruits = ['apple', 'banana', 'mango'];
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

for(let i=1; i<=5; i++){
    console.log('*'.repeat(i));
}

// Function
function Multiple(num1, num2){
    Multi = num1*num2;
    return Multi;
}
const Output = Multiple(4,5);
console.log(Output);

function Name(name){
    console.log('Hello ' + name);
}
Name('Rahat');
