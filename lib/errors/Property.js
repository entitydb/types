var ConstraintError = require('./Constraint')

module.exports = ConstraintError.extend('PropertyError', {
  property: null,
});