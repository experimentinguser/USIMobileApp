Ext.define('USIMobile.store.SportActivity', {
	extend: 'Ext.data.Store',

	requires: [
		'Ext.data.proxy.LocalStorage',
		'USIMobile.model.SportActivity',
	],

	models: [ ],

	config: {
		storeId: 'sportactivities_store',
		model: 'USIMobile.model.SportActivity',
		//autoLoad: true,
		//autoSync: true,
		sorters: 'name',
		groupField: 'category_en',
		proxy: {
			type: 'localstorage',	
			id: 'sportactivity'
		},
	}
});
