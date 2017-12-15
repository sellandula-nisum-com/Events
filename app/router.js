define(['backbone.marionette', 'scripts/views/homeView', 'scripts/views/layoutExample', 'scripts/views/RegionManagerExample'], function(Marionette, HomeView, LayoutExample, RegionMangEx) {  
var Router = Marionette.AppRouter.extend({
   
    routes: {          
        '' : 'homeRoute',
        'layout' : 'layoutRoute',
        'regionMang': 'regionManRoute'
    },
    homeRoute:function(){
    	new HomeView();
    },
    layoutRoute: function(){
    	new LayoutExample();
    },
    regionManRoute: function(){
    	var view = new RegionMangEx();
    }
  });
  return Router;
});