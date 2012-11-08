Ext.define("USIMobile.view.Dash", {
	extend: 'Ext.navigation.View',
	xtype: 'dash',

	views:[
		'USIMobile.view.MenuMensa',
	],

	config: {
		id: 'dash',
		autoDestroy: false,
		items: [	
			{
				xtype: 'container',
				layout: 'vbox',
				items:[
					{
						xtype: 'container',
						id: 'firstrow',
						layout: 'hbox',
						flex: 1, 
						items: [
							{
								xtype: 'button',
								text: 'Item 1',
								width: '33.3%',
							},
							{
								xtype: 'button',
								text: 'Item 2',
								width: '33.3%',
							},
							{
								xtype: 'button',
								text: 'Item 3',
								width: '33.3%',
							},
						]
					},
					{
						xtype: 'container',
						id: 'secondrow',
						layout: 'hbox',
						flex: 1, 
						items: [
							{
								xtype: 'button',
								text: 'Item 4',
								width: '33.3%',
							},
							{
								xtype: 'button',
								text: 'Item 5',
								width: '33.3%',
							},
							{
								xtype: 'button',
								text: 'Item 6',
								width: '33.3%',
							},
						]
					},
					{
						xtype: 'container',
						id: 'thirdrow',
						layout: 'hbox',
						flex: 1, 
						items: [
							{
								xtype: 'button',
								text: 'Item 7',
								width: '33.3%',
							},
							{
								xtype: 'button',
								text: 'Item 8',
								width: '33.3%',
							},
							{
								xtype: 'button',
								text: 'Item 9',
								width: '33.3%',
							},
						]
					},
				]
			},
		]
	}
});
