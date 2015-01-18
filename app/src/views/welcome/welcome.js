
var View  = require('cloak.view');

var WelcomeView = module.exports = View.extend({

	template: 'views/welcome/welcome.hbs',
	className: 'welcome',

	events: {
		// 
	},

	draw: function() {
		this.elem.innerHTML = this.render({
			cwd: require('path').dirname(process.execPath),
			data: require('cloak.core/config').module('nedb').get('path')
		});
		
		this.bindEvents();
	}

});
