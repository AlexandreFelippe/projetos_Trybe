const { species } = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => {
  const a = species.filter((specie) => ids.includes(specie.id)) ? residents[name] : [];
  console.log(ids);
};
getSpeciesByIds();
module.exports = getSpeciesByIds;
