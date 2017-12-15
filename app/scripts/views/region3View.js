/**
 * 
 */
define(['backbone.marionette', 'htmlTemplates'], function(Marionette, Template) {
	var Region3View = Marionette.ItemView.extend({
		template : Template.region3View
	});
	return Region3View;
});