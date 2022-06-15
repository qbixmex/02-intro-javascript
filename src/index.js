import './index.css';

/* ===================================== */
/* ============= Functions ============= */
/* ===================================== */

// Method 1
function greeting1( name ) {
  return `Hello ${name}`;
}

// Method 2
const greeting2 = function( name ) {
  return `Hello ${name}`;
};

// Method 3
const greeting3 = ( name ) => {
  return `Hello ${name}`;
};

// Method 4
const greeting4 = name => `Hello ${name}`;

// Method 5
const generalGreeting = () => 'Hello World';

// Method 6
const getUser = (id) => ({
  uid: id,
  username: 'elixir',
  email: 'elixir@gmail.com'
});

const user = getUser('ABC123');

console.log(greeting1('Goku'));
console.log(greeting2('Vejita'));
console.log(greeting3('Piccolo'));
console.log(greeting4('Bulma'));
console.log(generalGreeting());
console.table(user);
