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
						locales: {
							label: 'label.firstname'
						}
					},
					{
						xtype: 'textfield',	
						name: 'lastname',
						locales: {
							label: 'label.lastname'
						}
					},
					{
						xtype: 'button',
						locales: {
							text: 'button.search',
						},
						ui: 'confirm',
						action: 'search',	
					}

				]
			}
		]
	}
});
