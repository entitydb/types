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
    expect(validation.errors.length).to.equal(0);
  });

  it("should error on string over maxLength", function () {
    var schema = {
      type: "String",
      maxLength: 10,
    };
    var string = "i'mma let you finish, but...";
    var validation = StringType.validate(schema, string);
    expect(validation.valid).to.be.false;
    expect(validation.errors.length).to.equal(1);
    expect(validation.errors[0].attributes.constraint).to.equal("maxLength");
    expect(validation.errors[0].attributes.expected).to.equal("length <= 10");
    expect(validation.errors[0].attributes.actual).to.equal(28);
  });

  it("should not error on string under maxLength", function () {
    var schema = {
      type: "String",
      maxLength: 30,
    };
    var string = "i'mma let you finish, but...";
    var validation = StringType.validate(schema, string);
    expect(validation.valid).to.be.true;
    expect(validation.errors.length).to.equal(0);
  });

  it("should error on string under minLength", function () {
    var schema = {
      type: "String",
      minLength: 30,
    };
    var string = "i'mma let you finish, but...";
    var validation = StringType.validate(schema, string);
    expect(validation.valid).to.be.false;
    expect(validation.errors.length).to.equal(1);
    expect(validation.errors[0].attributes.constraint).to.equal("minLength");
    expect(validation.errors[0].attributes.expected).to.equal("length >= 30");
    expect(validation.errors[0].attributes.actual).to.equal(28);
  });

  it("should not error on string over minLength", function () {
    var schema = {
      type: "String",
      minLength: 10,
    };
    var string = "i'mma let you finish, but...";
    var validation = StringType.validate(schema, string);
    expect(validation.valid).to.be.true;
    expect(validation.errors.length).to.equal(0);
  });
});