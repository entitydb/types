var expect = require('chai').expect;

var Type;

describe("Type", function () {

  it("should load Type", function () {
    Type = require('../');
    expect(Type).to.exist;
  });

  it("should extend Type to Thing", function () {
    var Thing = Type.extend({
      type: "Thing",
      object: {
        properties: {
          name: {
            type: "string",
          },
        },
      },
    });
  });

  it("should error extending Type", function () {
    var fn = function () {
      var Thing = Type.extend({});
    };
    expect(fn).to.throw(Type.TypeError);
  });

  it("should extend Type to Thing", function () {
    var Thing = Type.extend({
      type: "Thing",
      object: {
        properties: {
          name: {
            type: "string",
          },
        },
      },
    });
  });
});