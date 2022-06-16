import heroesArray from './data/heroes';
import './index.css';

/* ========================================== */
/* ============= IMPORT, EXPORT ============= */
/* ========================================== */

console.log( '='.repeat(15), 'Heroes', '='.repeat(15) );

console.table(heroesArray);

console.log( '='.repeat(14), 'GET HERO', '='.repeat(14) );

/**
 * Get a hero object by id
 * @param {number} id Hero Identifier
 * @returns {{ id: number, name: string, studio: string }} A hero object
 */
const getHeroById = (id) => {
  // Returns the value of the first element in the array
  // where predicate is true, or undefined instead.
  return heroesArray.find((hero) => hero.id === id);
};

console.table(getHeroById(2));

console.log( '='.repeat(10), 'GET HEROES BY STUDIO', '='.repeat(10) );

/**
 * Get a hero object by studio
 * @param {string} studio Hero Studio, example: 'DC' or 'Marvel'
 * @returns {{ id: number, name: string, studio: string }} A hero object
 */
const getHeroesByStudio = (studio) => {
  return heroesArray.filter((hero) => hero.studio === studio);
};

console.table(getHeroesByStudio('DC'));
console.table(getHeroesByStudio('Marvel'));
