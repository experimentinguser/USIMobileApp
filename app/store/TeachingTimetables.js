Ext.define('USIMobile.store.TeachingTimetables', {
	extend: 'Ext.data.Store',

	requires: [
		'USIMobile.model.TeachingTimetable',
	],

	config: {
		storeId: 'teachingtimetables_store',
		model: 'USIMobile.model.TeachingTimetable',
		//autoLoad: true,
		//autoSync: true,
		groupField: 'semester',
		proxy: {
			type: 'localstorage',	
			id: 'teachingtimetables'
		},
	}
});
