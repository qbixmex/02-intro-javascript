import './index.css';

/* ================================= */
/* ======== Literal Objects ======== */
/* ================================= */

const person1 = {
  firstName: 'Peter',
  lastName: 'Park',
  age: 18,
  address: {
    city: 'Queens',
    street: 'main',
    number: '1280',
  },
};

console.log(person1);

const person2 = person1;

console.log(person2);

person2.firstName = 'Alex';

console.log( '='.repeat(50) );

console.log(person1);
console.log(person2);

console.log( '='.repeat(50) );

const person3 = { ...person1 }; // ... -> spread operator

person3.firstName = 'James';
person3.lastName = 'Stewart';

console.log(person1);
console.log(person2);
console.log(person3);