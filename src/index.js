import './index.css';

/* =================================== */
/* ===== VARIABLES AND CONSTANTS ===== */
/* =================================== */

// A constant is a variable type that
// won't change because it is inmutable.
const year = 2022;

console.log('Year:', year);

// A let is a variable type that
// you can change because it is mutable.
let quantity; // Initial assign by default is undefined

console.log('Quantity:', quantity);

quantity = 25; // You can change value

console.log('Quantity:', quantity);

console.log('='.repeat(50));

// const and let variables are scoped to curly braces.
if (true) {

  const year = 2022;
  console.log('Year:', year);

  let quantity = 12;
  console.log('Quantity:', quantity);

}

console.log('='.repeat(50));

// Note, this variables keeps its value
// because variables inside curly braces
// has different scope.
console.log('Quantity:', quantity);