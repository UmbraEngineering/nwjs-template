
var config = require('cloak.core/config');

// 
// Starts up the application
// 
exports.main = function() {

	// Expose some globals
	global.document = window.document;
	global.navigator = window.navigator;
	global.location = window.location;
	global.history = window.history;

	// Set up templates
	var hbs = require('cloak.view.nw-handlebars');
	var templating = require('cloak.view/src/templating');
	templating.registerEngine('handlebars', hbs(__dirname));

	// Load the router, starting the app
	require('./routers');

};
