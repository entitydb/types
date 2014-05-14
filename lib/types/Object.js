var Type = require('./Type');

module.exports = Type.extend({
  type: "Object",
  constraints: {
    type: function (typed) {
      if (!typeof typed === 'object') {
        return {
          expected: 'Object',
          actual: typeof value,
        };
      }
    },
  },
});