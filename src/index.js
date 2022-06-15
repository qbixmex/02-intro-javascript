import './index.css';

/* ================================== */
/* ============= Arrays ============= */
/* ================================== */

const colors = new Array(3);

colors[0] = 'Red';
colors[1] = 'Blue';
colors[2] = 'Orange';

// Appends new elements to the end of an array,
// and returns the new length of the array.
colors.push('Green');

// Inserts new elements at the start of an array,
// and returns the new length of the array.
colors.unshift('Yellow');

console.log( colors );

// Removes the last element from an array and returns it
colors.pop();

// Removes the first element from an array and returns it.
// If the array is empty,
// undefined is returned and the array is not modified.
colors.shift();

console.log( colors );

console.log( "=".repeat(50) );

const food = [
  'Pizza',
  'Hamburger',
  'Hot Dog'
];

const food2 = [
  ...food,
  'Sushi',
];

console.log( food );
console.log( food2 );

console.log( "=".repeat(50) );

const numbers = [ 2, 4, 6, 8 ];

// Calls a defined callback function on each element of an array,
// and returns an array that contains the results.
const numbers2 = numbers.map(number => number * 2);

/* Reference, old style
const numbers2 = numbers.map(function(number) {
  return number * 2
});*/

console.log( numbers );
console.log( numbers2 );
