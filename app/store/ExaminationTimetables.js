Ext.define('USIMobile.store.ExaminationTimetables', {
	extend: 'Ext.data.Store',

	requires: [
		'USIMobile.model.ExaminationTimetable',
	],

	config: {
		storeId: 'examinationtimetables_store',
		model: 'USIMobile.model.ExaminationTimetable',
		//autoLoad: true,
		//autoSync: true,
		groupField: 'semester',
		proxy: {
			type: 'localstorage',	
			id: 'examinationtimetables'
		},
	}
});
