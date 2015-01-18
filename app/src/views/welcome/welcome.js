
var View = require('cloak.view');

var WelcomeView = module.exports = View.extend({

	template: 'views/welcome/welcome.hbs',
	className: 'welcome',

	events: {
		// 
	},

	draw: function() {
		this.elem.innerHTML = this.render();
		this.bindEvents();
	}

});
