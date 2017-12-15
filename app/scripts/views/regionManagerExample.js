/**
 * 
 */
define(['backbone.marionette', 'htmlTemplates', 'scripts/views/region3View', 'scripts/views/region4View'], function(Marionette, Template, Region3View, Region4View) {
	var rm = new Marionette.RegionManager();
	var RegionManagerExample = Marionette.LayoutView.extend({
		el: '#mainApp',
		template : Template.regionManView,

		initialize : function (){
			//To Do
			rm.addRegion("region3", "#region-3");
			rm.addRegion("region4", "#region-4");
			this.render();
		},
		render : function(){
			this.$el.html(this.template());
			var regions = rm.getRegions();
			regions.region3.show(new Region3View());
			regions.region4.show(new Region4View());
//			rm.removeRegion("region4");
//			rm.emptyRegions();
			console.log(rm.getRegions());
		}
	});
	return RegionManagerExample;
});