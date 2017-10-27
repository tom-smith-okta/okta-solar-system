
module.exports = function (app) {

	app.get('/', function(req, res, next) {

		res.send("okta solar system api");

	});

	app.get('/planets', function(req, res, next) {

		var planets = [ "mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];

		res.json(planets);
	});

	app.get('/moons', function(req, res, next) {

		var moons = [ "adrastea", "amalthea", "callisto", "europa", "ganymede", "io", "metis", "thebe"];

		res.json(moons);
	});
}