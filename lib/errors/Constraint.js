var TypeError = require('./Type');

module.exports = TypeError.extend('ConstraintError', {
  constraint: null,
  expected: null,
  actual: null,
});