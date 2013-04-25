Ext.define('USIMobile.store.Services', {
	extend: 'Ext.data.Store',

	requires: [
		'USIMobile.model.Service',
	],

	config: {
		storeId: 'services_store',
		model: 'USIMobile.model.Service',
		//autoLoad: true,
		//autoSync: true,
		proxy: {
			type: 'localstorage',	
			id: 'services'
		},
	}
});
