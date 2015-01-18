
var Router             = require('cloak.router');
var WelcomeController  = require('../views/welcome');
var wait               = require('cloak.animate').animate.wait;

var MainRouter = module.exports = Router.extend({

	routes: {
		'/':     'welcome'
	},

	initialize: function() {
		this.scope = document.getElementById('main');
	},

	welcome: function() {
		document.title = 'node-webkit project';
		this.drawPage(WelcomeController);
	},

// -------------------------------------------------------------
	
	// 
	// Given a page controller, changes the view to the given page
	// 
	// @param {Ctrl} a page controller class to render
	// @return promise
	// 
	drawPage: function(Ctrl) {
		var self = this;

		if (this.current) {
			return this.current.undraw().then(render);
		} else {
			return wait(100).then(render);
		}

		function render() {
			self.current = new Ctrl(self.scope);
			return self.current.run();
		}
	}

});
