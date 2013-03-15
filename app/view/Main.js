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
				xtype: 'home',
				title: 'USI',
				iconCls: 'usi_home',
			},
			{
				xtype: 'settings',
				iconCls: 'settings',
			},
		],
	listeners : {
        delegate : 'tabbar > tab',
        tap      : function() { this.getAt(0).pop(10); } // go home button
    }
	},

	setLocale : function(locale) {
		if(this.locale.get('title.settings') != undefined) {
			// change the title/text of the settings tab
			this.getTabBar().getAt(1).setTitle(Ux.locale.Manager.get('title.settings'));
		}
    },

});
