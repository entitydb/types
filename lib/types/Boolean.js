var Type = require('./Type');

module.exports = Type.extend({
  type: "Boolean",
  constraints: {
    type: function (typed) {
      return typeof typed === 'boolean';
    },
  },
});