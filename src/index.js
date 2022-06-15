import './index.css';

/* ========================================= */
/* ============= Destructuring ============= */
/* ========================================= */

const superhero = {
  name: 'Bruce Wayne',
  age: 45,
  hero: 'Batman'
};

const { name, age, hero } = superhero;

console.log( 'Name:', name );
console.log( 'Age:', age );
console.log( 'Hero:', hero );

console.log( '='.repeat(40) );

const student = {
  name: 'Alex Stewart',
  age: 22,
  course: 'Javascript',
};

const getStudent = ({ name, age, course, active = false }) => {
  return { name, age, course, active };
};

const studentRetrieved = getStudent(student);

console.table( studentRetrieved );

console.log( '='.repeat(40) );

const context = ({
  name,
  description,
  price,
  active = false,
  sizes: {
    width,
    height,
    weight
  }
}) => {
  return {
    'product-name': name,
    'product-description': description,
    'product-price': price,
    'product-status': active,
    'product-sizes': {
      'product-width': width,
      'product-height': height,
      'product-weight': weight,
    },
  };
};

const keys = [
  'product-name',
  'product-description',
  'product-price',
  'product-status',
];

const {
  [keys[0]]: productName,
  [keys[1]]: productDescription,
  [keys[2]]: productPrice,
  [keys[3]]: productStatus,
  'product-sizes': productSizes
} = context({
  name: 'Play Station 5',
  description: 'Lorem ipsum dolor dolem',
  price: 1135.25,
  sizes: {
    width: 4,
    height: 8,
    weight: 22
  }
});

const {
  'product-width': productWidth,
  'product-height': productHeight,
  'product-weight': productWeight,
} = productSizes;

console.log('Product Name:', productName);
console.log('Product Description:', productDescription);
console.log('Product Price: $', productPrice.toLocaleString());
console.log('Product Status:', productStatus);
console.log('-'.repeat(10), 'Product Sizes', '-'.repeat(10));
console.log('Product Width:', productWidth);
console.log('Product Height:', productHeight);
console.log('Product Weight:', productWeight);
