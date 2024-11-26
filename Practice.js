//1. Simple Variable Declaration
let myAge = 25;
myAge = 50;
console.log(myAge)

const age = 20;
//age = 30;  // Not Working Show Error
console.log(age)

//----------------------------------------------------------------------------

//2. Six Basic Condition
let a = 10;
let b = 15;

console.log(a > b);
console.log(a >= b);
console.log(a < b);
console.log(a <= b);
console.log(a === b);
console.log(a !== b);

//----------------------------------------------------------------------------

//3. && Operator
let num = 25;
let student = true;
let value = 50;

if (num === 25 && student && value === 40) {
    console.log('This Code is Correct');
} else {
    console.log('This Code is Incorrect')
}

//-----------------------------------------------------------------------------

//4. || Operator
let num1 = 50;
let student1 = true;
let value1 = 60;

if (num1 === 30 || student1 || value1 === 50) {
    console.log('This code is Correct');
} else {
    console.log('This code is Incorrect')
}

//-----------------------------------------------------------------------------

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

//-----------------------------------------------------------------------------

//6. for Loop
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

const fruits = ['apple', 'banana', 'mango'];
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

for (let i = 1; i <= 5; i++) {
    console.log('*'.repeat(i));
}

//-----------------------------------------------------------------------------

//7. Function
function Multiple(num1, num2) {
    const Multi = num1 * num2;
    return Multi;
}

const Output = Multiple(4, 5);
console.log(Output);

function Name(name) {
    console.log('Hello ' + name);
}

Name('Rahat');

//-----------------------------------------------------------------------------

//8. Object
const person = {
    name: ' Rahat Bin Israil',
    age: 23,
    city: 'Dhaka'
}
console.log(person.name)
console.log(person['age']);
const City = person.city;
console.log(City);
const cityName = 'city';
console.log(person[cityName]);

//-----------------------------------------------------------------------------

//9. Template String
const Number = [10, 20, 25, 30, 40, 50, 7];
const Student = {
    name: 'Rahat',
    age: 25,
    salary: 25000,
    movie: ['Salar', 'Shiba', 'KGF', 'No One']
}
const About = `My name is ${Student.name}. I am ${Student.age} old. My current Salary is ${Student.salary} Taka. My Favourite Movie is ${Student.movie[2]}. My Lucky Number is ${Number[6]}`;

console.log(About);

//-----------------------------------------------------------------------------

//10. Ternary Operator
let Age = 25;

const Validation = Age <= 18 ? 'Under Age' : 'Adult';
console.log(Validation);

let SignUp = true;

const Signin = SignUp ? 'Welcome Back' : 'SignUp at First';
console.log(Signin);

const Signin2 = !SignUp ? 'Welcome Back' : 'SignUp at First';
console.log(Signin2);

const multiple = (Age >= 18 && SignUp) ? 'Condition Fulfil' : 'Condition not Fulfil';
console.log(multiple);

//-----------------------------------------------------------------------------

//11. Arrow Function
const getNumber = () => 55;
console.log(getNumber());

const doMath = (num1, num2) => num1 + num2;
console.log(doMath(30, 50));

let numbers = [1, 2, 3, 4, 5, 6, 7];
const double = numbers.map(number => number * 2);
console.log(double);

const Multi = (num1, num2) => {
    multi = num1 * num2;
    return multi;
}
console.log(Multi(10, 5));

//-----------------------------------------------------------------------------

//12. Spread Operator
const numb = [1, 2, 3, 4];
const modifiedNumb = [...numb, 5, 6, 7];
console.log(modifiedNumb);

const addNum = [1, 2, 3, 4];
const addInFirst = [7, 8, 9, ...addNum];
console.log(addInFirst);

const numb1 = [1, 2, 3];
const numb2 = [4, 5, 6];
const modifiedNumb1 = [...numb1, ...numb2];
console.log(modifiedNumb1);

//-----------------------------------------------------------------------------

//13. Array Map
const nums = [2, 3, 4, 5];
const double2 = nums.map(num => num * 2);
console.log(double2);

const arrs = ['Apple', 'Banana', 'Mango'];
const toUpperCase = arrs.map(arr => arr.toUpperCase());
console.log(toUpperCase);

const toLowerCase = arrs.map(arr => arr.toLowerCase());
console.log(toLowerCase);

const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 }
]
const findName = users.map(user => user.name);
console.log(findName);

const findAge = users.map(user => user.age);
console.log(findAge);

//-----------------------------------------------------------------------------

//14. forEach
const numbs = [1,2,3,4,5];
numbs.forEach(num => {
    console.log(num);
});

const someFruits = ['Apple','Banana','Mango'];
someFruits.forEach((fruit, index) => {
    console.log(`The ${fruit} is at index no ${index}`);
});

// Calculate the sum of all numbers
const numbers1 = [20,30,40,10];
let sum = 0;

numbers1.forEach(num => {
    sum = sum + num;
});
console.log(sum);