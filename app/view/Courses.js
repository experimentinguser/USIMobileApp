Ext.define("USIMobile.view.Courses", {
	extend: 'Ext.dataview.List',
	xtype: 'courses',

	config: {
		id: 'courses',
		title: 'Courses', 
		emptyText: 'No courses found.',
		itemTpl: '{title}',
		grouped: true
	}
});
