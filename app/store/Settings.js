Ext.define('USIMobile.store.Settings', {
	extend: 'Ext.data.Store',

	requires: [
		'USIMobile.model.Settings',
	],

	config: {
		storeId: 'settings_store',
		model: 'USIMobile.model.Settings',
		//autoLoad: true,
		//autoSync: true,
		proxy: {
			type: 'localstorage',	
			id: 'settings'
		},
	}
});
