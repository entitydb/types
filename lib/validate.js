var _ = require('lodash');

var Errors = require('./errors');

function newError(error) {
  var msg = "constraint "+error.constraint+" failed"
    + (error.property ? (" on "+error.property+" property.") : ".")
    + " expected: "+error.expected+", actual: "+error.actual;
  
  var Err = error.property ? Errors.PropertyError : Errors.ConstraintError;
  var err = new Err(msg);

  error.property && (err.attributes.property = error.property);
  err.attributes.constraint = error.constraint;
  err.attributes.expected = error.expected;
  err.attributes.actual = error.actual;

  return err;
};

module.exports = function (schema, data) {

  var type = schema.type;
  var Type = this.types[type];

  console.log(this.types, type);

  var constraints = Type.prototype.constraints;

  errors = _.map(schema, function (modifier, constraintName) {
    var constraint = constraints[constraintName];

    var error = constraint(data, modifier);
    error && (error.constraint = constraintName);

    return error && newError(error);
  });

  // remove non-errors and flatten multiple errors
  errors = _.filter(errors)

  return {
    valid: _.isEmpty(errors),
    errors: errors,
  };
};