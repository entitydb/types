var Type = require('./Type');

module.exports = Type.extend({
  constraints: {
    type: function (typed) {
      return true;
    },
  },
});