
module.exports = function (app) {

	app.get('/', function(req, res, next) {

		res.send("<b>Okta solar system api</b>")

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

	app.post('/ssn-saml', function(req, res, next) {

		// res.json({"somekey": "someval"})

		var ssn = get_substr(3) + "-XX-" + get_substr(4)

		// var obj = {
		// 	"commands": [
		// 		{
		// 			"type": "com.okta.assertion.patch",
		// 			"value": {
		// 				"ssn": ssn
		// 			}
		// 		}
		// 	]
		// }

		// var obj = {
		// 	"commands": [
		// 		{
		// 			"type": "com.okta.assertion.patch",
		// 			"value": {
		// 				"op": "add",
		// 				"path": "/claims/test",
		// 				"value": ssn
		// 			}
		// 		}
		// 	]
		// }

var obj =
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
        // {
        //   "op": "add",
        //   "path": "/claims/foo",
        //   "value": {
        //     "attributes": {
        //       "NameFormat": "urn:oasis:names:tc:SAML:2.0:attrname-format:basic"
        //     },
        //     "attributeValues": [
        //       {
        //         "attributes": {
        //           "xsi:type": "xs:string"
        //         },
        //         "value": "barer"
        //       }
        //     ]
        //   }
        // }


		// var obj = {
		// 	"op": "add",
		// 	"path": "/claims/nickName",
		// 	"value": {
		// 		"attributes": {
		// 			"NameFormat": "urn:oasis:names:tc:SAML:2.0:attrname-format:basic"
		// 		},
		// 		"attributeValues": [
		// 			{
		// 				"attributes": {
		// 					"xsi:type": "xs:string"
		// 				},
		// 				"value": ssn
		// 			}
		// 		]
		// 	}
		// }


// var obj = {
//    "commands": [
//     {
//       "type": "com.okta.assertion.patch",
//       "value": [
//         {
//           "op": "add",
//           "path": "/claims/foo",
//           "value": {
//             "attributes": {
//               "NameFormat": "urn:oasis:names:tc:SAML:2.0:attrname-format:basic"
//             },
//             "attributeValues": [
//               {
//                 "attributes": {
//                   "xsi:type": "xs:string"
//                 },
//                 "value": "barer"
//               }
//             ]
//           }
//         }
//       ]
//     }
//   ]
// }

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