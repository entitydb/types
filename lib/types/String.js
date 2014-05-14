var Type = require('../Type');

module.exports = Type.extend({
  type: "String",
  constraints: {
    type: function (typed) {
      if (!typeof typed === 'string') {
        return {
          expected: 'String',
          actual: typeof value,
        };
      }
    },
    maxLength: function (string, num) {
      if (string.length > num) {
        return {
          expected: 'length < ' + num,
          actual: string.length,
        };
      };
    },
  },
});