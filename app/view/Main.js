Ext.define("USIMobile.view.Main", {
	extend: 'Ext.tab.Panel',

	requires: [
		'USIMobile.view.Home',
	],

	config: {
		tabBarPosition: 'bottom',
		enableLocale: true,
		locales: {},
		tabBar: {
			id: 'apptabbar'
		},
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
        delegate : 'tabbar#apptabbar > tab',
        tap      : function(tab, e, eOpts) { 
			if(tab.getParent().getAt(0).getActive()) { // check the first button which is USI button
				this.getAt(0).pop(5); // go home button; the xtype home is the navigation view so use the pop function to accomplish this.
			}
		}
    }
	},

	setLocale : function(locale) {
		if(this.locale.get('title.settings') != undefined) {
			// change the title/text of the settings tab
			this.getTabBar().getAt(1).setTitle(Ux.locale.Manager.get('title.settings'));
		}
    },

});
