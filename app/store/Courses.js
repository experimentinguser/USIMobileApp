Ext.define('USIMobile.store.Courses', {
	extend: 'Ext.data.Store',

	requires: [
		'Ext.data.proxy.LocalStorage',
		'USIMobile.model.Course',
	],

	models: [ ],

	config: {
		storeId: 'courses_store',
		model: 'USIMobile.model.Course',
		autoLoad: true,
		autoSync: true,
		sorters: 'Titolo_corso',
		proxy: {
			type: 'localstorage',	
			id: 'courses'
		},
	}
});
