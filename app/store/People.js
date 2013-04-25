Ext.define('USIMobile.store.People', {
	extend: 'Ext.data.Store',

	requires: [
		'USIMobile.model.People',
	],

	config: {
		storeId: 'people_store',
		model: 'USIMobile.model.People',
		//autoLoad: true,
		//autoSync: true,
		sorters: 'firstname',
		proxy: {
			type: 'localstorage',	
			id: 'people'
		},
	}
});
