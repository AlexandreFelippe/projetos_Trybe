const { species } = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => {
  const findAnimal = species.find(({ name }) => name === animal).residents;
  return findAnimal.every((residents) => residents.age >= age);
};
getAnimalsOlderThan('lions', 12);
module.exports = getAnimalsOlderThan;
