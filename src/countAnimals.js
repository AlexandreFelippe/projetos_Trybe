const { species } = require('../data/zoo_data');

const countAnimals = (animal) => {
  if (!animal) {
    const obj = {};
    species.forEach((specie) => {
      obj[specie.name] = specie.residents.length;
    });
    return obj;
  }
  if (animal.sex === 'female' || animal.sex === 'male') {
    const countAnimalSex = species.filter((specie) => specie.name === animal.species);
    return countAnimalSex[0].residents.filter((specie) => specie.sex === animal.sex).length;
  }
  const selectedSpecies = species.filter((specie) => specie.name === animal.species);
  return selectedSpecies[0].residents.length;
};

module.exports = countAnimals;
