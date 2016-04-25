var Auth = require('./Auth');

var User = {};

User.login = function() {
	Auth.authenticate_user();	
}

module.exports = User;