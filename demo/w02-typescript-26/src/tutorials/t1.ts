console.log('t1.ts is running');

/*******************************************/
// Type Annotations

let awesomeName: string = 'shakeAndBake';
awesomeName = 'something';
awesomeName = awesomeName.toUpperCase();
// awesomeName = 20;

let amount: number = 12;
amount = 12 - 1;
// amount = 'pants';

let isAwesome: boolean = true;
isAwesome = false;
// isAwesome = 'shakeAndBake';

console.log(awesomeName, amount, isAwesome);

/*******************************************/
// Union Type

let tax: number | string = 10;
tax = 100;
tax = '$10';

// fancy name - literal value type
let requestStatus: 'pending' | 'success' | 'error' = 'pending';
requestStatus = 'success';
requestStatus = 'error';
// requestStatus = 'random';

console.log(tax, requestStatus);

/*******************************************/
// Practical Application of Type Annotation

const books = ['1984', 'Brave New World', 'Fahrenheit 451'];
let foundBook: string | undefined;
for (let book of books) {
  if (book === 'Brave New World') {
    foundBook = book;
    foundBook = foundBook.toUpperCase();
    break;
  }
}
console.log(foundBook?.length);

/*******************************************/
// Arrays - Fundamentals

let prices: number[] = [100, 75, 42];
let fruit: string[] = ['apple', 'orange'];
//let people: string[] = ['bobo', 'peter', 100];
let array: (string | boolean)[] = ['apple', true, 'orange', false];

console.log(array);

/*******************************************/
// Objects - Fundamentals

let car: { brand: string; year: number } = { brand: 'toyota', year: 2020 };
car.brand = 'ford';
// car.color = 'blue';

let car1: { brand: string; year: number } = { brand: 'audi', year: 2021 };
let car2: { brand: string; year?: number } = { brand: 'audi' };

console.log(car1, car2);

let book = { title: 'book', cost: 20 };
let pen = { title: 'pen', cost: 5 };
let notebook = { title: 'notebook' };
let items: { readonly title: string; cost?: number }[] = [book, pen, notebook];


items[0].title = 'new book'; // Error: Cannot assign to 'title' because it is a read-only proper

console.log(items);