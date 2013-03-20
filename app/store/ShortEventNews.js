Ext.define('USIMobile.store.ShortEventNews', {
	extend: 'Ext.data.Store',

	requires: [
		'Ext.data.proxy.LocalStorage',
		'USIMobile.model.ShortNews',
	],

	models: [ ],

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
