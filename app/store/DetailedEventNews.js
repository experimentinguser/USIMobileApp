Ext.define('USIMobile.store.DetailedEventNews', {
	extend: 'Ext.data.Store',

	requires: [
		'USIMobile.model.DetailedNews',
	],

	config: {
		storeId: 'detailedeventnews_store',
		model: 'USIMobile.model.DetailedNews',
		//autoLoad: true,
		//autoSync: true,
		proxy: {
			type: 'localstorage',	
			id: 'detailedeventnews'
		},
	}
});
