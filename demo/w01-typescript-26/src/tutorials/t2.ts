/*******************************************/
// Type AnnotationsFunctions - Fundamentals

function sayHi(name: string) {
  console.log(`Hello there ${name.toUpperCase()}!!!`);
}
sayHi('john');
// sayHi(3)
// sayHi('peter', 'random');

function calculateDiscount(price: number): number {
  // price.toUpperCase();
  const hasDiscount = true;
  if (!hasDiscount) {
    return price;
    // return 'Discount Applied';
}
return price * 0.9;
}
const finalPrice = calculateDiscount(200);
console.log(finalPrice);

// "any" example
function addThree(number: any) {
  let anotherNumber: number = 3;
  return number + anotherNumber;
}
const result = addThree(2);
const someValue = result;
console.log(someValue);
// run time error
// someValue.myMethod();

/*******************************************/
// Functions - Optional and Default Parameters

function calculatePrice(price: number, discount?: number) {
  return price - (discount || 0);
}

let priceAfterDiscount = calculatePrice(100, 20);
console.log(priceAfterDiscount); // Output: 80

let priceWithoutDiscount = calculatePrice(300);
console.log(priceWithoutDiscount); // Output: 300

function calculateScore(initialScore: number, penaltyPoints: number = 0) {
  return initialScore - penaltyPoints;
}
let scoreAfterPenalty = calculateScore(100, 20);
console.log(scoreAfterPenalty); // Output: 80

let scoreWithoutPenalty = calculateScore(300);
console.log(scoreWithoutPenalty); // Output: 300

/*******************************************/
// Function - rest parameter

function sum(message: string, ...numbers: number[]): string {
  const doubled = numbers.map((num) => num * 2);
  console.log(doubled);

  let total = doubled.reduce((previous, current) => {
  return previous + current;
  }, 0);
  return `${message} ${total}`;
}
let result2 = sum('The total is:', 1, 2, 3, 4, 5); // result will be "The total is: 15"
console.log(result2);

/*******************************************/
// Functions - Using Objects as Function Parameters

function createEmployee({ id }: { id: number }): {
  id: number;
  isActive: boolean;
} {
  return { id, isActive: id % 2 === 0 };
}
const first = createEmployee({ id: 1 });
const second = createEmployee({ id: 2 });
console.log(first, second);
// alternative
function createStudent(student: { id: number; name: string }) {
console.log(`Welcome to the course ${student.name.toUpperCase()}!!!`);
}
const newStudent = {
  id: 5,
  name: 'anna',
};
createStudent(newStudent);
