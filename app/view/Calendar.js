Ext.define("USIMobile.view.Calendar", {
	extend: 'Ext.dataview.List',
	xtype: 'calendar',

	config: {
		id: 'calendar',
		title: 'Calendar', 
		emptyText: 'No info available.',
		itemTpl: '{[values.id != "academiccalendar" ? values.title : values.title + USIMobile.Session.getAcademicCalendarStore().first().get("year")]}',
		data: [
			{ id: 'academiccalendar', title: "Academic Calendar: ", },
			{ id: 'teaching', title: "Teaching timetables", },
			{ id: 'examination', title: "Examination timetables", },
		],
	}
});
