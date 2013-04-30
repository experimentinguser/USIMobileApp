Ext.define("USIMobile.view.CampusMap", {
	extend: 'Ext.Panel',
	xtype: 'campusmap',
	
	config: {
		id: 'campusmap',
		//width: '100%', height: '100%',
		html: '<iframe width="100%" height="100%" src="http://maps.google.com/maps?q=campus+usi+lugano&hl=en&sll=46.011031,8.958297&sspn=0.100504,0.222301&hq=campus+usi+lugano&radius=15000&t=m&z=19&output=embed"></iframe>'
		/*
		items: [
			{
				xtype: 'map',
				width: '100%',
				height: '100%',
				//map: 'http://maps.google.com/maps?q=campus+usi+lugano&hl=en&sll=46.011031,8.958297&sspn=0.100504,0.222301&hq=campus+usi+lugano&radius=15000&t=m&z=19'
				useCurrentLocation: true,
				mapOptions: {
					center: new google.maps.LatLng(46.011031,8.958297),
					zoom: 19
				}
			},
		]
		*/
	}
});
