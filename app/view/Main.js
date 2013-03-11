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
				title: 'Account Settings',
				iconCls: 'usi_user',
				xtype: 'aaiaccount',
				
			},

		]
	}
});
