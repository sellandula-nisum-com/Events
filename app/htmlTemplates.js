define(function (require,hbars) {
	'use strict';

    return {
        mainItemView : require('hbars!templates/main'),
        layoutView : require('hbars!templates/layout'),
        region1View : require('hbars!templates/regions/region1'),
        region2View : require('hbars!templates/regions/region2'),
        regionManView: require('hbars!templates/regionManage'),
        region3View : require('hbars!templates/regions/region3'),
        region4View : require('hbars!templates/regions/region4'),
    };
});