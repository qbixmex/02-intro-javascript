import './index.css';

/* ================================== */
/* ======== Template Strings ======== */
/* ================================== */

const firstName = "Daniel";
const lastName = "González Briseño";

// Without Template Strings
const fullName1 = firstName + " " + lastName;

console.log( 'Full Name 1:', fullName1 );

console.log( '='.repeat(50) );

// With Template Strings
const fullName2 = `${firstName} ${lastName}`;

console.log( 'Full Name 2:', fullName2 );

console.log( '='.repeat(50) );

function getGreeting(name) {
  return 'Hello ' + name;
}

console.log( `Greeting: ${getGreeting('John')}` );

console.log( '='.repeat(50) );

