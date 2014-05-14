var Type = require('./Type');

module.exports = Type.extend({
  type: "Object",
  constraints: {
    type: function (val) {
      if (!typeof val === 'object') {
        return {
          expected: 'Object',
          actual: typeof val,
        };
      }
    },
    attributes: function (val, objSchema) {
      return _.map(typed, function (value, key) {
        var validation = Type.validate(value, objSchema[key]);
        console.log(validation);
        return validation.errors;
      });
    }
  },
});