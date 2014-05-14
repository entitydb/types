var Base = require('entitydb-base');

module.exports = Base.Error.extend('TypeError', {
  errors: [],
  missing: [],
});