var _ = require('lodash');

var Type = require('./Type');

module.exports = Type.extend({
  constraints: {
    type: function (typed) {
      return Array.isArray(typed);
    },
    items: function (typed, val) {
      var validate = require('../validate');
      return _.map(typed, function (item) {
        return validate(item, val);
      });
    },
  },
});