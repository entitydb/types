var _ = require('lodash');

var Type = require('./Type');

module.exports = Type.extend({
  constraints: {
    type: function (val) {
      return Array.isArray(val);
    },
    items: function (val, itemSchema) {
      var validate = require('../validate');
      return _.map(val, function (item) {
        return validate(item, itemSchema);
      });
    },
  },
});