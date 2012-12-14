Ext.define("USIMobile.view.SearchCourses", {
	extend: 'Ext.form.Panel',
	xtype: 'searchcoursesform',
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
		title: 'Search Courses',
		items: [
			{
				xtype: 'fieldset',
				items: [
					{
						xtype: 'textfield',	
						name: 'pattern',
						label: 'Title/Desc.'
					},
					{
						xtype: 'textfield',	
						name: 'professor',
						label: 'Professor'
					},
					{
						xtype: 'selectfield',
						name: 'faculty',
						label: 'Faculty',
						usePicker: false,
						options: [
							{ text: 'all', value: "all" },
							{ text: 'Communication', value: "COM" },
							{ text: 'Economics', value: "ECO" },
							{ text: 'Informatics', value: "INFO" },
						]
					},
					{
						xtype: 'selectfield',
						name: 'level',
						label: 'Level',
						usePicker: false,
						options: [
							{ text: 'all', value: "all" },
							{ text: 'Bachelor', value: "Bachelor" },
							{ text: 'Bachelor & Master', value: "Bachelor e Master" },
							{ text: 'Master', value: "Master" },
							{ text: 'PHD', value: "Phd" },
							{ text: 'Other', value: "Other/Altro" },
						]
					},
					{
						xtype: 'selectfield',
						name: 'semester',
						label: 'Semester',
						usePicker: false,
						options: [
							{ text: 'both', value: "both" },
							{ text: 'Autumn', value: "autumn/autunno" },
							{ text: 'Spring', value: "spring/primavera" },
						]
					},
					{
						xtype: 'selectfield',
						name: 'groupby',
						label: 'Group by',
						usePicker: false,
						options: [
							{ text: 'Faculty', value: "faculty" },
							{ text: 'Level', value: "level" },
							{ text: 'Semester', value: "semester" },
							{ text: 'Professor', value: "professor" },
						]
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
