const { species } = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => {
  const findAnimal = species.find(({ name }) => name === animal).residents;
  return findAnimal.every((residents) => residents.age >= age);
};

module.exports = getAnimalsOlderThan;
