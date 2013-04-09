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
		locales: {},
		items: [
			{
				docked: 'top',
				xtype: 'titlebar',
				locales: {
					title: 'title.settings',
				},
				iconCls: 'user'
			},
			{
				xtype: 'hiddenfield',
				name: 'usageagreement'
			},
			{
				xtype: 'fieldset',
				id: 'logindata',
				locales: {
					title: 'title.login',
				},
				items: [
					{
						xtype: 'textfield',	
						name: 'username',
						id: 'username',
						locales: {
							label: 'label.username'
						},
					},
					{
						xtype: 'passwordfield',	
						name: 'password',
						id: 'password',
						locales: {
							label: 'label.password'
						},
					},
					{
						xtype: 'selectfield',
						name: 'homeorganisation',
						id: 'homeorganisation',
						locales: {
							label: 'label.homeorg'
						},
						usePicker: false,
						displayField: 'name',
						valueField: 'url',
						value: 'https://login2.usi.ch/idp/shibboleth',
					},
					{
						xtype: 'button',
						name: 'check',
						ui: 'confirm',
						locales: {
							text: 'button.check'
						},
						action: 'checklogindata'
					}
				]
			},
			{
				xtype: 'fieldset',
				id: 'appsettings',
				locales: {
					title: 'title.appSettings',
				},
				items: [
					{
						xtype: 'selectfield',
						id: 'language',
						name: 'language',
						locales: {
							label: 'label.language',
						},
						options: [
							{text: 'English', value: 'en'},
							{text: 'Italiano', value: 'it'},
						]
					},
					{
						xtype: 'checkboxfield',
						id: 'cache',
						name: 'cache',
						locales: {
							label: 'label.cache',
						},
						checked: true,
					},
				]
			}
		],
	},
});
