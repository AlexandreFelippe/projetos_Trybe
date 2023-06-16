const data = require('../data/zoo_data');

const { prices } = data;

const countEntrants = (entrants) => {
  const child = entrants.filter(({ age }) => age < 18).length;
  const adult = entrants.filter(({ age }) => age >= 18 && age < 50).length;
  const senior = entrants.filter(({ age }) => age >= 50).length;
  return { child, adult, senior };
};

const calculateEntry = (entrants) => {
  if (!entrants || entrants.length === 0) {
    return 0;
  }
  const { child, adult, senior } = countEntrants(entrants);
  const { adult: adultPrice, senior: seniorPrice, child: childPrice } = prices;
  const sum = (adult * adultPrice + senior * seniorPrice + child * childPrice);
  return sum;
};

module.exports = { calculateEntry, countEntrants };
