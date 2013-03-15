Ext.define("USIMobile.view.SearchSportActivity", {
	extend: 'Ext.form.Panel',
	xtype: 'searchsportactivityform',
	fullscreen: true,
	
	requires: [
		'Ext.TitleBar',
		'Ext.form.FieldSet',
		'Ext.field.Text',
		'Ext.field.Select',
		'Ext.field.DatePicker',
	],

	config: {
		id: 'searchsportactivityform',
		items: [
			{
				xtype: 'fieldset',
				items: [
					{
						xtype: 'textfield',	
						name: 'name',
						locales: {
							label: 'label.name'
						}
					},
					{
						xtype: 'selectfield',
						name: 'category',
						locales: {
							label: 'SelectFieldCategory.label',
							options: 'SelectFieldCategory.options'
						},
						usePicker: false,
						
					},
					{
						xtype: 'datepickerfield',	
						name: 'from',
						locales: {
							label: 'label.from',
						},
						value: null,
						dateFormat: 'd M Y',
					},
					{
						xtype: 'datepickerfield',	
						name: 'to',
						locales: {
							label: 'label.to',
						},
						value: null,
						dateFormat: 'd M Y'
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
