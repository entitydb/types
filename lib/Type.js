var Base = require('entitydb-base');
var _ = require('lodash');

var validate = require('./validate');

var Type = Base.extend({
  type: "Type",
  properties: {
    type: {
      required: true,
    },
    properties: {
      type: "Object",
    },
  },
}, {
  validate: validate,
  types: {},
  extended: function (Child) {
    this.types[Child.prototype.type] = Child;
  },
  TypeError: require('./TypeError'),
  PropertyError: require('./PropertyError'),
});

module.exports = Type;