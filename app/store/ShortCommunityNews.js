Ext.define('USIMobile.store.ShortCommunityNews', {
	extend: 'Ext.data.Store',

	requires: [
		'USIMobile.model.ShortNews',
	],

	config: {
		storeId: 'shortcommunitynews_store',
		model: 'USIMobile.model.ShortNews',
		//autoLoad: true,
		//autoSync: true,
		sorters: 'rank',
		proxy: {
			type: 'localstorage',	
			id: 'shortcommunitynews'
		},
	}
});
