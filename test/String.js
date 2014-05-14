var expect = require('chai').expect;

var StringType;

describe("#String", function () {

  it("should load Type", function () {
    StringType = require('../lib/types/String');
    expect(StringType).to.exist;
  });

  it("should validate a string", function () {
    var schema = {
      type: "String",
    };
    var string = "string theory";
    var validation = StringType.validate(schema, string);
    expect(validation.valid).to.be.true;
  });

  it("should error on string over maxLength", function () {
    var schema = {
      type: "String",
      maxLength: 10,
    };
    var string = "i'mma let you finish, but...";
    var validation = StringType.validate(schema, string);
    expect(validation.valid).to.be.false;
  });
});