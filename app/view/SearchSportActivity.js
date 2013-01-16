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
		title: 'Search Sport Activity',
		items: [
			{
				xtype: 'fieldset',
				items: [
					{
						xtype: 'textfield',	
						name: 'name',
						label: 'Name'
					},
					{
						xtype: 'selectfield',
						name: 'category',
						label: 'Category',
						usePicker: false,
						options: [
							{ text: 'all', value: 'all' },
							{ text: 'Art and Dance', value: 'Arti e Danze' },
							{ text: 'Winter activities', value: 'Attività invernali' },
							{ text: 'Fitness and Health', value: 'Fitnes e salute' },
							{ text: 'Games and Events', value: 'Giochi e eventi' },
						]
					},
					{
						xtype: 'datepickerfield',	
						name: 'from',
						label: 'From',
						value: null,
						dateFormat: 'd M Y',
					},
					{
						xtype: 'datepickerfield',	
						name: 'to',
						label: 'To',
						value: null,
						dateFormat: 'd M Y'
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
