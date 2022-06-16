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

const getHero = async (id) => {
  try {
    const hero = await getHeroByIdAsync(id);
    console.log(hero);
  } catch (error) {
    console.error(error);
  }
};

getHero(4);

(async () => {
  try {
    const hero = await getHeroByIdAsync(8);
    console.log(hero);
  } catch (error) {
    console.error(error);
  }
})();
