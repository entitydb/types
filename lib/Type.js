var Base = require('entitydb-base');

var TypeError = require('./TypeError');
var schema = require('./schema');
var validate = require('./validate');
var extended = require('./extended');

var Type = Base.extend({
  type: "Type",
  object: {},
}, {
  validate: validate,
  extended: extended,
  TypeError: TypeError,
});

Type.validate(Type.prototype, schema);

module.exports = Type;