Ext.define("USIMobile.view.SearchPeople", {
	extend: 'Ext.form.Panel',
	xtype: 'searchpeopleform',
	fullscreen: true,
	
	requires: [
		'Ext.TitleBar',
		'Ext.form.FieldSet',
		'Ext.field.Text',
		'Ext.field.Select',
	],

	config: {
		id: 'searchpeople',
		items: [
			{
				xtype: 'fieldset',
				items: [
					{
						xtype: 'textfield',	
						name: 'firstname',
						label: 'Firstname'
					},
					{
						xtype: 'textfield',	
						name: 'lastname',
						label: 'Lastname'
					},
					{
						xtype: 'button',
						text: 'Search',
						ui: 'confirm',
						action: 'search',	
					}

				]
			}
		]
	}
});
