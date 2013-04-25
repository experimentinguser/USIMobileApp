Ext.define('USIMobile.store.Courses', {
	extend: 'Ext.data.Store',

	requires: [
		'USIMobile.model.Course',
	],

	config: {
		storeId: 'courses_store',
		model: 'USIMobile.model.Course',
		//autoLoad: true,
		//autoSync: true,
		sorters: 'title',
		proxy: {
			type: 'localstorage',	
			id: 'courses'
		},
	}
});
