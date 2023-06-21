const { species, hours } = require('../data/zoo_data');

function newFunction() {
  const b = {};
  Object.keys(hours).forEach((day) => {
    b[day] = {
      officeHour: `Open from ${hours[day].open}am until ${hours[day].close}pm`,
      exhibition: species.filter((animals) => animals
        .availability.includes(day))
        .map(({ name }) => name),
    };
  });
  b.Monday = {
    officeHour: 'CLOSED',
    exhibition: 'The zoo will be closed!',
  };
  return b;
}
const getSchedule = (scheduleTarget) => {
  const animal = species.find((day) => day.name === scheduleTarget);
  if (animal) {
    return animal.availability;
  }
  if (Object.keys(hours).includes(scheduleTarget)) {
    return {
      [scheduleTarget]: newFunction()[scheduleTarget],
    };
  }
  return newFunction();
};

module.exports = getSchedule;
