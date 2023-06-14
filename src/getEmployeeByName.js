const data = require('../data/zoo_data');

const getEmployeeByName = (employeeName) =>
  data.employees.find((employees) => employees
    .firstName === employeeName || employees.lastName === employeeName) || {};

getEmployeeByName();
module.exports = getEmployeeByName;
