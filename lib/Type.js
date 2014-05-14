var Base = require('entitydb-base');

var TypeError = require('./TypeError');
var schema = require('./schema');

var Type = Base.extend({}, {
  validate: function (data, schema) {
    var tv4 = require('tv4');
    return tv4.validateMultiple(data, schema, true);
  },
  extended: function (Child) {
    Base.extended(Child);

    var validation = this.validate(Child.prototype, schema);

    if (!validation.valid) {
      var err = new TypeError("Type failed validation");
      err.errors = validation.errors;
      err.missing = validation.missing;
      throw err;
    }
  },
  TypeError: TypeError,
});

module.exports = Type;