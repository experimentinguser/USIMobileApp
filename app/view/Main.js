Ext.define("USIMobile.view.Main", {
	extend: 'Ext.tab.Panel',

	requires: [
		'USIMobile.view.Home',
	],

	config: {
		tabBarPosition: 'bottom',
		enableLocale: true,
		locales: {},
		items: [
			{
				title: 'USI',
				iconCls: 'usi_home',
				xtype: 'home'
			},
			{
				iconCls: 'settings',
				xtype: 'settings',
			},

		]
	},

	setLocale : function(locale) {
		if(this.locale.get('title.settings') != undefined) {
			// change the title/text of the settings tab
			this.getTabBar().getAt(1).setTitle(Ux.locale.Manager.get('title.settings'));
		}
    },

});
