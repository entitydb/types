var Base = require('entitydb-base');

var schema = require('./schema');

module.exports = function extended (Child) {
  Base.extended(Child);

  // Child cannot override Parent type
  if (Child.prototype.type === this.prototype.type) {
    Child.prototype.type = undefined;
  }

  this.validate(Child.prototype, schema);
};