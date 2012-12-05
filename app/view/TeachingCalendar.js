Ext.define("USIMobile.view.TeachingCalendar", {
	extend: 'Ext.dataview.List',
	xtype: 'teachingcalendar',

	config: {
		id: 'teachingcalendar',
		title: 'Teaching Calendar', 
		emptyText: 'No info available.',
		itemTpl: '{title}',
		data: [
			{ id: 'teaching', title: "Teaching timetables", },
			{ id: 'examination', title: "Examination timetables", },
		]

	}
});
