var expect = require('chai').expect;

var Type;

describe("Type", function () {

  it("should load Type", function () {
    Type = require('../');
    expect(Type).to.exist;
  });
});