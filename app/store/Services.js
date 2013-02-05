Ext.define('USIMobile.store.Services', {
	extend: 'Ext.data.Store',

	requires: [
		'Ext.data.proxy.LocalStorage',
		'USIMobile.model.Service',
	],

	models: [ ],

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
