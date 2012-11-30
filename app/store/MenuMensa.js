Ext.define('USIMobile.store.MenuMensa', {
	extend: 'Ext.data.Store',

	requires: [
		'USIMobile.model.MenuMensa',
		'Ext.data.proxy.LocalStorage'
		],

	config: {
		storeId: 'menumensa_store',
		model: 'USIMobile.model.MenuMensa',
		autoLoad: true,
		//autoSync: true,
		proxy: {
			type: 'localstorage',	
			id: 'menumensa'
		},
	}
});
