Ext.define('USIMobile.store.DetailedCommunityNews', {
	extend: 'Ext.data.Store',

	requires: [
		'USIMobile.model.DetailedNews',
	],
	
	config: {
		storeId: 'detailedcommunitynews_store',
		model: 'USIMobile.model.DetailedNews',
		//autoLoad: true,
		//autoSync: true,
		proxy: {
			type: 'localstorage',	
			id: 'detailedcommunitynews'
		},
	}
});
