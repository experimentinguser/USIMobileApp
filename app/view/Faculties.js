Ext.define("USIMobile.view.Faculties", {
	extend: 'Ext.dataview.List',
	xtype: 'faculties',

	config: {
		id: 'faculties',
		title: 'Select Faculty', 
		emptyText: 'No info available.',
		itemTpl: '{title}',
		data: [
			{ id: 'com', title: "Comunication" },
			{ id: 'eco', title: "Economy" },
			{ id: 'info', title: "Info" },
		]
	}
});
