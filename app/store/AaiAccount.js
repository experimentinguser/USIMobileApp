Ext.define('USIMobile.store.AaiAccount', {
	extend: 'Ext.data.Store',

	requires: [
		'Ext.data.proxy.LocalStorage'
	],

	models: [
		'USIMobile.model.AaiAccount',
	],

	config: {
		storeId: 'aaiaccount_store',
		model: 'USIMobile.model.AaiAccount',
		//autoLoad: true,
		//autoSync: true,
		proxy: {
			type: 'localstorage',	
			id: 'aaiaccount'
		},
	}
});
