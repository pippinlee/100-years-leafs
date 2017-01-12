var request = require('request');
var Player = require('./player.js');
var ConvertAcronym = require('./ConvertAcronym');

// create proper year and team url
function requestURL(start, end, id) {
	for (var i = start; i <= end; i++ ) {
		var startYear = i;
		var endYear = i + 1;
		var years = startYear.toString() + endYear.toString();
		var baseURL = `http://statsapi.web.nhl.com/api/v1/teams/${id}?expand=team.roster,roster.person&season=${years}`;
		requestStats(baseURL);
	}
}

// nhl.com's leaf team ids: 10,57,58
requestURL(1917, 1918, 57);
requestURL(1919, 1925, 58);
requestURL(1926, 2016, 10);

// make request
function requestStats(url) {
	request({url: url}, function(err, res, body) {
		var content = JSON.parse(body);
		if (!err && res.statusCode === 200 && content.teams[0].roster !== undefined) {
	        var info = content.teams[0].roster.roster;
	        info.map( function(x) {
	        	var person = x.person;
	        	var yearRes = res.request.uri.query;
	        	var year = parseInt( yearRes.split('=')[2].split('').slice(0,4).join(''));
	        	new Player({
	        		name: person.fullName,
	        		country: ConvertAcronym( person.birthCountry ),
	        		city: person.birthCity,
	        		height: person.height,
	        		weight: person.weight,
	        		year: year,
	        		_id: person.fullName
	        	}).save( function(err, players) {
	        		if (err) {
						console.log('player already exists: ' + err.errmsg  )	        			
	        		}
	        		console.log(players.name + ' saved!');
	        	});
	        })
		} else {
			console.log('err: ' + err);
		}
	})
}