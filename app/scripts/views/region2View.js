/**
 * 
 */
define(['backbone.marionette', 'htmlTemplates'], function(Marionette, Template) {
	var Region2View = Marionette.ItemView.extend({
		template : Template.region2View
	});
	return Region2View;
});