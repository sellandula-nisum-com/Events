require.config({
  paths: {
    'jquery': 'assets/vendor/jquery/dist/jquery',
    'underscore': 'assets/vendor/underscore/underscore',
    'backbone': 'assets/vendor/backbone/backbone',
    'backbone.radio': 'assets/vendor/backbone.radio/build/backbone.radio',
    'backbone.babysitter': 'assets/vendor/backbone.babysitter/lib/backbone.babysitter',
    'backbone.wreqr': 'assets/vendor/backbone.wreqr/lib/backbone.wreqr',
    'backbone.marionette': 'assets/vendor/marionette/lib/backbone.marionette',
    'text': 'assets/vendor/requirejs-text/text',
    'handlebars':'assets/vendor/handlebars/handlebars',
    'hbars':'hbars'
  },
  shim: {
    underscore: {
      exports: '_'
    },
    handlebars: { exports: 'Handlebars' },
    backbone: {
      exports: 'Backbone',
      deps: ['jquery', 'underscore']
    },
    marionette: {
      exports: 'Backbone.Marionette',
      deps: ['backbone']
    }
  },
  deps: ['jquery', 'underscore','']
});

require(['backbone.marionette', 'router',], function(Marionette, Router) {
	var app = new Marionette.Application();
	app.on('start', function(){
		var appRouter = new Router();
		Backbone.history.start();
	});
	app.start();
});