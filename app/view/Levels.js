Ext.define("USIMobile.view.Levels", {
	extend: 'Ext.dataview.List',
	xtype: 'levels',

	config: {
		id: 'levels',
		title: 'Select Level', 
		emptyText: 'No info available.',
		itemTpl: '{title}',
		data: [
			{ id: 'bachelor', title: "Bachelor"},
			{ id: 'master', title: "Master" },
			{ id: 'phd', title: "PHD" },
		]
	}
});
