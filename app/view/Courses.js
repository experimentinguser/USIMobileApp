Ext.define("USIMobile.view.Courses", {
	extend: 'Ext.dataview.List',
	xtype: 'courses',

	config: {
		id: 'courses',
		itemTpl: '{title}',
		cls: 'standard_font',
		grouped: true,
	}
});
