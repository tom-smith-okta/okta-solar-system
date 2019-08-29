
module.exports = function (app) {

	app.get('/', function(req, res, next) {

		res.send("Okta solar system api")

	})

	app.get('/asteroids', function(req, res, next) {

		var asteroids = ["ceres", "hygiea", "pallas", "vesta"]

		res.json(asteroids)
	})

	app.get('/planets', function(req, res, next) {

		var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]

		res.json(planets)
	})

	app.get('/moons', function(req, res, next) {

		var moons = ["adrastea", "amalthea", "callisto", "europa", "ganymede", "io", "metis", "thebe"]

		res.json(moons)
	})

	app.get('/ssn', function(req, res, next) {

		var ssn = get_substr(3) + "-XX-" + get_substr(4)

		var obj = {
			"ssn": ssn
		}

		res.json(obj)
	})
}

function get_substr(l) {

	var s = ""

	for(i = 0; i < l; i++) {
		s = s + Math.floor(Math.random() * 10)
	}

	return s
}