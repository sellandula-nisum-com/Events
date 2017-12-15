/**
 * 
 */
define(['backbone.marionette','backbone', 'htmlTemplates'], function(Marionette, Backbone, Template) { 
	var data = {name : "Team"};
	var HomeView = Marionette.ItemView.extend({
		el: '#mainApp',
		template : Template.mainItemView,
		initialize : function (){
			//To Do
			this.render();
		},
		render : function(){
			this.$el.html(this.template(data));
		},
		events : {
			//Some events
			"click #getLayout" : 'getLayoutView'
		},
		onShow: function() {
	      //To do something on show
	
	    },
	    getLayoutView: function(){
	    	Backbone.history.navigate('layout',true);
	    }
	});
	return HomeView;
});