//Exceercise1
//Answer1
let firstName = "Kaosarah";
let lastName = "kazeem";
let country = "Nigeria";
let city = "Ibadan";
let age = 24;
let isMarried = false;
let year = 2020;
console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof city);
console.log(typeof age);
console.log(typeof isMarried);
console.log(typeof year);

//Answer2
console.log(10 === "10");

//Answer3
console.log('9.8'=== 10);

//Answer4
//truthy value
console.log(4 > 3) ;
console.log('4' === '4');
console.log(50 < 100);

//falsy value
console.log(5 >= 7);
console.log(5 === '5');
console.log(2 < 1);

//Answer5
console.log(4 >3);
console.log(4 >= 3);
console.log(4 < 3);
console.log(4 <= 3);
console.log(4 == 4);
console.log(4 === 4);
console.log(4 != 4);
console.log(4 !== 4);
console.log(4 != '4');
console.log(4 == '4');
console.log(4 === '4');
console.log('python.length' !== 'jargon');

//Answer6
console.log(4 > 3 && 10 < 12);
console.log(4 > 3 && 10 > 12);
console.log(4 > 3 || 10 < 12);
console.log(4 > 3 || 10 > 12);
console.log(!(4 > 3));
console.log(!(4 < 3));
console.log(!(false));
console.log(!(4 > 3 && 10 < 12));
console.log(!(4 > 3 && 10 > 12));
console.log(!(4 === '4'));
console.log('dragon'.includes('on')  && 'python'.includes('on'));

//Answer7
const todayDate = new Date();
console.log(todayDate.getFullYear());
console.log(todayDate.getMonth()+1);
console.log(todayDate.getDate());
console.log(todayDate.getDay());
console.log(todayDate.getHours());
console.log(todayDate.getMinutes());
console.log(Date.now());

//Exercise2

//Answer1
let base = prompt("Enter base");
let height = prompt("Enter height");
let area = 0.5;
let triagleArea = area * base * height;
console.log(`The area of the triangle is ${triagleArea}`);

//Answer2
let sideA = prompt("Enter the value of side a");
let sideB = prompt("Enter the value of side b");
let sideC = prompt("Enter the value of side c")
let trianglePerimeter = Number(sideA) + Number(sideB) + Number(sideC);
console.log(`the perimeter of triangle ${trianglePerimeter}`);

//Answer3
let length = prompt("Enter the length of the triangle");
let width = prompt("Enter the width of the rectangle");
let perimeter = 2 * (length + width);
console.log(`the area of the rectangle is ${perimeter}`);

//Answer4 
let radius = prompt("Enter the radius of the circle");
const pi = 3.14;
let areaCircle = pi * radius * radius;
let circumference = 2 * pi * radius;
console.log(`the area of the circle ${areaCircle}`);
console.log(`the circumference of the circle ${circumference}`)

//Answer5
// Given equation: y = 2x - 2
const slope = 2;
const yIntercept = -2;
const xIntercept = -yIntercept / slope;

console.log(`Slope (m): ${slope}`);
console.log(`Y-Intercept (b): ${yIntercept}`);
console.log(`X-Intercept: ${xIntercept}`);

//Answer9
const hoursWorked = parseFloat(prompt("Enter hours worked:"));
const ratePerHour = parseFloat(prompt("Enter rate per hour:"));
const weeklyEarning = hoursWorked * ratePerHour;
console.log(`Your weekly earning is ${weeklyEarning}`);

//Answer11

let myName = 'Asabeneh';
let surName = 'Yetayeh';


if (myName.length > surName.length) {
  console.log('The first name is longer than the last name.');
} else if (myName.length < surName.length) {
  console.log('The last name is longer than the first name.');
} else {
  console.log('The first name and last name have the same length.');
}

//Answer12
let myAge = 250;
let yourAge = 25;

let ageDifference = myAge - yourAge;
console.log(`I am ${ageDifference} years older than you.`);

//Answer14
const yearsLived = parseFloat(prompt("Enter the number of years you live:"));
const secondsLived = yearsLived * 365 * 24 * 60 * 60;
console.log(`You lived ${secondsLived} seconds.`);

//Answer15

