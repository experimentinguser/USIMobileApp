Ext.define("USIMobile.view.SearchCourses", {
	extend: 'Ext.form.Panel',
	xtype: 'searchcourses',
	fullscreen: true,
	
	requires: [
		'Ext.TitleBar',
		'Ext.form.FieldSet',
		'Ext.field.Text',
		'Ext.field.Select',
	],

	controllers: [
		'USIMobile.controller.Courses'
	],

	config: {
		id: 'searchcourses',
		items: [
			{
				xtype: 'fieldset',
				items: [
					{
						xtype: 'textfield',	
						name: 'pattern',
						locales: {
							label: 'label.courseTitle'
						}
					},
					{
						xtype: 'textfield',	
						name: 'professor',
						locales: {
							label: 'label.professor'
						}
					},
					{
						xtype: 'selectfield',
						name: 'faculty',
						locales: {
							label: 'SelectFieldFaculty.label',
							options: 'SelectFieldFaculty.options'
						},
						usePicker: false,
						options: [
						]
					},
					{
						xtype: 'selectfield',
						name: 'level',
						locales: {
							label: 'SelectFieldLevel.label',
							options: 'SelectFieldLevel.options'
						},
						usePicker: false,
					},
					{
						xtype: 'selectfield',
						name: 'semester',
						locales: {
							label: 'SelectFieldSemester.label',
							options: 'SelectFieldSemester.options'
						},
						usePicker: false,
						
					},
					{
						xtype: 'selectfield',
						name: 'groupby',
						locales: {
							label: 'SelectFieldGroupBy.label',
							options: 'SelectFieldGroupBy.options'
						},
						usePicker: false,
					},
					{
						xtype: 'button',
						locales: {
							text: 'button.search'
						},
						ui: 'confirm',
						action: 'search',	
					}

				]
			}
		]
	}
});
