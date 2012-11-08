Ext.define("USIMobile.view.Main", {
	extend: 'Ext.tab.Panel',

	requires: [
		'USIMobile.view.Dash',
	],

	config: {
		tabBarPosition: 'bottom',

		items: [
			{
				title: 'Dash',
				iconCls: 'home',
				xtype: 'dash'
			},
			{
				title: 'Account Settings',
				iconCls: 'user',
				xtype: 'aaiaccount',
				
			},

		]
	}
});
