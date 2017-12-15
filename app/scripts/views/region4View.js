/**
 * 
 */
define(['backbone.marionette', 'htmlTemplates'], function(Marionette, Template) {
	var Region4View = Marionette.ItemView.extend({
		template : Template.region4View
	});
	return Region4View;
});