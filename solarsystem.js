var SolarSystem = function(name) {
  this.name = name;
  this.planets = [];

  this.addPlanetToPlanets = function(planet) {
     this.planets.push(planet);
  }
}

console.log(SolarSystem);

module.exports = SolarSystem;