Ext.define("USIMobile.view.Faculties", {
	extend: 'Ext.dataview.List',
	xtype: 'faculties',

	config: {
		id: 'faculties',
		emptyText: 'No info available.',
		itemTpl: '{title}',
		data: [
			{ faculty: 'com', level: 'bachelor', title: 'Com - Bachelor' },
			{ faculty: 'com', level: 'master', title: 'Com - Master'},
			{ faculty: 'com', level: 'phd', title: 'Com - PhD'},
			{ faculty: 'eco', level: 'bachelor', title: 'Eco - Bachelor'},
			{ faculty: 'eco', level: 'master', title: 'Eco - Master'},
			{ faculty: 'eco', level: 'phd', title: 'Eco - PhD'},
			{ faculty: 'info',level: 'bachelor', title: 'Info - Bachelor'},
			{ faculty: 'info',level: 'master', title: 'Info - Master'},
			{ faculty: 'info',level: 'phd', title: 'Info - PhD'},
		]
	}
});
