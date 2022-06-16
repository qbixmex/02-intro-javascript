import { heroes } from '../data';

const getHeroById = (id) => {
  return heroes.find(hero => hero.id === id);
};

const getHeroesByStudio = (studio) => {
  return heroes.filter(hero => hero.studio === studio);
};

export { getHeroById, getHeroesByStudio };