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

//---------------------------------------------------------------------------

//4. || Operator
let num1 = 50;
let student1 = true;
let value1 = 60;

if (num1 === 30 || student1 || value1 === 50) {
    console.log('This code is Correct');
} else {
    console.log('This code is Incorrect')
}

//----------------------------------------------------------------------------

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

//----------------------------------------------------------------------------

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

//----------------------------------------------------------------------------

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
    {name: "Alice", age: 25},
    {name: "Bob", age: 30},
    {name: "Charlie", age: 35}
]
const findName = users.map(user => user.name);
console.log(findName);

const findAge = users.map(user => user.age);
console.log(findAge);

//-----------------------------------------------------------------------------

//14. forEach
const numbs = [1, 2, 3, 4, 5];
numbs.forEach(num => {
    console.log(num);
});

const someFruits = ['Apple', 'Banana', 'Mango'];
someFruits.forEach((fruit, index) => {
    console.log(`The ${fruit} is at index no ${index}`);
});

// Calculate the sum of all numbers
const numbers1 = [20, 30, 40, 10];
let sum = 0;

numbers1.forEach(num => {
    sum = sum + num;
});
console.log(sum);

//----------------------------------------------------------------------------

//15. Filter
const numbers2 = [1, 2, 3, 4, 5];
const evenNumber = numbers2.filter(num => num % 2 === 0);
console.log(evenNumber);

const oddNumber = numbers2.filter(num => num % 2 !== 0);
console.log(oddNumber);

const names = ["Ali", "Hasan", "John", "Sarah", "Kate"]

const nameLength = names.filter(name => name.length > 4);
console.log(nameLength);

const findNameWithS = names.filter(name => name.toUpperCase().startsWith('S'));
console.log(findNameWithS);

const nameWithH = names.filter(name => name.toUpperCase().endsWith('H'));
console.log(nameWithH);

const nameswithA = names.filter(name => name.toUpperCase().includes('A'));
console.log(nameswithA);

//----------------------------------------------------------------------------

//16. Find
const numbers3 = [2, 4, 6, 7, 8, 9, 10, 11];
const findFirstOddNumber = numbers3.find(num => num % 2 !== 0);
console.log(findFirstOddNumber);

const names1 = ["Ali", "Hasan", "Rahim", "Rita", "Sarah", "Rafiq"];

const findName1 = names1.find(name => name.length > 4);
console.log(findName1);

const findNameWithR = names1.find(name => name.toUpperCase().startsWith('R'));
console.log(findNameWithR);

const nameWithR = names1.find(name => name.toUpperCase().includes('R'));
console.log(nameWithR);

//----------------------------------------------------------------------------

//17. Array Destructuring
const array = [1, 2, 3, 4, 5];
const [one, two, three, four, five] = array;
console.log(one);
console.log(four);
console.log(two);
console.log(five);
console.log(three);

const array1 = [1];
const [first, second = 2, third = 3, fourth = 4] = array1;

console.log(first);
console.log(third);
console.log(fourth);
console.log(second);

const students = {
    name: 'Rahat',
    age: 23,
    movies: ['Salar', 'KGF', 'Money Height']
}
const [firstMovie, secondMovie] = students?.movies;
console.log(firstMovie,secondMovie);

//----------------------------------------------------------------------------

//18. Object Destructuring
const person1 = {
    name: "Ali",
    ageOf: 25,
    profession: "Developer"
};
const {name, ageOf,profession} = person1;
console.log(`My profession is ${profession}, My name is ${name} & my age is ${ageOf} years.`);

const unKnown = {
    nameOf: 'unKnown',
}
const {nameOf,ageIs =30, Profession= 'Coder' } = unKnown;
console.log(`My name is ${nameOf}, I am a ${Profession} & My age is ${ageIs} Years.`)

// Nested Object Destructuring
const person3 = {
    name3: "Sarah",
    contact: {
        email: "sarah@example.com",
        phone: "123-456-7890"
    }
};
const {name3, contact:{email,phone}} = person3;
console.log(`My name is ${name3}, My email is ${email} & My phone number is ${phone}.`);


const employee = {
    ide: 'VS Code',
    designation: 'developer',
    machine: 'mac',
    languages: ['html', 'css', 'js'],
    specification: {
        height: 66,
        weight: 67,
        address: 'kumarkhali',
        drink: 'water',
        watch: {
            color: 'black',
            price: 500,
            brand: 'garmin'
        }
    }
}

const {ide, designation,machine} = employee;
console.log(`Using the ${ide}, My Designation is ${designation} & The Device is ${machine}.`);

const {height, address, weight} = employee?.specification;
console.log(`My address is ${address}, My Height is ${height} & My Weight is ${weight}.`);

const {brand} = employee?.specification?.watch;
console.log(`My watch brand is ${brand}.`);
