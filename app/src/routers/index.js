
var Router      = require('cloak.router');
var conf        = require('cloak.core/config').module('router');
var MainRouter  = require('./main');

// Make the node-webkit play nice with the router
history.pushState(null, null, '/');
conf.set({
	html4: false,
	historyjs: false
});

var router = module.exports = new MainRouter();

router.start();
