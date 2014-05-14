var expect = require('chai').expect;

var ObjectType;

describe("#Object", function () {

  it("should load Type", function () {
    ObjectType = require('../lib/types/Object');
    expect(ObjectType).to.exist;
  });

  it("should validate an object", function () {
    var schema = {
      type: "Object",
    };
    var object = { such: "awesome", very: "cool", wow: true };
    var validation = ObjectType.validate(schema, object);
    expect(validation.valid).to.be.true;
    expect(validation.errors.length).to.equal(0);
  });

  it("should validate an object with properties", function () {
    var schema = {
      type: "Object",
      properties: {

      },
    };
    var object = { such: "awesome", very: "cool", wow: true };
    var validation = ObjectType.validate(schema, object);
    expect(validation.valid).to.be.true;
    expect(validation.errors.length).to.equal(0);
  });
});