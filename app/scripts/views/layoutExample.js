/**
 * This is an example for LayoutView
 */
define(['backbone.marionette', 'backbone','htmlTemplates', 'scripts/views/region1View', 'scripts/views/region2View'], function(Marionette, Backbone, Template, Region1View, Region2View) {
	var LayoutExample = Marionette.LayoutView.extend({
		el: '#mainApp',
		template : Template.layoutView,
		regions: {
		     region1 : '#region1',
		     region2 : '#region2'
		},
		initialize : function (){
			//To Do
			this.render();
		},
		render : function(){
			this.$el.html(this.template());
			this.on("something:do:it", function(args){
	    		 alert("This is trigger!");
	    		 Backbone.history.navigate('regionMang', true);
	    	});
			this.region1.show(new Region1View());
			this.getRegion('region2').show(new Region2View());
		},
		triggers : {
			//Triggers
			 "click #next":  {
			      event: "something:do:it",
			      preventDefault: true, // this param is optional and will default to true
			      stopPropagation: false
			  }
		}
	});
	return LayoutExample;
});
