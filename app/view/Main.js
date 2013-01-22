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
				iconCls: 'usi_home',
				xtype: 'dash'
			},
			{
				title: 'Account Settings',
				iconCls: 'usi_user',
				xtype: 'aaiaccount',
				
			},

		]
	}
});
