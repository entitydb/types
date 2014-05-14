var Base = require('entitydb-base');

var TypeError = require('./TypeError');
var schema = require('./schema');

var Type = Base.extend({
  type: "Type",
  object: {},
}, {
  validate: function (data, schema) {
    var tv4 = require('tv4');

    var validation = tv4.validateMultiple(data, schema, true);

    if (!validation.valid) {
      var err = new TypeError("Type failed validation");
      err.errors = validation.errors;
      err.missing = validation.missing;
      throw err;
    }
  },
  extended: function (Child) {
    Base.extended(Child);

    // Child cannot override Parent type
    if (Child.prototype.type === this.prototype.type) {
      Child.prototype.type = undefined;
    }

    this.validate(Child.prototype, schema);
  },
  TypeError: TypeError,
});

Type.validate(Type.prototype, schema);

module.exports = Type;