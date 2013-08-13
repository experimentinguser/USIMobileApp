Ext.define("USIMobile.view.TeachingTimetables", {
	extend: 'Ext.dataview.List',
	xtype: 'teachingtimetables',

	config: {
		id: 'teachingtimetables',
		emptyText: 'No info available.',
		grouped: true,
		itemTpl: '<div class="timetable_title">{program}</div>',
	}
});
