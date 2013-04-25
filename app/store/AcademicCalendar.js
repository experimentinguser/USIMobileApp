Ext.define('USIMobile.store.AcademicCalendar', {
	extend: 'Ext.data.Store',

	requires: [
		'USIMobile.model.AcademicCalendar',
	],

	config: {
		storeId: 'academiccalendar_store',
		model: 'USIMobile.model.AcademicCalendar',
		//autoLoad: true,
		//autoSync: true,
		proxy: {
			type: 'localstorage',	
			id: 'academiccalendar'
		},
	}
});
