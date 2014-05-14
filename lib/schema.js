var tv4 = require('tv4');

var metaschema = require('./metaschema');

tv4.addSchema("Schema", metaschema);

var schema = {
  type: "object",
  properties: {
    type: {
      type: "string",
    },
    object: {
      $ref: "Schema",
    },
  },
  required: ["type"],
};

tv4.addSchema("Type", schema);

module.exports = schema;