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
		locales: {},
		tabBar: {
			id: 'newstabbar',
			layout: { pack: 'center' }
		},
		items: [
			{
				xtype: 'shortnews',
				title: 'News',
			},
			{
				xtype: 'shorteventnews',
				title: 'Events',
			},
			{
				xtype: 'shortcommunitynews',
				title: 'Community',
			},
		],
	},

	setLocale : function(locale) {
		if(this.locale.get('title.settings') != undefined) {
			this.getTabBar().getAt(0).setTitle(Ux.locale.Manager.get('title.news'));
			this.getTabBar().getAt(1).setTitle(Ux.locale.Manager.get('title.events'));
			this.getTabBar().getAt(2).setTitle(Ux.locale.Manager.get('title.community'));
		}
    },

});
