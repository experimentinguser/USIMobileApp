Ext.define("USIMobile.view.Main", {
	extend: 'Ext.tab.Panel',
	xtype: 'main',

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
				iconCls: 'home',
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
			},
		}
	},

	setLocale : function(locale) {
		if(this.locale.get('title.settings') != undefined) {
			// change the title/text of the settings tab
			this.getTabBar().getAt(1).setTitle(Ux.locale.Manager.get('title.settings'));
			// show the sync data message only if the app has started and the first tab is visible.
			// avoid showing the message when the language setting changes.
			if(this.getActiveItem().getId() == 'home') {
				this.showNotification(Ux.locale.Manager.get('message.syncData'));
			}
		}
    },

	showNotification: function(message) {
		this.setHtml('<div id="notification">'+message+'</div>');
	},

	hideNotification: function() {
		this.setHtml('');
	}

});
