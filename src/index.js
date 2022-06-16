import './index.css';
import { getHeroById } from './helpers';

/* ==================================== */
/* ============= PROMISES ============= */
/* ==================================== */

const getHeroByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const hero = getHeroById(id);
      hero ? resolve(hero) : reject('Cannot find Hero');
    }, 1500);
  });
}

// Normal
// getHeroByIdAsync(4)
//   .then(hero => {
//     console.log(hero);
//   })
//   .catch(error => {
//     console.error(error);
//   });

// Alternative
getHeroByIdAsync(12)
  .then(console.log)
  .catch(console.error);
