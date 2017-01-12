var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/leafDB');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function() {
	console.log('connection now open!')
});

var Schema = mongoose.Schema;

var playerSchema = mongoose.Schema({
	name: String,
	country: String,
	city: String,
	height: String,
	weight: Number,
	year: Number,
	_id: String,
	lat: Number,
	lng: Number
});

var Player = mongoose.model('Player', playerSchema);

module.exports = Player;
