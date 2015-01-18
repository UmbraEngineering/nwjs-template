
var fs      = require('fs');
var path    = require('path');
var config  = require('cloak.core/config');

// 
// Starts up the application
// 
exports.main = function() {
	// Expose some globals
	exposeGlobals([ 'document', 'navigator', 'location', 'history' ]);

	// Set up templates
	var hbs = require('cloak.view.nw-handlebars');
	var templating = require('cloak.view/src/templating');
	templating.registerEngine('handlebars', hbs(__dirname));

	// Set up the NeDB model store
	require('cloak.nedb').extendModel(require('cloak.model'));
	var dataPath = path.join(path.dirname(process.execPath), 'data');
	
	mkdirp(dataPath);
	config.module('nedb').set({
		path: dataPath
	});

	// Load the router, starting the app
	require('./routers');
};

// -------------------------------------------------------------

function exposeGlobals(keys) {
	keys.forEach(function(key) {
		global[key] = window[key];
	});
}

function mkdirp(dir) {
	try {
		fs.mkdirSync(dir);
	} catch (err) {
		if (err.code !== 'EEXIST') {
			throw err;
		}

		var stat = fs.statSync(dir);
		if (! stat.isDirectory()) {
			throw new Error('Cannot create directory; A file with that name already exists');
		}
	}
}
