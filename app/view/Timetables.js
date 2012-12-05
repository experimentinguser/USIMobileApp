Ext.define("USIMobile.view.Timetables", {
	extend: 'Ext.dataview.List',
	xtype: 'timetables',

	config: {
		id: 'timetables',
		title: 'Timetables', 
		emptyText: 'No info available.',
		grouped: true,
		itemTpl: '<div class="timetable_title">{program}</div>',
	}
});
