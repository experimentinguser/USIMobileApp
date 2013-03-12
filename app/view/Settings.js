Ext.define("USIMobile.view.Settings", {
	extend: 'Ext.form.Panel',
	xtype: 'settings',
	fullscreen: true,
	
	requires: [
		'Ext.TitleBar',
		'Ext.form.FieldSet',
		'Ext.field.Hidden',
		'Ext.field.Text',
		'Ext.field.Password',
		'Ext.field.Select',
	],

	controllers: [
		'USIMobile.controller.Settings'
	],

	config: {
		id: 'settings',
		items: [
			{
				docked: 'top',
				xtype: 'titlebar',
				title: 'Settings',
				iconCls: 'user'
			},
			{
				xtype: 'hiddenfield',
				name: 'usageagreement'
			},
			{
				xtype: 'fieldset',
				title: 'Login AAI',
				id: 'logindata',
				items: [
					{
						xtype: 'textfield',	
						name: 'username',
						label: 'Username'
					},
					{
						xtype: 'passwordfield',	
						name: 'password',
						label: 'Password'
					},
					{
						xtype: 'selectfield',
						name: 'homeorganisation',
						label: 'Home Organisation',
						usePicker: false,
						displayField: 'name',
						valueField: 'url',
						value: 'https://login2.usi.ch/idp/shibboleth',
					},
				]
			},
			{
				xtype: 'fieldset',
				title: 'App Settings',
				id: 'appsettings',
				items: [
					{
						xtype: 'selectfield',
						name: 'language',
						label: 'Language',
						options: [
							{text: 'English', value: 'eng'},
							{text: 'Italiano', value: 'ita'},
						]
					},
					{
						xtype: 'checkboxfield',
						name: 'cache',
						label: 'Cache',
						checked: true,
					},
				]
			}
		],
	}
});
