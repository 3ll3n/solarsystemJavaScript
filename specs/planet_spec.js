var Planet = require('../planet');
var assert = require('assert');

describe('Planet', function() {

  var planet;

  beforeEach(function () {
    planet = new Planet("Mars");
  });

  it('should have a name', function() {
    assert.equal("Mars", planet.name);
  });

});