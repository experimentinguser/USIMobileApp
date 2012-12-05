Ext.define('USIMobile.store.Updates', {
	extend: 'Ext.data.Store',

	requires: [
		'USIMobile.model.Updates',
		'Ext.data.proxy.LocalStorage'
		],

	config: {
		storeId: 'updates_store',
		model: 'USIMobile.model.Updates',
		autoLoad: true,
		proxy: {
			type: 'localstorage',	
			id: 'updates'
		},
	}
});
