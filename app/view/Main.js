Ext.define("USIMobile.view.Main", {
	extend: 'Ext.tab.Panel',

	requires: [
		'USIMobile.view.Home',
	],

	config: {
		tabBarPosition: 'bottom',

		items: [
			{
				title: 'USI',
				iconCls: 'usi_home',
				xtype: 'home'
			},
			{
				title: 'Settings',
				iconCls: 'settings',
				xtype: 'settings',
			},

		]
	}
});
