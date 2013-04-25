Ext.define('USIMobile.store.ShortEventNews', {
	extend: 'Ext.data.Store',

	requires: [
		'USIMobile.model.ShortNews',
	],

	config: {
		storeId: 'shorteventnews_store',
		model: 'USIMobile.model.ShortNews',
		//autoLoad: true,
		//autoSync: true,
		sorters: 'rank',
		proxy: {
			type: 'localstorage',	
			id: 'shorteventnews'
		},
	}
});
