var Base = require('entitydb-base');

module.exports = Base.Error.extend('PropertyError', {
  property: null,
  constraint: null,
  expected: null,
});