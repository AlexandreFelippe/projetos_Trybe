const data = require('../data/zoo_data');

const getOldestFromFirstSpecies = (id) => {
  const findId = data.employees
    .find((employee) => employee.id === id).responsibleFor[0];
  const selectedAnimal = data.species
    .find((animal) => animal.id === findId)
    .residents.sort((aresidents, bresidents) => bresidents.age - aresidents.age)[0];
  return Object.values(selectedAnimal);
};
getOldestFromFirstSpecies('0e7b460e-acf4-4e17-bcb3-ee472265db83');
module.exports = getOldestFromFirstSpecies;
