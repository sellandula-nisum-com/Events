/**
 * 
 */
define(['backbone.marionette', 'htmlTemplates'], function(Marionette, Template) {
	var Region1View = Marionette.ItemView.extend({
		template : Template.region1View
	});
	return Region1View;
});