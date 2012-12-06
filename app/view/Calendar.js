Ext.define("USIMobile.view.Calendar", {
	extend: 'Ext.dataview.List',
	xtype: 'calendar',

	config: {
		id: 'calendar',
		title: 'Calendar', 
		emptyText: 'No info available.',
		itemTpl: '{title}',
		data: [
			{ id: 'teaching', title: "Teaching timetables", },
			{ id: 'examination', title: "Examination timetables", },
		]

	}
});
