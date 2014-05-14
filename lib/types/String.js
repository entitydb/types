var Type = require('./Type');

module.exports = Type.extend({
  type: "String",
  constraints: {
    type: function (val) {
      if (!typeof val === 'string') {
        return {
          expected: 'String',
          actual: typeof val,
        };
      }
    },
    maxLength: function (val, num) {
      if (val.length > num) {
        return {
          expected: 'length <= ' + num,
          actual: val.length,
        };
      };
    },
    minLength: function (val, num) {
      if (val.length < num) {
        return {
          expected: 'length >= ' + num,
          actual: val.length,
        };
      };
    },
  },
});