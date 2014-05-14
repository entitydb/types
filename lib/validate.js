var TypeError = require('./TypeError');

module.exports = function validate (data, schema) {
  var tv4 = require('tv4');

  var validation = tv4.validateMultiple(data, schema, true);

  if (!validation.valid) {
    var err = new TypeError("Type failed validation");
    err.errors = validation.errors;
    err.missing = validation.missing;
    throw err;
  }
};