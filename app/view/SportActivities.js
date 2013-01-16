Ext.define("USIMobile.view.SportActivities", {
	extend: 'Ext.dataview.List',
	xtype: 'sportactivities',

	config: {
		id: 'sportactivities',
		title: 'Sport Activities', 
		emptyText: 'No sport activities found.',
		itemTpl: '{name_en}',
		grouped: true
	}
});
