var _ = require('lodash');

var PropertyError = require('./PropertyError');
var TypeError = require('./TypeError');

module.exports = function (schema, data) {

  var type = schema.type;
  var Type = this.types[type];

  var constraints = Type.prototype.constraints;

  errors = _.map(schema, function (modifier, constraintName) {
    var constraint = constraints[constraintName];
    var err;

    if (typeof constraint === 'function') {
      err = constraint(data, modifier);
    }

    err && (err.constraint = constraintName);

    return err;
  });

  // remove non-errors and flatten multiple errors
  errors = _.filter(_.flatten(errors))

  return {
    valid: _.isEmpty(errors),
    errors: errors,
  };
};