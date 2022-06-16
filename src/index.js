import './index.css';

/* ========================================= */
/* ============= Destructuring ============= */
/* ========================================= */

console.log('-'.repeat(15), 'Numbers', '-'.repeat(15));

const numbers = [2022, 1258.25, 65];

const [ year, price, quantity ] = numbers;

console.log('Year:', year);
console.log('Price: $', price.toLocaleString());
console.log('Quantity:', quantity);

console.log('-'.repeat(15), 'Heroes', '-'.repeat(15));

const heroes = ['Spiderman', 'Dr. Strange', 'Iron Man', 'Captain America'];

const [ spiderman, drStrange, ironMan, captainAmerica ] = heroes;
 
console.log('Spiderman:', spiderman);
console.log('Dr. Strange:', drStrange.toLocaleString());
console.log('IronMan:', ironMan);
console.log('CaptainAmerica:', captainAmerica);

console.log('-'.repeat(15), 'Mexican Food', '-'.repeat(15));

const mexicanFood = ['Tacos', 'Tamales', 'Torta Ahogada', 'Pozole', 'Sopes'];

const [ tacos, tamales, ...restFood ] = mexicanFood;
 
console.log('Tacos:', tacos);
console.log('Tamales:', tamales);
console.table(restFood);

console.log('-'.repeat(15), 'Return Array', '-'.repeat(15));

const returnArray = () => {
  return [ 'ABC', 1522.2575 ];
};

const formatCurrency = (
  value,
  locale = 'es-US',
  currency = 'USD',
  minDigits = 2,
  maxDigits = 2
) => {
  return value.toLocaleString(locale, {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: minDigits,
    maximumFractionDigits: maxDigits
  });
};

const [ value1, value2 ] = returnArray();

console.log( 'Value 1:', value1 );
console.log( 'Value 2:',  formatCurrency(value2, 'es-MX', 'MXN'));

console.log('-'.repeat(18), 'STATE', '-'.repeat(18));

const state = (value = '') => {
  return [ value.toUpperCase(), () => 'Lorem Ipsum' ];
};

const [ language, setLanguage ] = state('javascript');

console.log('Language:', language);
console.log('Set Language:', setLanguage());