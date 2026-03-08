/*******************************************/
// Type Alias -- Challenge

type Employee = { id: number; name: string; department: string };
type Manager = { id: number; name: string; employees: Employee[] };

type Staff = Employee | Manager;

const alice: Employee = {
    id: 1,
    name: 'Alice',
    department: 'Sales',
};

const david: Employee = {
    id: 2,
    name: 'David',
    department: 'HR',
};

const timd: Manager = {
    id: 2,
    name: 'Timd',
    employees: [alice, david],
};

function printStaffDetails(staff: Staff){
    if('employees' in staff){
        console.log(`${staff.name} is a manager of ${staff.employees.length} employees.`);
    }
    else{
        console.log(`${staff.name} works in the ${staff.department} department.`);
    }
};


console.log('alice', alice);
console.log('david', david);
console.log('timd', timd);

printStaffDetails(timd);
printStaffDetails(david);

/*******************************************/
// Intersection Types

type Book = { id: number; name: string; price: number };
type DiscountedBook = Book & { discount: number };
const book1: Book = {
  id: 2,
  name: 'How to Cook a Dragon',
  price: 15,
};

const book2: Book = {
  id: 3,
  name: 'The Secret Life of Unicorns',
  price: 18,
};

const discountedBook: DiscountedBook = {
  id: 4,
  name: 'Gnomes vs. Goblins: The Ultimate Guide',
  price: 25,
  discount: 0.15,
};

console.log('book1_26', book1);
console.log('book2_26', book2);
console.log('discountedBook_26', discountedBook);
