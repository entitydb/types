var Type = require('../Type');

module.exports = Type.extend({
  type: "Number",
  constraints: {
    type: function (typed) {
      return typeof typed === 'number';
    },
  },
});