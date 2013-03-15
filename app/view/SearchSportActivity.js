Ext.define("USIMobile.view.SearchSportActivity", {
	extend: 'Ext.form.Panel',
	xtype: 'searchsportactivityform',
	fullscreen: true,
	
	requires: [
		'Ext.TitleBar',
		'Ext.form.FieldSet',
		'Ext.field.Text',
		'Ext.field.Select',
		'Ext.picker.Date',
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
							label: 'label.activity'
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
						dateFormat: 'd M Y',
						picker : {
							enableLocale : true,
							locales      : {
								months : 'months'
							},
							yearFrom: 2013,
						},
					},
					{
						xtype: 'datepickerfield',	
						name: 'to',
						locales: {
							label: 'label.to',
						},
						dateFormat: 'd M Y',
						picker : {
							enableLocale : true,
							locales      : {
								months : 'months'
							},
							yearFrom: 2013,
						},
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
	},
});
