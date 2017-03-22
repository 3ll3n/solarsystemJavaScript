var SolarSystem = require('../solarsystem');
var Planet = require('../planet');
var assert = require('assert');

describe('SolarSystem', function() {

  var solarsystem;
  var planet1;
  var planet2;

  beforeEach(function () {
    solarsystem = new SolarSystem('our solar system');
    planet1 = new Planet("Mars");
    planet2 = new Planet("Saturn");
  });

  it('should initially be 0, no planets yet', function() {
    assert.equal(0, solarsystem.planets.length);
  });

  it('should be 1 when a planet is added', function() {
    solarsystem.addPlanetToPlanets(planet1);
    assert.equal(1, solarsystem.planets.length);
  });

});