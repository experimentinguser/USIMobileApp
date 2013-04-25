Ext.define('USIMobile.store.DetailedNews', {
	extend: 'Ext.data.Store',

	requires: [
		'USIMobile.model.DetailedNews',
	],

	config: {
		storeId: 'detailednews_store',
		model: 'USIMobile.model.DetailedNews',
		//autoLoad: true,
		//autoSync: true,
		proxy: {
			type: 'localstorage',	
			id: 'detailednews'
		},
	}
});
