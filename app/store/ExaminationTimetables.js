Ext.define('USIMobile.store.ExaminationTimetables', {
	extend: 'Ext.data.Store',

	requires: [
		'Ext.data.proxy.LocalStorage',
		'USIMobile.model.ExaminationTimetable',
	],

	models: [ ],

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
