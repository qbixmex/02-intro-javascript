import './index.css';

/* ============================================ */
/* ============= TERNARI OPERATOR ============= */
/* ============================================ */

const active1 = true;

let message1 = '';

if (active1) {
  message1 = 'Active'
} else {
  message1 = 'Inactive'
}

console.log(message1);

/* ============================================ */

const active2 = false;

const message2 = active2 ? 'Active' : 'Inactive';

console.log(message2);

/* ============================================ */

const active3 = false;

const message3 = active3 && 'Active';

console.log(message3);
