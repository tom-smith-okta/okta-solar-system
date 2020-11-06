
module.exports = function (app) {

	app.get('/', function(req, res, next) {

		res.send("<b>Okta solar system api</b>")

	})

	/********************************************************/
	// Solar system endpoints
	/********************************************************/


	// to demo open access (no authz required)
	app.get('/visitors', function(req, res, next) {
		res.json(["Oumuamua", "2I/Borisov"])
	})

	// to demo jwt validation (valid jwt required, but no evaluation of scopes)
	app.get('/asteroids', function(req, res, next) {

		var asteroids = ["ceres", "hygiea", "pallas", "vesta"]

		res.json(asteroids)
	})

	// to demo scope ("silver" scope required)
	app.get('/planets', function(req, res, next) {

		var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]

		res.json(planets)
	})

	// to demo a different scope ("gold" scope required)
	app.get('/moons', function(req, res, next) {

		var moons = ["adrastea", "amalthea", "callisto", "europa", "ganymede", "io", "metis", "thebe"]

		res.json(moons)
	})

	/********************************************************/
	// other misc endpoints
	/********************************************************/

	app.get('/grades/:student_id', function(req, res, next) {

		var grades = {
			"12345": "F",
			"00uptdgk3iNZYSAc10h7": "A"
		}

		var student_id = req.params.student_id

		var grade = grades[student_id]

		var obj = {
			"student_id": student_id,
			"grade": grade
		}

		res.json(obj)
	})

	app.get('/ssn', function(req, res, next) {

		var ssn = get_substr(3) + "-XX-" + get_substr(4)

		var obj = {
			"ssn": ssn
		}

		res.json(obj)
	})

	app.get('/risk_score', function(req, res, next) {

		var risk_score = Math.floor(Math.random() * 1000)

		var obj = {
			"risk_score": risk_score
		}

		res.json(obj)
	})

	app.get('/v', function(req, res, next) {

		var ssn = get_substr(3) + "-XX-" + get_substr(4)

		var obj = {
			"commands": [
				{
					"type": "com.okta.user.profile.update",
					"value": {
						"ssn": ssn
					}
				}
			]
		}

		res.json(obj)
	})

	app.post('/test_inline_hook', function(req, res, next) {

		var obj = {
		  "commands": [
		    {
		      "type": "com.okta.identity.patch",
		      "value": [
		        {
		          "op": "add",
		          "path": "/claims/extPatientId",
		          "value": "1234"
		        }
		      ]
		    },
		    {
		      "type": "com.okta.access.patch",
		      "value": [
		        {
		          "op": "add",
		          "path": "/claims/external_guid",
		          "value": "F0384685-F87D-474B-848D-2058AC5655A7"
		        }
		      ]
		    }
		  ]
		}

		res.json(obj)

	})

	app.post('/valid_accounts', function(req, res, next) {

		var email = req.body.email
		var account_no = req.body.account_no

		console.dir(req.body)

		var response_obj = {}

		if (email == "clark.kent@mailinator.com" && account_no == "12345") {
			console.log("this is a valid combo")

			response_obj.result = "success"
		}
		else {
			response_obj.result = "failure"
		}

		res.json(response_obj)

		// res.sendStatus(200)
	})

	app.post('/ssn-saml', function(req, res, next) {

		var ssn = get_substr(3) + "-XX-" + get_substr(4)

		// WORKS
		var obj = {
			"commands": [
		    {
		      "type": "com.okta.assertion.patch",
		      "value": [
		        {
		          "op": "replace",
		          "path": "/authentication/sessionIndex",
		          "value": "definitelyARealSession"
		        }
		      ]
		    }
		    ]
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