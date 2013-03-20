Ext.define("USIMobile.view.News", {
	extend: 'Ext.tab.Panel',
	xtype: 'news',

	requires: [
	],

 	controllers: [
	],

	config: {
		id: 'news',
		title: 'USI News',
		styleHtmlContent: true,
		scrollable: true,
		tabBar: {
			id: 'newstabbar',
			layout: { pack: 'center' }
		},
		items: [
			{
				title: 'News',
				xtype: 'shortnews',
			},
			{
				title: 'Events',
				xtype: 'shorteventnews',
			},
			{
				title: 'Community',
				xtype: 'shortcommunitynews',
			},
		],
			/*
		listeners: {
			delegate : 'tabbar#newstabbar > tab',
			tap: function(tab){
				console.log(tab);
			}
		}
			*/
	},

});
